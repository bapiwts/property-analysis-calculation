/**
 * STEP 2 - RENT ROLL PROCESSING
 * Sunrise Tech Park - Real Estate Financial Analysis
 */

export type IncreaseMethod =
  | { type: "percentPerYear"; percent: number } // e.g. 3.5 => 3.5% p.a.
  | { type: "flatPerYear"; amount: number } // e.g. 150000 => +₹150,000 each year
  | { type: "flat"; amount: number } // no change
  | { type: "detail"; schedule: Record<number, number> }; // yearIndex -> annual amount

export interface TenantInput {
  suite: string;
  tenantName: string;
  squareFeet: number;
  leasedOrSpec?: "Leased" | "Spec";
  leaseStart: string | Date;
  initialLeaseMonths: number; // e.g. 120
  option1Months?: number; // e.g. 60
  option2Months?: number; // e.g. 60
  inPlaceRentPerMonth?: number; // monthly in-place rent (if available)
  annualBaseRent?: number; // annual in-place rent (either this or inPlaceRentPerMonth required)
  rentPerSF?: number | null; // optional
  increase?: IncreaseMethod; // escalation type
  isVacant?: boolean;
  reimbursementType?: string; // e.g. "Full Service Gross", "Modified Gross", "Base Year Stop"
  // tenant-level TI/LC/concessions possible for later steps
  tenantTI?: number;
  tenantLC?: number;
  concessions?: number;
}

export interface TenantOutput {
  suite: string;
  tenantName: string;
  squareFeet: number;
  percentOfTotalSF: number; // (tenant SF / NLA) * 100
  leasedOrSpec?: string;

  leaseStartISO: string;
  leaseEndISO: string; // Lease End = leaseStart + initialLeaseMonths - 1 day
  contractEndISO: string; // Contract End = leaseStart + (initial+opt1+opt2) - 1 day
  leaseTermMonths: number; // initialLeaseMonths
  termYears: number; // (initial+options)/12
  remainingTermMonths: number; // months between analysisDate and LeaseEnd (>=0)
  remainingTermYears: number; // remainingTermMonths / 12

  inPlaceRentPerMonth: number;
  annualRent: number;
  annualRentPerSF: number;

  increase?: IncreaseMethod;
  increaseDescription?: string;
  isVacant: boolean;

  reimbursementType?: string;

  // raw source (optional)
  source?: TenantInput;
}

export interface RentRollReport {
  tenants: TenantOutput[];
  totalNLA: number; // sum of tenant SF
  buildingSF: number; // passed from step 1
  unallocatedSF: number; // buildingSF - totalNLA
  occupancyPercent: number; // leasedSF / buildingSF * 100
  totalAnnualRent: number;
  totalMonthlyRent: number;
  totalAnnualRentPerSF: number; // totalAnnualRent / totalNLA
  waltMonths: number; // weighted avg remaining lease term in months (remainingTerm * SF weighted)
  waltYears: number;
  analysisDateISO: string;
}

/* ----------------------- helpers & validators ----------------------- */

function toDate(d: string | Date): Date {
  if (d instanceof Date) return d;
  const dt = new Date(d);
  if (isNaN(dt.getTime())) throw new Error(`Invalid date: ${d}`);
  return dt;
}

/** Add months to date and subtract 1 day to compute inclusive Lease End */
function addMonthsMinusOneDay(start: Date, months: number): Date {
  const y = start.getFullYear();
  const m = start.getMonth();
  const day = start.getDate();

  // create date after adding months
  const dt = new Date(y, m + months, day);
  // subtract 1 day
  dt.setDate(dt.getDate() - 1);
  return dt;
}

/** months between two dates (end >= start). We count full months by year/month difference,
    if end day < start day we subtract 1 month to get whole-month count (conservative) */
function monthsDiff(start: Date, end: Date): number {
  if (end < start) return 0;
  let months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  if (end.getDate() < start.getDate()) months -= 1;
  return Math.max(0, months);
}

function assertNonNegativeFinite(name: string, v: number) {
  if (typeof v !== "number" || !isFinite(v) || v < 0) throw new Error(`${name} must be a non-negative finite number`);
}

/* ----------------------- main processor ----------------------- */

