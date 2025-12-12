// step3-rent-escalations.ts
// Rent escalation engine for Sunrise Tech Park
// - Supports percentPerYear, flatPerYear, flat, and detail schedules
// - Produces annual rent for a specified number of years and optional monthly breakdown

export type EscalationMethod =
  | { type: "percentPerYear"; percent: number } // e.g. {type:"percentPerYear", percent:3.5}
  | { type: "flatPerYear"; amount: number } // e.g. {type:"flatPerYear", amount:150000}
  | { type: "flat" } // no change (0%/yr)
  | { type: "detail"; schedule: Record<number, number> }; // schedule: yearIndex(1-based) -> absolute annual amount

export interface TenantEscalationInput {
  tenantId: string; // unique id/suite
  tenantName: string;
  baseAnnualRent: number; // rent in Year 0 (in-place annual rent)
  escalation?: EscalationMethod; // defaults to flat
  leaseEndYear?: number; // calendar year of lease end (optional, used only for truncation)
  contractEndYear?: number; // optional (includes options)
}

export interface AnnualRent {
  yearIndex: number; // 1..N (Year 1 = model Year 1)
  calendarYear: number; // e.g. 2026, 2027, ...
  annualRent: number;
  monthlyProfile?: number[]; // optional 12-element monthly numbers (equal split by default)
}

/** Options for the generator */
export interface EscalationOptions {
  modelYear: number; // calendar year for model Year 1 (e.g. 2026)
  years: number; // number of years to produce (e.g. 5)
  monthlyBreakdown?: boolean; // produce simple monthly splits if true
}

/** helper: round to nearest integer (currency) */
function roundCurrency(x: number): number {
  return Math.round(x);
}

/** produce per-tenant annual schedule */
export function generateAnnualSchedule(tenant: TenantEscalationInput, opts: EscalationOptions): AnnualRent[] {
  const years = opts.years;
  const modelYear = opts.modelYear;
  const base = tenant.baseAnnualRent;
  const esc = tenant.escalation ?? { type: "flat" };

  const out: AnnualRent[] = [];
  let current = base;

  for (let i = 1; i <= years; i++) {
    const calYear = modelYear + (i - 1);

    // if tenant.leaseEndYear provided, and lease ended before this calYear, stop returning rents (or return 0)
    if (tenant.leaseEndYear && calYear > tenant.leaseEndYear) {
      out.push({ yearIndex: i, calendarYear: calYear, annualRent: 0, monthlyProfile: opts.monthlyBreakdown ? Array(12).fill(0) : undefined });
      continue;
    }

    // If escalation is "detail" and provides explicit amount for this year -> use that absolute amount
    if (esc.type === "detail") {
      const val = esc.schedule[i]; // schedule keyed by 1-based yearIndex
      if (typeof val === "number") {
        current = val;
      } else {
        // if no explicit value, assume previous year escalated by 0 (flat)
        // (you may choose to fallback differently)
      }
    }

    // push current year's rent
    const annualRounded = roundCurrency(current);
    const monthly = opts.monthlyBreakdown ? Array(12).fill(roundCurrency(annualRounded / 12)) : undefined;
    out.push({ yearIndex: i, calendarYear: calYear, annualRent: annualRounded, monthlyProfile: monthly });

    // compute next year's value according to escalation (applies after current year's amount)
    if (esc.type === "percentPerYear") {
      current = current * (1 + esc.percent / 100);
    } else if (esc.type === "flatPerYear") {
      current = current + esc.amount;
    } else if (esc.type === "flat") {
      // leave as-is
    } else if (esc.type === "detail") {
      // if next year's explicit amount exists, the loop will pick it up next iteration
      // otherwise keep current (flat)
    }
  }

  return out;
}

/** aggregate many tenants into building-level series */
export function aggregateAnnualSchedules(tenants: TenantEscalationInput[], opts: EscalationOptions): { year: number; totalAnnualRent: number; perTenant?: Record<string, number> }[] {
  const aggregated: { year: number; totalAnnualRent: number; perTenant?: Record<string, number> }[] = [];
  for (let i = 1; i <= opts.years; i++) {
    const calYear = opts.modelYear + (i - 1);
    let total = 0;
    const perTenant: Record<string, number> = {};
    for (const t of tenants) {
      const sched = generateAnnualSchedule(t, opts)[i - 1];
      const amt = sched ? sched.annualRent : 0;
      perTenant[t.tenantId] = amt;
      total += amt;
    }
    aggregated.push({ year: calYear, totalAnnualRent: total, perTenant });
  }
  return aggregated;
}

const tenants: TenantEscalationInput[] = [
  { tenantId: "101", tenantName: "Infosys", baseAnnualRent: 38400000, escalation: { type: "percentPerYear", percent: 3.5 }, leaseEndYear: 2031, contractEndYear: 2041 },
  { tenantId: "102", tenantName: "Wipro", baseAnnualRent: 25200000, escalation: { type: "flatPerYear", amount: 150000 }, leaseEndYear: 2029, contractEndYear: 2032 },
  // For TCS we provide a "detail" schedule matching your doc's year-by-year values.
  {
    tenantId: "103",
    tenantName: "TCS",
    baseAnnualRent: 24000000,
    escalation: {
      type: "detail",
      schedule: {
        1: 24000000, // 2026
        2: 24960000, // 2027
        3: 25958400, // 2028
        4: 26996736, // 2029
        5: 28076605, // 2030 (rounded in doc)
        // ... continue as needed
      },
    },
    leaseEndYear: 2030,
    contractEndYear: 2035,
  },
  { tenantId: "104", tenantName: "Vodafone", baseAnnualRent: 21000000, escalation: { type: "flat" }, leaseEndYear: 2028, contractEndYear: 2028 },
];

const opts = { modelYear: 2026, years: 5, monthlyBreakdown: false };
const aggregated = aggregateAnnualSchedules(tenants, opts);
console.log(aggregated);
