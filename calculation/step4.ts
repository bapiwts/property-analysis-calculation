// step4-ulc.ts
// Step 4 — Unpaid Leasing Costs (ULC) calculations & schedules

export interface TenantULCInput {
  tenantId: string; // e.g. "101"
  tenantName?: string;
  leaseStart: string | Date; // lease start (same format as Rent Roll)
  initialLeaseMonths: number; // e.g. 120
  // amounts (full nominal amounts at lease inception)
  totalTI?: number; // tenant improvements
  totalLC?: number; // leasing commissions
  concessions?: number; // free rent / concessions
  // optional override: amortize over this many months instead of initialLeaseMonths
  amortizationMonthsOverride?: number | null;
}

export interface ULCPerTenant {
  tenantId: string;
  tenantName?: string;
  initialLeaseMonths: number;
  remainingMonths: number;
  amortizationMonths: number; // chosen amortization length (total months over which amortization was originally taken)
  // original amounts
  totalTI: number;
  totalLC: number;
  concessions: number;
  // unamortized amounts at analysis/acquisition date
  unamortizedTI: number;
  unamortizedLC: number;
  unamortizedConcessions: number;
  unamortizedTotal: number;
  // monthly straight-line amortization schedule for the unamortizedTotal (array length = remainingMonths)
  monthlyAmortSchedule?: number[]; // each element is payment/expense recognized monthly (positive numbers)
  // ISO dates for schedule
  scheduleMonthsISO?: string[]; // first date = next month from analysisDate (or analysis month?) — see options below
}

export interface ULCReport {
  perTenant: ULCPerTenant[];
  totalUnamortizedTI: number;
  totalUnamortizedLC: number;
  totalUnamortizedConcessions: number;
  totalUnamortizedAll: number;
  analysisDateISO: string;
}

/* ---------- helpers ---------- */

function toDate(d: string | Date): Date {
  if (d instanceof Date) return d;
  const dt = new Date(d);
  if (isNaN(dt.getTime())) throw new Error(`Invalid date: ${d}`);
  return dt;
}

/** Compute Lease End inclusive: LeaseStart + months - 1 day */
function addMonthsMinusOneDay(start: Date, months: number): Date {
  const y = start.getFullYear();
  const m = start.getMonth();
  const day = start.getDate();
  const dt = new Date(y, m + months, day);
  dt.setDate(dt.getDate() - 1);
  return dt;
}

/** months difference (whole months), conservative: if end's day < start's day subtract 1 */
function monthsDiff(start: Date, end: Date): number {
  if (end < start) return 0;
  let months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  if (end.getDate() < start.getDate()) months -= 1;
  return Math.max(0, months);
}

function roundCurrency(v: number): number {
  return Math.round(v); // change to Math.round(v*100)/100 for paise precision if needed
}

/* ---------- core calculation functions ---------- */

/**
 * Compute unamortized portion of an original amount
 * originalAmount × (remainingMonths / amortizationMonths)
 */
export function calculateUnamortizedAmount(originalAmount: number, amortizationMonths: number, remainingMonths: number): number {
  if (!isFinite(originalAmount) || originalAmount <= 0) return 0;
  if (amortizationMonths <= 0) return 0;
  const rem = Math.max(0, Math.min(remainingMonths, amortizationMonths));
  return originalAmount * (rem / amortizationMonths);
}

/**
 * Generate straight-line monthly schedule (array) for a given unamortized amount across remainingMonths.
 * If remainingMonths === 0 => returns [].
 */
export function generateMonthlyAmortSchedule(unamortizedAmount: number, remainingMonths: number): number[] {
  if (remainingMonths <= 0 || unamortizedAmount <= 0) return [];
  // distribute evenly; last month picks up any rounding diff
  const monthly = Math.floor(unamortizedAmount / remainingMonths); // integer rupee
  const schedule = Array(remainingMonths).fill(monthly);
  const remainder = Math.round(unamortizedAmount - monthly * remainingMonths);
  if (remainder !== 0) {
    // add the remainder to the last month
    schedule[schedule.length - 1] = schedule[schedule.length - 1] + remainder;
  }
  return schedule;
}

/**
 * Main orchestrator:
 * - inputs: tenantULCs[], analysisDate
 * - outputs: per-tenant unamortized amounts and deal totals
 *
 * Notes:
 * - amortizationMonths chosen = amortizationMonthsOverride || initialLeaseMonths
 * - remainingMonths = monthsDiff(analysisDate, leaseEnd)
 */
export function buildULCReport(tenantULCs: TenantULCInput[], analysisDate: string | Date): ULCReport {
  const analysis = toDate(analysisDate);
  const perTenant: ULCPerTenant[] = [];

  for (const t of tenantULCs) {
    const leaseStart = toDate(t.leaseStart);
    const leaseEnd = addMonthsMinusOneDay(leaseStart, t.initialLeaseMonths);
    const remainingMonths = monthsDiff(analysis, leaseEnd);
    const amortMonths = t.amortizationMonthsOverride && t.amortizationMonthsOverride > 0 ? t.amortizationMonthsOverride : t.initialLeaseMonths;

    const ti = t.totalTI ?? 0;
    const lc = t.totalLC ?? 0;
    const con = t.concessions ?? 0;

    const unamTI = calculateUnamortizedAmount(ti, amortMonths, remainingMonths);
    const unamLC = calculateUnamortizedAmount(lc, amortMonths, remainingMonths);
    const unamCon = calculateUnamortizedAmount(con, amortMonths, remainingMonths);
    const unamTotal = unamTI + unamLC + unamCon;

    // build monthly schedule (simple straight-line) starting from next month of analysis (convention)
    const monthlySchedule = generateMonthlyAmortSchedule(roundCurrency(unamTotal), remainingMonths);

    // schedule ISO months: we create list of month-start ISO strings for each payment
    const scheduleMonthsISO: string[] = [];
    if (monthlySchedule.length > 0) {
      const firstPayment = new Date(analysis.getFullYear(), analysis.getMonth() + 1, 1); // 1st day of next month
      for (let i = 0; i < monthlySchedule.length; i++) {
        const d = new Date(firstPayment.getFullYear(), firstPayment.getMonth() + i, 1);
        scheduleMonthsISO.push(d.toISOString());
      }
    }

    perTenant.push({
      tenantId: t.tenantId,
      tenantName: t.tenantName,
      initialLeaseMonths: t.initialLeaseMonths,
      remainingMonths,
      amortizationMonths: amortMonths,
      totalTI: ti,
      totalLC: lc,
      concessions: con,
      unamortizedTI: roundCurrency(unamTI),
      unamortizedLC: roundCurrency(unamLC),
      unamortizedConcessions: roundCurrency(unamCon),
      unamortizedTotal: roundCurrency(unamTotal),
      monthlyAmortSchedule: monthlySchedule,
      scheduleMonthsISO,
    });
  }

  const totalUnamTI = perTenant.reduce((s, p) => s + p.unamortizedTI, 0);
  const totalUnamLC = perTenant.reduce((s, p) => s + p.unamortizedLC, 0);
  const totalUnamCon = perTenant.reduce((s, p) => s + p.unamortizedConcessions, 0);
  const totalUnamAll = totalUnamTI + totalUnamLC + totalUnamCon;

  return {
    perTenant,
    totalUnamortizedTI: totalUnamTI,
    totalUnamortizedLC: totalUnamLC,
    totalUnamortizedConcessions: totalUnamCon,
    totalUnamortizedAll: totalUnamAll,
    analysisDateISO: analysis.toISOString(),
  };
}