export function buildRentRoll(tenantInputs: TenantInput[], buildingSquareFootage: number, analysisDate: string | Date): RentRollReport {
  // validations
  assertNonNegativeFinite("buildingSquareFootage", buildingSquareFootage); // quick check
  const analysis = toDate(analysisDate);

  // compute total NLA (sum of tenant SF in inputs)
  const totalNLA = tenantInputs.reduce((s, t) => s + (t.squareFeet || 0), 0);

  const tenantsOut: TenantOutput[] = tenantInputs.map((t) => {
    if (!t.squareFeet || t.squareFeet <= 0) throw new Error(`tenant ${t.tenantName} has invalid squareFeet`);
    if (!t.initialLeaseMonths || t.initialLeaseMonths <= 0) throw new Error(`tenant ${t.tenantName} has invalid initialLeaseMonths`);

    const leaseStart = toDate(t.leaseStart);
    const leaseEnd = addMonthsMinusOneDay(leaseStart, t.initialLeaseMonths);
    const totalContractMonths = t.initialLeaseMonths + (t.option1Months || 0) + (t.option2Months || 0);
    const contractEnd = addMonthsMinusOneDay(leaseStart, totalContractMonths);

    const remainingMonths = monthsDiff(analysis, leaseEnd);

    // derive annual rent
    let monthly = t.inPlaceRentPerMonth ?? (t.annualBaseRent ? t.annualBaseRent / 12 : undefined);
    if (monthly === undefined) throw new Error(`tenant ${t.tenantName} must provide inPlaceRentPerMonth or annualBaseRent`);
    const annual = monthly * 12;
    const annualPerSF = annual / t.squareFeet;

    const pctOfTotal = totalNLA > 0 ? (t.squareFeet / totalNLA) * 100 : 0;

    // increase description
    let incDesc = "none";
    if (t.increase) {
      switch (t.increase.type) {
        case "percentPerYear":
          incDesc = `${t.increase.percent}% p.a.`;
          break;
        case "flatPerYear":
          incDesc = `+₹${t.increase.amount} p.a.`;
          break;
        case "flat":
          incDesc = `flat`;
          break;
        case "detail":
          incDesc = `detailed schedule`;
          break;
      }
    }

    return {
      suite: t.suite,
      tenantName: t.tenantName,
      squareFeet: t.squareFeet,
      percentOfTotalSF: Number(pctOfTotal.toFixed(6)),
      leasedOrSpec: t.leasedOrSpec,
      leaseStartISO: leaseStart.toISOString(),
      leaseEndISO: leaseEnd.toISOString(),
      contractEndISO: contractEnd.toISOString(),
      leaseTermMonths: t.initialLeaseMonths,
      termYears: Number((totalContractMonths / 12).toFixed(6)),
      remainingTermMonths: remainingMonths,
      remainingTermYears: Number((remainingMonths / 12).toFixed(6)),
      inPlaceRentPerMonth: monthly,
      annualRent: annual,
      annualRentPerSF: Number(annualPerSF.toFixed(6)),
      increase: t.increase,
      increaseDescription: incDesc,
      isVacant: t.isVacant ?? false,
      reimbursementType: t.reimbursementType,
      source: t,
    };
  });

  // aggregates
  const leasedSF = tenantsOut.filter((t) => !t.isVacant).reduce((s, t) => s + t.squareFeet, 0);
  const unallocatedSF = Math.max(0, buildingSquareFootage - leasedSF);
  const occupancyPct = buildingSquareFootage === 0 ? 0 : (leasedSF / buildingSquareFootage) * 100;
  const totalAnnualRent = tenantsOut.reduce((s, t) => s + (t.isVacant ? 0 : t.annualRent), 0);
  const totalMonthlyRent = totalAnnualRent / 12;
  const totalAnnualRentPerSF = leasedSF > 0 ? totalAnnualRent / leasedSF : 0;

  // WALT = Σ(remainingMonths * leasedSF) ÷ totalLeasedSF ; here we use remainingTermMonths
  const waltNumer = tenantsOut.filter((t) => !t.isVacant).reduce((sum, t) => sum + t.remainingTermMonths * t.squareFeet, 0);
  const waltMonths = leasedSF > 0 ? waltNumer / leasedSF : 0;

  return {
    tenants: tenantsOut,
    totalNLA,
    buildingSF: buildingSquareFootage,
    unallocatedSF,
    occupancyPercent: Number(occupancyPct.toFixed(6)),
    totalAnnualRent,
    totalMonthlyRent,
    totalAnnualRentPerSF: Number(totalAnnualRentPerSF.toFixed(6)),
    waltMonths: Number(waltMonths.toFixed(6)),
    waltYears: Number((waltMonths / 12).toFixed(6)),
    analysisDateISO: analysis.toISOString(),
  };
}
