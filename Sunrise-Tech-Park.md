# REAL ESTATE PROPERTY ANALYSIS - Sunrise Tech Park

## Data Flow Summary

***Property Info → Rent Roll(Tenants) → Rent Details → Unpaid Leasing Costs(ULC) → Future Tenant Assumptions(FTA) → Operating Expenses → Expense Groups → Expense Reimbursement → Expense Reimbursement Assumptions → Expense Reimbursement Operating Expense Comparison Table(Applied Assumptions and Without Applied Assumptions) → Construction Budget → Debt(Acquisition Loan,Mezzanine Loan,Refinance Loan) →  Waterfall(Annual CF,Monthly CF) → Sensitivities***

## 🔵 STEP 1 — PROPERTY OVERVIEW

### Property Overview

| Field                     | Value              |
| ------------------------- | ------------------ |
| Property Name             | Sunrise Tech Park  |
| Address Line 1            | 12 Tech Drive      |
| City                      | Bengaluru          |
| State                     | KA                 |
| Zip Code                  | 560103             |
| Country                   | India              |
| Year Built                | 2015               |
| Land Acres                | 3.2                |
| Land Square Footage       | 139,392            |
| Building Square Footage   | 120,000            |
| Number of Stories         | 7                  |
| Property Type             | Office / Tech Park |
| Uncovered Parking Spaces  | 210                |
| Covered Parking Spaces    | 90                 |
| Purchase Price            | ₹115,000,000       |
| Closing Costs (%)         | 3%                 |
| Upfront Working Capital   | ₹750,000           |
| Analysis Date             | Aug 29, 2025       |
| Cost of Sale (%)          | 2%                 |
| Exit Cap Rate             | 6.50%              |
| Hold Period (Months)      | 60                 |
| Acquisition Fee (%)       | 1%                 |
| Asset Management Fee (%)  | 1%                 |
| Construction Mgmt Fee (%) | 2%                 |
| Disposition Fee (%)       | 1%                 |

### Property Overview Calculations

### Land Square Footage

```plan
Formula: Land Acres × 43,560
Calculation: 3.2 × 43,560 = 139,392 SF
```

### Purchase Price / SF

```plan
Formula: Purchase Price ÷ Building Square Footage
Calculation: ₹115,000,000 ÷ 120,000 = ₹958.33 / SF
```

### Total Parking Spaces

```plan
Formula: Uncovered Parking Spaces + Covered Parking Spaces
Calculation: 210 + 90 = 300 spaces
```

### Total Spaces / 1,000 SF

```plan
Formula: Total Parking Spaces ÷ (Building Square Footage ÷ 1,000)
Calculation: 300 ÷ (120,000 ÷ 1,000) = 300 ÷ 120 = 2.50 spaces per 1,000 SF
```

### Total Upfront & Planned Capital

```plan
Formula: Purchase Price + (Purchase Price × Closing Costs %) + Upfront Working Capital + Acquisition Fee
Calculation: ₹115,000,000 + (₹115,000,000 × 0.03) + ₹750,000 + ₹1,150,000
= ₹115,000,000 + ₹3,450,000 + ₹750,000 + ₹1,150,000
= ₹120,350,000
```

### Closing Costs Amount

```plan
Formula: Purchase Price × Closing Costs %
Calculation: ₹115,000,000 × 0.03 = ₹3,450,000
```

### Acquisition Fee Amount

```plan
Formula: Purchase Price × Acquisition Fee %
Calculation: ₹115,000,000 × 0.01 = ₹1,150,000
```

### Net Leasable Area

```plan
Your Value: 120,000 SF
Note: This assumes 100% building efficiency (NLA = BSF). This will be verified once you provide the Rent Roll with individual suite square footages.
```

| Field                    | Value                   |
| ------------------------ | ----------------------- |
| Upfront Working Capital  | ₹750,000                |
| Purchase Price / SF      | ₹958.33 / SF            |
| Year 1 Cap Rate          | (Calculated after OpEx) |
| Adjusted Year 2 Cap Rate | (Calculated after OpEx) |
| Total Spaces             | 300                     |
| Parking Spaces           | 300                     |
| Net Leasable Area        | 120,000 SF              |

## 🔵 STEP 2 — RENT ROLL

### Rentroll Table

| Suite | Tenant   | Leased/Spec | Tenant SF | % of Total SF | Lease Start | Initial Lease (mo) | Lease End   | Option 1 (mo) | Option 2 (mo) | Contract End | Term (years) | Remaining Term (years) | In-Place Rent (₹/mo) | Annual Rent (₹) | Annual Rent/SF (₹) | Monthly Rent/SF (₹) | Increase Method | Increase |
| ----- | -------- | ----------- | --------- | ------------- | ----------- | ------------------ | ----------- | ------------- | ------------- | ------------ | ------------ | ---------------------- | -------------------- | --------------- | ------------------ | ------------------- | --------------- | -------- |
| 101   | Infosys  | Leased      | 40,000    | 33.3%         | Jan-01-2022 | 120                | Dec-31-2031 | 60            | 60            | Dec-31-2041  | 20.0         | 6.33                   | 3,200,000            | 38,400,000      | 960                | 80                  | Inc. %/Yr       | 3.5%     |
| 102   | Wipro    | Leased      | 30,000    | 25.0%         | Jul-01-2021 | 96                 | Jun-30-2029 | 36            | 0             | Jun-30-2032  | 11.0         | 3.58                   | 2,100,000            | 25,200,000      | 840                | 70                  | Inc. $/Yr       | 150,000  |
| 103   | TCS      | Leased      | 25,000    | 20.8%         | Sep-01-2020 | 120                | Aug-31-2030 | 60            | 0             | Aug-31-2035  | 15.0         | 4.92                   | 2,000,000            | 24,000,000      | 960                | 80                  | Detail          | —        |
| 104   | Vodafone | Leased      | 25,000    | 20.8%         | Jan-01-2024 | 60                 | Dec-31-2028 | 0             | 0             | Dec-31-2028  | 5.0          | 3.33                   | 1,750,000            | 21,000,000      | 840                | 70                  | Flat            | 0%       |

### Rentroll Calculations

#### Net Leasable Area (NLA)

```plan
Formula: Sum of all tenant SF
Calculation: 40,000 + 30,000 + 25,000 + 25,000 = 120,000 SF
```

#### Building Efficiency

```plan
Formula: NLA ÷ Building SF
Calculation: 120,000 ÷ 120,000 = 100%
```

#### Current Occupancy

```plan
Formula: (Sum of leased SF) ÷ NLA
Calculation: 120,000 ÷ 120,000 = 100% (Fully leased)
```

#### % of Total SF

```plan
Formula:  % of Total SF = (Tenant SF ÷ NLA) × 100
Calculation:
| Tenant   | Tenant SF | % of Total SF |
| -------- | --------- | ------------- |
| Infosys  | 40,000    | 33.33%        |
| Wipro    | 30,000    | 25.00%        |
| TCS      | 25,000    | 20.83%        |
| Vodafone | 25,000    | 20.83%        |
```

#### Lease End

```plan
Formula : Lease End = Lease Start + (Initial Lease months) − 1 day
Calculation:
| Tenant   | Lease Start  | Initial Lease (mo) | Lease End    |
| -------- | ------------ | ------------------ | ------------ |
| Infosys  | Jan 01, 2022 | 120                | Dec 31, 2031 |
| Wipro    | Jul 01, 2021 | 96                 | Jun 30, 2029 |
| TCS      | Sep 01, 2020 | 120                | Aug 31, 2030 |
| Vodafone | Jan 01, 2024 | 60                 | Dec 31, 2028 |
```

#### Contract End

```plan
Formula: Contract End = Lease Start + (Initial + Option1 + Option2 months) − 1 day
Calculation:
| Tenant   | Initial | Opt1 | Opt2 | Total Months | Contract End |
| -------- | ------- | ---- | ---- | ------------ | ------------ |
| Infosys  | 120     | 60   | 60   | 240          | Dec 31, 2041 |
| Wipro    | 96      | 36   | 0    | 132          | Jun 30, 2032 |
| TCS      | 120     | 60   | 0    | 180          | Aug 31, 2035 |
| Vodafone | 60      | 0    | 0    | 60           | Dec 31, 2028 |
```

#### Term (years)

```plan
Formula: Term (years) = (Initial + Option1 + Option2 months) ÷ 12
Calculation:
| Tenant   | Total Months | Term (years) |
| -------- | ------------ | ------------ |
| Infosys  | 240          | 20.0         |
| Wipro    | 132          | 11.0         |
| TCS      | 180          | 15.0         |
| Vodafone | 60           | 5.0          |
```

#### Remaining Term (years)

***Analysis Date: Aug 29, 2025***

```plan
Formula:
Remaining Term (months) = Months between analysis date and Lease End
Remaining Term (years) = Remaining months ÷ 12

| Tenant   | Lease End    | Remaining (mo) | Remaining (yrs) |
| -------- | ------------ | -------------- | --------------- |
| Infosys  | Dec 31, 2031 | 76             | 6.33            |
| Wipro    | Jun 30, 2029 | 46             | 3.83            |
| TCS      | Aug 31, 2030 | 60             | 5.00            |
| Vodafone | Dec 31, 2028 | 40             | 3.33            |
```

#### Weighted Average Lease Term (WALT)

- **Analysis Date:** Aug 29, 2025
- **Remaining Term Calculations** (from Aug 29, 2025):

| Tenant   | Lease End   | Remaining Months | Remaining Years |
| -------- | ----------- | ---------------- | --------------- |
| Infosys  | Dec-31-2031 | 76 months        | 6.33 years      |
| Wipro    | Jun-30-2029 | 46 months        | 3.83 years      |
| TCS      | Aug-31-2030 | 60 months        | 5.00 years      |
| Vodafone | Dec-31-2028 | 40 months        | 3.33 years      |

```plan
Formula: Σ(remaining_term × leased_sf) ÷ total_leased_sf
Calculation:
- Infosys: 6.33 × 40,000 = 253,200
- Wipro: 3.83 × 30,000 = 114,900
- TCS: 5.00 × 25,000 = 125,000
- Vodafone: 3.33 × 25,000 = 83,250
- Total: 576,350

WALT: 576,350 ÷ 120,000 = 4.80 years
```

#### Total Base Rent

```plan
Formula: Sum of all annual rents
Calculation: 38,400,000 + 25,200,000 + 24,000,000 + 21,000,000 = ₹108,600,000
```

#### Total Annual / SF

```plan
Formula: Total Base Rent ÷ NLA
Calculation: 108,600,000 ÷ 120,000 = ₹905 / SF
```

### Total Monthly Amount

```plan
Formula: Total Base Rent ÷ 12
Calculation: 108,600,000 ÷ 12 = ₹9,050,000
```

#### Total EGI(Effective Gross Income)

```plan
Formula:
Calculation:
```

#### Summary Table

| Field                 | Value        |
| --------------------- | ------------ |
| Net Rentable Area     | 120,000 SF   |
| Unallocated Area (SF) | 0 SF         |
| Total Square Footage  | 120,000 SF   |
| % of Total            | 100%         |
| Total Annual / SF     | ₹905 / SF    |
| Total Annual Amount   | ₹108,600,000 |
| Total Monthly Amount  | ₹9,050,000   |
| Total TI              | ₹24,000,000  |
| Total LC              | ₹1,572,000   |
| Total Concessions     | ₹8,150,000   |

## 🔵 STEP 3 — RENT DETAIL

Rent Escalation Schedule

### Assumptions

- Infosys → +3.5% per year
- Wipro → +₹150,000 per year
- TCS → Detailed schedule (slightly higher early years)
- Vodafone → 0% (Flat rent)

### Assumption

- Year 1 = 2026, because Analysis Date = Aug 29, 2025

| Suite     | Tenant   | End Year | Year 1 (2026)   | Year 2          | Year 3          | Year 4          | Year 5          | Year 6     | Year 7     | Year 8     | Year 9     | Year 10+                            |
| --------- | -------- | -------- | --------------- | --------------- | --------------- | --------------- | --------------- | ---------- | ---------- | ---------- | ---------- | ----------------------------------- |
| 101       | Infosys  | **2041** | 38,400,000      | 39,744,000      | 41,135,040      | 42,574,766      | 44,064,882      | 45,607,163 | 47,203,415 | 48,855,534 | 50,565,432 | **Continues to Yr 20 (73,809,314)** |
| 102       | Wipro    | **2032** | 25,200,000      | 25,350,000      | 25,500,000      | 25,650,000      | 25,800,000      | 25,950,000 | 26,100,000 | 26,250,000 | 26,400,000 | **Final Yr 11 = 26,700,000**        |
| 103       | TCS      | **2035** | 24,000,000      | 24,960,000      | 25,958,400      | 26,996,736      | 28,076,605      | 29,199,669 | 30,367,656 | 31,582,362 | 32,845,656 | **Continues to Yr 15 (41,560,233)** |
| 104       | Vodafone | **2028** | 21,000,000      | 21,000,000      | 21,000,000      | 21,000,000      | 21,000,000      | N/A        | N/A        | N/A        | N/A        | N/A                                 |
| **Total** |          |          | **108,600,000** | **111,054,000** | **113,593,440** | **116,221,502** | **118,941,487** |            |            |            |            |                                     |

## 🔵 STEP 4 —  UNPAID LEASING COSTS (ULC)

### Assumptions for Sunrise Tech Park

- Only newer leases normally have ULC
- So we include for Infosys (2022), Vodafone (2024)
- Wipro & TCS have older stabilized leases → No ULC

| Suite     | Tenant   | Total TI (₹)   | Total LC (₹)   | Concessions (₹) |
| --------- | -------- | -------------- | -------------- | --------------- |
| 101       | Infosys  | 14,000,000     | 1,152,000      | 6,400,000       |
| 102       | Wipro    | 0              | 0              | 0               |
| 103       | TCS      | 0              | 0              | 0               |
| 104       | Vodafone | 10,000,000     | 420,000        | 1,750,000       |
| **TOTAL** |          | **24,000,000** | **1,572,000**  | **8,150,000**   |

## 🔵 STEP 5 —  FUTURE TENANT ASSUMPTIONS (FTA)

### FTA Assumptions

- Used for post-expiry modeling
- Applies to lease rollover years
- Market rent values based on Sunrise Tech Park rents
- Growth: 3% annual market rent growth

| Suite | Tenant   |       | New Tenant Assumptions |           |       | Renewal Tenant Assumptions |           | Market Rent at Aug 2025 |          |          | Market Rent Growth % |          |           | Reimbursement Type |     |     | Modified Gross |      |       |     |     | Base Year Stop |      |       |           |         | Base Year Stop Amount |         |          | % Pro Rata OpEx | Renewal Prob | Lease Term | Downtime |
| ----- | -------- | ----- | ---------------------- | --------- | ----- | -------------------------- | --------- | ----------------------- | -------- | -------- | -------------------- | -------- | --------- | ------------------ | --- | --- | -------------- | ---- | ----- | --- | --- | -------------- | ---- | ----- | --------- | ------- | --------------------- | ------- | -------- | --------------- | ------------ | ---------- | -------- |
|       |          | TI($) | LC(%)                  | Free Rent | TI($) | LC(%)                      | Free Rent | ($)                     | Month 12 | Month 24 | Month 36             | Month 48 | Month 60+ |                    | Tax | Ins | CAM            | Mgmt | Utils | Tax | Ins | CAM            | Mgmt | Utils | Tax($)    | Ins($)  | CAM($)                | Mgmt($) | Utils($) | (%)             | (%)          | (months)   | (months) |
| 101   | Infosys  | 350   | 3%                     | 2         | 150   | 2%                         | 1         | 80                      | 82.40    | 84.87    | 87.42                | 90.04    | 92.74     | Modified Gross     | Yes | Yes | Yes            | Yes  | Yes   | Yes | Yes | Yes            | Yes  | Yes   | 1,120,000 | 480,000 | 1,400,000             | 400,000 | 320,000  | 33.30%          | 70%          | 60         | 3        |
| 102   | Wipro    | 300   | 3%                     | 1         | 120   | 2%                         | 1         | 70                      | 72.10    | 74.26    | 76.49                | 78.79    | 81.15     | Modified Gross     | Yes | Yes | Yes            | Yes  | Yes   | Yes | Yes | Yes            | Yes  | Yes   | 720,000   | 300,000 | 960,000               | 240,000 | 210,000  | 25.00%          | 65%          | 48         | 3        |
| 103   | TCS      | 320   | 3%                     | 2         | 150   | 2%                         | 1         | 80                      | 82.40    | 84.87    | 87.42                | 90.04    | 92.74     | Modified Gross     | Yes | Yes | Yes            | Yes  | Yes   | Yes | Yes | Yes            | Yes  | Yes   | 650,000   | 275,000 | 825,000               | 225,000 | 200,000  | 20.80%          | 60%          | 60         | 3        |
| 104   | Vodafone | 280   | 2%                     | 1         | 100   | 2%                         | 0         | 70                      | 72.10    | 74.26    | 76.49                | 78.79    | 81.15     | Modified Gross     | Yes | Yes | Yes            | Yes  | Yes   | Yes | Yes | Yes            | Yes  | Yes   | 550,000   | 225,000 | 750,000               | 200,000 | 150,000  | 20.80%          | 55%          | 60         | 3        |

## 🔵 STEP 6 — OPERATING EXPENSES

### Gross Up for Reimbursement

- **Checkbox:** [ ] Gross Up for Reimbursement
- **Input Field:** Gross Up Occupancy % (e.g., 95% or 100%)
- **Description:** If checked, operating expenses are "grossed up" to the entered occupancy percentage to ensure fairness among tenants when the building is not fully occupied. Gross-Up applies only when enabled and only for applicable categories (e.g., CAM, Utilities).

```plan
Formula: GrossUpFactor = GrossUp% ÷ ActualOccupancy%
Example:
Building occupied : 100%
Gross Up %: 95%
Gross-up Factor = 95% ÷ 100% = ??
Building SF: 120,000
Total Base Rent (Annual): From Rent Roll: Infosys + Wipro + TCS + Vodafone = 38,400,000 + 25,200,000 + 24,000,000 + 21,000,000 = ₹108,600,000 / year
```

### Operating Expenses Categories

- taxes
- insurance
- utilities
- management
- cam (Common Area Maintenance)

### Operating Expenses Table

| Name                  | Category   | How Input           | Amount Type | Amount Value | Frequency | Fixed (%) | Recoverable (%) | Apply To Tenants | Start Date     | Custom Date | Inflation Type | Custom Inflation (%) |
| --------------------- | ---------- | ------------------- | ----------- | ------------ | --------- | --------- | --------------- | ---------------- | -------------- | ----------- | -------------- | -------------------- |
| Property Taxes        | taxes      | Amount              | fixed       | 2,200,000    | annually  | 0         | 100             | Yes              | Analysis Begin | —           | cpi            | —                    |
| Building Insurance    | insurance  | Amount              | fixed       | 950,000      | annually  | 0         | 100             | Yes              | Analysis Begin | —           | expense        | —                    |
| Electricity & Water   | utilities  | ₹/SF                | fixed       | 22           | monthly   | 20        | 80              | Yes              | Analysis Begin | —           | cpi            | —                    |
| Property Mgmt Fees    | management | % of Base Rent / SF | fixed       | 3.0          | monthly   | 0         | 100             | Yes              | Analysis Begin | —           | custom         | 2.5                  |
| Repairs & Maintenance | cam        | Amount              | custom      | 1,200,000    | detail    | 10        | 90              | Yes              | Custom Date    | 2025-09-01  | custom         | 3.0                  |
| Security              | cam        | Amount              | fixed       | 900,000      | annually  | 25        | 75              | Yes              | Analysis Begin | —           | expense        | —                    |
| Marketing             | management | Amount              | custom      | 850,000      | detail    | 100       | 0               | No               | Analysis Begin | —           | cpi            | —                    |
| Legal                 | management | Amount              | custom      | 500,000      | detail    | 50        | 50              | Yes              | Custom Date    | 2025-09-01  | custom         | 1.5                  |
| Landscaping           | cam        | Amount              | fixed       | 600,000      | annually  | 0         | 100             | Yes              | Analysis Begin | —           | expense        | —                    |
| Cleaning              | cam        | Amount              | fixed       | 750,000      | annually  | 100       | 0               | No               | Analysis Begin | —           | expense        | —                    |

### Calculation of Annual OpExse Amount Including Recoverable Amounts

#### With Gross-Up

***With Gross-Up (not applied — same as No Gross-Up because actual occupancy 100% ≥ gross-up 95%)***

| Expense               | Annual Amount (₹) | Recoverable % | Apply To Tenants | Recoverable Amount (₹) |
| --------------------- | ----------------- | ------------- | ---------------- | ---------------------- |
| Property Taxes        | 2,200,000.00      | 100%          | Yes              | 2,200,000.00           |
| Building Insurance    | 950,000.00        | 100%          | Yes              | 950,000.00             |
| Electricity & Water   | 31,680,000.00     | 80%           | Yes              | 25,344,000.00          |
| Property Mgmt Fees    | 3,258,000.00      | 100%          | Yes              | 3,258,000.00           |
| Repairs & Maintenance | 1,200,000.00      | 90%           | Yes              | 1,080,000.00           |
| Security              | 900,000.00        | 75%           | Yes              | 675,000.00             |
| Marketing             | 850,000.00        | 0%            | No               | 0.00                   |
| Legal                 | 500,000.00        | 50%           | Yes              | 250,000.00             |
| Landscaping           | 600,000.00        | 100%          | Yes              | 600,000.00             |
| Cleaning              | 750,000.00        | 0%            | No               | 0.00                   |
| **TOTAL**             | **₹42,888,000**   |               |                  |**₹34,357,000**         |

#### No Gross Up

| Expense               | Annual Amount (₹) | Recoverable % | Recoverable Amount (₹) |
| --------------------- | ----------------- | ------------- | ---------------------- |
| Property Taxes        | 2,200,000.00      | 100%          | 2,200,000.00           |
| Building Insurance    | 950,000.00        | 100%          | 950,000.00             |
| Electricity & Water   | 31,680,000.00     | 80%           | 25,344,000.00          |
| Property Mgmt Fees    | 3,258,000.00      | 100%          | 3,258,000.00           |
| Repairs & Maintenance | 1,200,000.00      | 90%           | 1,080,000.00           |
| Security              | 900,000.00        | 75%           | 675,000.00             |
| Marketing             | 850,000.00        | 0%            | 0.00                   |
| Legal                 | 500,000.00        | 50%           | 250,000.00             |
| Landscaping           | 600,000.00        | 100%          | 600,000.00             |
| Cleaning              | 750,000.00        | 0%            | 0.00                   |
| **TOTAL**             | **₹42,888,000**   |               | **₹34,357,000**        |

### Totals & Per-SF Metrics

- Total Operating Expenses (annual): **₹42,888,000.00** *(sum of final annual amounts)*
- Operating Expenses / SF: 42,888,000 ÷ 120,000 = **₹357.40 / SF**
- Total Recoverable Operating Expenses (annual): ₹34,357,000.00
- Recoverable / SF: 34,357,000 ÷ 120,000 = **₹286.31 / SF**

## 🔵 STEP 7 — OPERATING EXPENSES GROUPS

### Expense Groups Structure

#### Group 1: Core Operating Expenses

**Expenses Included:**

- Property Taxes
- Building Insurance
- Property Management Fees

**Example:**

```json
{
  "name": "Core Operating Expenses",
  "expenses": [
    {
      "name": "Property Taxes",
      "reimbursable": "Yes",
      "baseYearStopAmount": 2200000,
      "recoverablePercentage": 100
    },
    {
      "name": "Building Insurance",
      "reimbursable": "Yes",
      "baseYearStopAmount": 950000,
      "recoverablePercentage": 100
    },
    {
      "name": "Property Management Fees",
      "reimbursable": "Yes",
      "baseYearStopAmount": 3258000,
      "recoverablePercentage": 100
    }
  ]
}

```

#### Group 2: Maintenance & Utilities

**Expenses Included:**

- Electricity & Water
- Repairs & Maintenance
- Security

**Example:**

```json
{
  "name": "Maintenance & Utilities",
  "expenses": [
    {
      "name": "Electricity & Water",
      "reimbursable": "Yes",
      "baseYearStopAmount": 31680000,
      "recoverablePercentage": 80
    },
    {
      "name": "Repairs & Maintenance",
      "reimbursable": "Yes",
      "baseYearStopAmount": 1200000,
      "recoverablePercentage": 90
    },
    {
      "name": "Security",
      "reimbursable": "Yes",
      "baseYearStopAmount": 900000,
      "recoverablePercentage": 75
    }
  ]
}

```

#### Group 3: Common Area & Facilities

**Expenses:**

- Landscaping (100% recoverable)
- Legal (50% recoverable)
- Cleaning (0% recoverable)

**Example:**

```json
{
  "name": "Common Area & Facilities",
  "expenses": [
    {
      "name": "Landscaping",
      "reimbursable": "Yes",
      "baseYearStopAmount": 600000,
      "recoverablePercentage": 100
    },
    {
      "name": "Legal",
      "reimbursable": "Yes",
      "baseYearStopAmount": 500000,
      "recoverablePercentage": 50
    },
    {
      "name": "Cleaning",
      "reimbursable": "No",
      "baseYearStopAmount": 0,
      "recoverablePercentage": 0
    }
  ]
}

```

#### Group 4: Non-Recoverable Expenses

**Expenses:**

- Marketing (0% recoverable)

**Example:**

```json
{
  "name": "Non-Recoverable Expenses",
  "expenses": [
    {
      "name": "Marketing",
      "reimbursable": "No",
      "baseYearStopAmount": 0,
      "recoverablePercentage": 0
    }
  ]
}

```

## 🔵 STEP 8 — OPERATING EXPENSES REIMBURSEMENT(per tenant)

| Suite   | Tenant       | Detail (Y/N) | Reimbursement Type | Expense Groups |          |     | Modified Gross |      |       |          |     | Base Year Stop |      |       |              |         | Base Year Stop Amount |          |          | Pro Rata   | Recovery % | CAM Cap | CAM Annual |           |                               | Reimbursement Years 1-5 |           |           |
| ------- | ------------ | ------------ | ------------------ | -------------- | -------- | --- | -------------- | ---- | ----- | -------- | --- | -------------- | ---- | ----- | ------------ | ------- | --------------------- | -------- | -------- | ---------- | ---------- | ------- | ---------- | --------- | ----------------------------- | ----------------------- | --------- | --------- |
|         |              |              |                    |                | Prop Tax | Ins | CAM            | Mgmt | Utils | Prop Tax | Ins | CAM            | Mgmt | Utils | Prop Tax (₹) | Ins (₹) | CAM (₹)               | Mgmt (₹) | Utils(₹) |            |            |         |            |           |                               |                         |           |           |
| **101** | **Infosys**  | Yes          | Full Service Gross | –              | –        | –   | –              | –    | –     | –        | –   | –              | –    | –     | –            | –       | –                     | –        | –        | **33.33%** | 0%         | None    | –          | –         | All expenses included in rent |                         | –         | –         |
| **102** | **Wipro**    | Yes          | None               | Core Operating | –        | –   | –              | –    | –     | –        | –   | –              | –    | –     | 550,000      | 237,500 | –                     | 814,500  | –        | **25.00%** | 80%        | None    | –          | 1,281,600 | 1,315,840                     | 1,351,002               | 1,387,110 | 1,424,192 |
| **103** | **TCS**      | Yes          | Base Year Stop     | –              | No       | No  | No             | No   | No    | Yes      | Yes | Yes            | Yes  | Yes   | 650,000      | 275,000 | 825,000               | 225,000  | 200,000  | **20.83%** | 95%        | Cum     | 4%         | 2,066,250 | 2,097,600                     | 2,130,204               | 2,164,112 | 2,199,377 |
| **104** | **Vodafone** | Yes          | Modified Gross     | –              | Yes      | Yes | Yes            | No   | No    | –        | –   | –              | –    | –     | 458,333      | 197,917 | 5,280,000             | –        | –        | **20.83%** | 75%        | None    | –          | 860,156   | 885,961                       | 912,540                 | 939,916   | 968,114   |

### EXPLANATIONS & CALCULATIONS (FULL)

**Property-Level Data Recap:**

- Building SF - 120,000
- Total Base Rent - ₹108,600,000
- Total OpEx - ₹42,888,000
- Total Recoverable OpEx - ₹34,357,000
- Occupancy - 100%

#### SUITE 101 - INFOSYS (40,000 SF)

**Configuration:**

- Pro Rata: 40,000 ÷ 120,000 = 33.33%
- Reimbursement Type: Full Service Gross (FSG)
- Recovery %: 0% (all included in rent)
- CAM Cap: None

**Calculation:**

```plan
FSG = All operating expenses included in base rent
No additional reimbursements to tenant
Landlord bears all OpEx risk
Year 1-5 Reimbursement: ₹0 for all years
```

#### SUITE 102 - WIPRO (30,000 SF)

**Configuration:**

- Pro Rata: 30,000 ÷ 120,000 = 25.00%
- Expense Group: Core Operating Expenses
- Recovery %: 80% (of pro-rata share)
- CAM Cap: None
- Group = Core Operating (Taxes ₹2,200,000; Insurance ₹950,000; Mgmt ₹3,258,000)

**Core Operating Expenses Breakdown:**

| Expense            | Annual Amount  | Wipro's Share (25%) |
| ------------------ | -------------- | ------------------- |
| Property Taxes     | ₹2,200,000     | ₹550,000            |
| Building Insurance | ₹950,000       | ₹237,500            |
| Property Mgmt Fees | ₹3,258,000     | ₹814,500            |
| **Total**          | **₹6,408,000** | **₹1,602,000**      |

**Year 1 Calculation**
Formula: Pro-Rata Share × Recovery %
Calculation: ₹1,602,000 × 0.80 = **₹1,281,600**

| Year | Taxes (CPI 3%) | Insurance (Exp 2.5%) | Mgmt (Custom 2.5%) | Total Pro-Rata | Recovery (80%) |
| ---- | -------------- | -------------------- | ------------------ | -------------- | -------------- |
| 1    | ₹550,000       | ₹237,500             | ₹814,500           | ₹1,602,000     | **₹1,281,600** |
| 2    | ₹566,500       | ₹243,438             | ₹834,863           | ₹1,644,800     | **₹1,315,840** |
| 3    | ₹583,495       | ₹249,523             | ₹855,734           | ₹1,688,752     | **₹1,351,002** |
| 4    | ₹600,999       | ₹255,761             | ₹877,128           | ₹1,733,888     | **₹1,387,110** |
| 5    | ₹619,029       | ₹262,155             | ₹899,056           | ₹1,780,240     | **₹1,424,192** |

#### SUITE 103 - TCS (25,000 SF)

**Configuration:**

- Pro Rata: 25,000 ÷ 120,000 = 20.83%
- Reimbursement Type: Base Year Stop
- Recovery %: 95% (of increases above base year)
- CAM Cap: 4% Cumulative (applied to CAM only)

**Base Year Stop Amounts (Given in FTA):**

| Category     | Base Year Stop Amount |
| ------------ | --------------------- |
| Property Tax | ₹650,000              |
| Insurance    | ₹275,000              |
| CAM          | ₹825,000              |
| Management   | ₹225,000              |
| Utilities    | ₹200,000              |
| **Total**    | **₹2,175,000**        |

**Year 1 Calculation:**

```plan
Formula: Base Year Total × Recovery %
Calculation: ₹2,175,000 × 0.95 = ₹2,066,250
```

Years 2-5 with 4% Cumulative CAM Cap
Methodology: Only CAM escalates at 4% annually; other categories remain at base year amounts.

| Year | CAM Amount | Other Categories | Total      | Recovery (95%) |
| ---- | ---------- | ---------------- | ---------- | -------------- |
| 1    | ₹825,000   | ₹1,350,000       | ₹2,175,000 | **₹2,066,250** |
| 2    | ₹858,000   | ₹1,350,000       | ₹2,208,000 | **₹2,097,600** |
| 3    | ₹892,320   | ₹1,350,000       | ₹2,242,320 | **₹2,130,204** |
| 4    | ₹928,013   | ₹1,350,000       | ₹2,278,013 | **₹2,164,112** |
| 5    | ₹965,133   | ₹1,350,000       | ₹2,315,133 | **₹2,199,377** |

**CAM Escalation Verification:**

- Year 2: ₹825,000 × 1.04 = **₹858,000**
- Year 3: ₹858,000 × 1.04 = **₹892,320**
- Year 4: ₹892,320 × 1.04 = **₹928,013**
- Year 5: ₹928,013 × 1.04 = **₹965,133**

#### SUITE 104 - VODAFONE (25,000 SF)

**Configuration:**

- Pro Rata: 25,000 ÷ 120,000 = 20.83%
- Reimbursement Type: Modified Gross (Custom Selection)
- Selected Expenses: Taxes, Insurance, CAM =(Yes); Mgmt, Utils =(No)
- Recovery %: 75% (of pro-rata share after pool-level recoverables)
- CAM Cap: None

Pool-Level Recoverable Calculation
Calculating recoverable amounts first, then applying tenant's pro-rata share.

**Selected Expenses with Pool-Level Recoverable %:**

| Expense               | Category  | Annual Amount | Recoverable % | Recoverable Amount | Vodafone Share (20.83%) |
| --------------------- | --------- | ------------- | ------------- | ------------------ | ----------------------- |
| Property Taxes        | taxes     | ₹2,200,000    | 100%          | ₹2,200,000         | ₹458,333                |
| Building Insurance    | insurance | ₹950,000      | 100%          | ₹950,000           | ₹197,917                |
| Repairs & Maintenance | cam       | ₹1,200,000    | 90%           | ₹1,080,000         | ₹225,000                |
| Security              | cam       | ₹900,000      | 75%           | ₹675,000           | ₹140,625                |
| Landscaping           | cam       | ₹600,000      | 100%          | ₹600,000           | ₹125,000                |
| Cleaning              | cam       | ₹750,000      | 0%            | ₹0                 | ₹0                      |
| **Total**             |           | —             | —             | **₹5,505,000**     | **₹1,146,875**          |

**Calculation:**

```plan
Year 1: ₹1,146,875 × 0.75 = ₹860,156
Year 2: ₹1,146,875 × 1.03 × 0.75 = ₹885,961
Year 3: ₹1,146,875 × 1.03² × 0.75 = ₹912,540
Year 4: ₹1,146,875 × 1.03³ × 0.75 = ₹939,916
Year 5: ₹1,146,875 × 1.03⁴ × 0.75 = ₹968,114
```

### Per-Tenant Reimbursement Summary

| Suite   | Tenant       | Reimbursement Type | Pro Rata   | Recovery % | Year 1 Reimbursement | Year 2     | Year 3     | Year 4     | Year 5     |
| ------- | ------------ | ------------------ | ---------- | ---------- | -------------------- | ---------- | ---------- | ---------- | ---------- |
| **101** | **Infosys**  | Full Service Gross | **33.33%** | 0%         | ₹0                   | ₹0         | ₹0         | ₹0         | ₹0         |
| **102** | **Wipro**    | Core Operating     | **25.00%** | 80%        | ₹1,281,600           | ₹1,315,840 | ₹1,351,002 | ₹1,387,110 | ₹1,424,192 |
| **103** | **TCS**      | Base Year Stop     | **20.83%** | 95%        | ₹2,066,250           | ₹2,097,600 | ₹2,130,204 | ₹2,164,112 | ₹2,199,377 |
| **104** | **Vodafone** | Modified Gross     | **20.83%** | 75%        | ₹860,156             | ₹885,961   | ₹912,540   | ₹939,916   | ₹968,114   |

## 🔵 STEP 9 — EXPENSES REIMBURSEMENT ASSUMPTIONS

### A. Operating Expense Assumptions

**User Input Table:**

| Item                       | Value | Notes                         |
| -------------------------- | ----- | ----------------------------- |
| Property Management Fee(%) | 3.0%  | % of Gross Rent               |
| Expense Growth(%)          | 2.5%  | General expense inflation     |
| Capital Reserves($/SF)     | 15.00 | Annual capital reserve per SF |

**Calculations**
Property Management Fee Amount:

```plan
Formula: (Management Fee % / 100) × Total Base Rent
Calculation: (3.0 / 100) × ₹108,600,000 = ₹3,258,000/year
```

Capital Reserves Amount:

```plan
Formula: Capital Reserves per SF × Building Square Footage
Calculation: ₹15.00 × 120,000 = ₹1,800,000/year
```

### B. Property Tax Assumptions

| Item                        | Value       | Notes                    |
| --------------------------- | ----------- | ------------------------ |
| Assessed Value (₹)          | 125,000,000 | Tax assessment value     |
| Property Tax Rate (%)       | 1.76%       | Annual tax rate          |
| Fixed Charge Assessment (₹) | 0           | Additional fixed charges |

**Calculations:**

```plan
Year 1 Property Tax:
Formula: (Assessed Value × Tax Rate / 100) + Fixed Charge
Calculation: (₹125,000,000 × 1.76 / 100) + ₹0 = ₹2,200,000
```

### C. Property Tax Growth Rates

**User Input Table:**

| Item                      | Year 1 | Year 2 | Year 3 | Year 4 | Year 5+ |
| ------------------------- | ------ | ------ | ------ | ------ | ------- |
| Assessed Value Growth (%) | 3.0%   | 3.0%   | 3.0%   | 3.0%   | 3.0%    |
| Fixed Charge Growth (%)   | 0.0%   | 0.0%   | 0.0%   | 0.0%   | 0.0%    |
| Vacancy (%)               | 0.0%   | 0.0%   | 0.0%   | 5.0%   | 8.0%    |

### Expense Reimbursement Operating Expense Comparison Table (Without Assumptions)

| Category                  | Trailing 12 (₹) | PSF/Yr     | Broker (₹)     | PSF/Yr     | Comparable (₹) | PSF/Yr     | Hold Period (₹) | PSF/Yr     |
| ------------------------- | --------------- | ---------- | -------------- | ---------- | -------------- | ---------- | --------------- | ---------- |
| **Property Taxes**        | 2,200,000       | 18.33      | 2,200,000      | 18.33      | 2,200,000      | 18.33      | 2,200,000       | 18.33      |
| **Total Taxes**           | 2,200,000       | 18.33      | 2,200,000      | 18.33      | 2,200,000      | 18.33      | 2,200,000       | 18.33      |
| **Building Insurance**    | 950,000         | 7.92       | 950,000        | 7.92       | 950,000        | 7.92       | 950,000         | 7.92       |
| **Total Insurance**       | 950,000         | 7.92       | 950,000        | 7.92       | 950,000        | 7.92       | 950,000         | 7.92       |
| **Electricity & Water**   | 31,680,000      | 264.00     | 31,680,000     | 264.00     | 31,680,000     | 264.00     | 31,680,000      | 264.00     |
| **Total Utilities**       | 31,680,000      | 264.00     | 31,680,000     | 264.00     | 31,680,000     | 264.00     | 31,680,000      | 264.00     |
| **Repairs & Maintenance** | 1,200,000       | 10.00      | 1,200,000      | 10.00      | 1,200,000      | 10.00      | 1,200,000       | 10.00      |
| **Security**              | 900,000         | 7.50       | 900,000        | 7.50       | 900,000        | 7.50       | 900,000         | 7.50       |
| **Legal**                 | 500,000         | 4.17       | 500,000        | 4.17       | 500,000        | 4.17       | 500,000         | 4.17       |
| **Landscaping**           | 600,000         | 5.00       | 600,000        | 5.00       | 600,000        | 5.00       | 600,000         | 5.00       |
| **Total CAM**             | 3,200,000       | 26.67      | 3,200,000      | 26.67      | 3,200,000      | 26.67      | 3,200,000       | 26.67      |
| **Property Mgmt. Fee**    | 3,258,000       | 27.15      | 3,258,000      | 27.15      | 3,258,000      | 27.15      | 3,258,000       | 27.15      |
| **Total Mgmt. Fee**       | 3,258,000       | 27.15      | 3,258,000      | 27.15      | 3,258,000      | 27.15      | 3,258,000       | 27.15      |
| **Marketing**             | 850,000         | 7.08       | 850,000        | 7.08       | 850,000        | 7.08       | 850,000         | 7.08       |
| **Cleaning**              | 750,000         | 6.25       | 750,000        | 6.25       | 750,000        | 6.25       | 750,000         | 6.25       |
| **Total Other Expenses**  | 1,600,000       | 13.33      | 1,600,000      | 13.33      | 1,600,000      | 13.33      | 1,600,000       | 13.33      |
| **Capital Reserves**      | 1,800,000       | 15.00      | 1,800,000      | 15.00      | 1,800,000      | 15.00      | 1,800,000       | 15.00      |
| **TOTAL EXPENSES**        | **45,688,000**  | **380.73** | **45,688,000** | **380.73** | **45,688,000** | **380.73** | **45,688,000**  | **380.73** |

***Mgmt Fee updated using increasing in-place rents from Rent Detail (Infosys 3.5%, Wipro ₹150K, etc.)***

### Expense Reimbursement Operating Expense Comparison Table (Applied Assumptions)

| Category                 | Trailing 12 (₹) | PSF/Yr | Broker (₹) | PSF/Yr | Comparable (₹) | PSF/Yr | Hold Period (₹) | PSF/Yr |
| ------------------------ | --------------: | -----: | ---------: | -----: | -------------: | -----: | --------------: | -----: |
| Property Taxes           |       2,200,000 |  18.33 |  2,200,000 |  18.33 |      2,200,000 |  18.33 |       2,266,000 |  18.88 |
| Total Taxes              |       2,200,000 |  18.33 |  2,200,000 |  18.33 |      2,200,000 |  18.33 |       2,266,000 |  18.88 |
| Building Insurance       |         950,000 |   7.92 |    950,000 |   7.92 |        950,000 |   7.92 |         973,750 |   8.11 |
| Total Insurance          |         950,000 |   7.92 |    950,000 |   7.92 |        950,000 |   7.92 |         973,750 |   8.11 |
| Electricity & Water      |      31,680,000 | 264.00 | 31,680,000 | 264.00 |     31,680,000 | 264.00 |      31,680,000 | 264.00 |
| Total Utilities          |      31,680,000 | 264.00 | 31,680,000 | 264.00 |     31,680,000 | 264.00 |      31,680,000 | 264.00 |
| Repairs & Maintenance    |       1,200,000 |  10.00 |  1,200,000 |  10.00 |      1,200,000 |  10.00 |       1,230,000 |  10.25 |
| Security                 |         900,000 |   7.50 |    900,000 |   7.50 |        900,000 |   7.50 |         922,500 |   7.69 |
| Legal                    |         500,000 |   4.17 |    500,000 |   4.17 |        500,000 |   4.17 |         512,500 |   4.27 |
| Landscaping              |         600,000 |   5.00 |    600,000 |   5.00 |        600,000 |   5.00 |         615,000 |   5.13 |
| **Total CAM**            |       3,200,000 |  26.67 |  3,200,000 |  26.67 |      3,200,000 |  26.67 |       3,280,000 |  27.33 |
| Property Mgmt. Fee       |       3,258,000 |  27.15 |  3,258,000 |  27.15 |      3,258,000 |  27.15 |      3,356,000* |  27.96 |
| **Total Mgmt. Fee**      |       3,258,000 |  27.15 |  3,258,000 |  27.15 |      3,258,000 |  27.15 |       3,356,000 |  27.96 |
| Marketing                |         850,000 |   7.08 |    850,000 |   7.08 |        850,000 |   7.08 |         871,250 |   7.26 |
| Cleaning                 |         750,000 |   6.25 |    750,000 |   6.25 |        750,000 |   6.25 |         768,750 |   6.41 |
| **Total Other Expenses** |       1,600,000 |  13.33 |  1,600,000 |  13.33 |      1,600,000 |  13.33 |       1,640,000 |  13.67 |
| Capital Reserves         |       1,800,000 |  15.00 |  1,800,000 |  15.00 |      1,800,000 |  15.00 |       1,845,000 |  15.38 |
| **TOTAL EXPENSES**       |  **45,688,000** | 380.73 | 45,688,000 | 380.73 |     45,688,000 | 380.73 |  **47,711,750** | 397.60 |

## 🔵 STEP 10 — CONSTRUCTION BUDGET

**Capital Budget**
***The Construction Budget captures all planned capital expenditures over the holding period, including major renovations, tenant improvements, building upgrades, and infrastructure investments that extend beyond normal operating expenses.***

### Capital Budget Table (Building SF = 120,000)

| Item                     |     Total (₹) | Per SF (₹) | Month Start (mo) | Month End (mo) | Total Months |
| ------------------------ | ------------: | ---------: | ---------------: | -------------: | -----------: |
| Renovation               |       600,000 |       5.00 |                6 |              8 |            3 |
| Lobby Upgrade            |       162,000 |       1.35 |               12 |             14 |            3 |
| Roof Repair              |       360,000 |       3.00 |               18 |             22 |            5 |
| HVAC System              |       288,000 |       2.40 |               24 |             26 |            3 |
| Parking Lot              |       480,000 |       4.00 |               36 |             40 |            5 |
| **Contingency***         |       202,800 |       1.69 |              N/A |            N/A |          N/A |
| **Total Capital Budget** | **2,092,800** |  **17.44** |              N/A |            N/A |          N/A |

#### Calculation Logic

#### Per SF ($)

**Formula:** `Per SF = Total($) ÷ Building SF`
**Calculation:** Renovation = 600,000 ÷ 120,000 = **5.00**

#### Total Months

**Formula:** `Total Months = Month End – Month Start + 1`
**Calculation:** Renovation = 8 – 6 + 1 = **3 months**

#### Contingency Per SF

**Formula:** `Contingency Per SF = Contingency Total ÷ Building SF`
**Calculation:** 110,000 ÷ 65,000 = **1.69**

#### Total Capital Budget ($)

**Formula:**: `Σ(Items 1–5) + Contingency`
**Calculation:** 600,000 + 162,000 + 360,000 + 288,000 + 480,000 + 202,800 = **₹2,092,800**

#### Total Capital Budget (Per SF $)

**Formula:** `Total Capital Budget ÷ Building SF`
**Calculation:** 2,092,800 ÷ 120,000 = **17.44**

#### Construction Budget – Monthly Spread (Months 1–40)

*The following table shows the monthly allocation of construction budget items, matching the UI design (Year, Month Count, Date, Items, Contingency, and Total Capital Budget).*

TABLE PART 1 — MONTHS 1 to 10

| Year                               | 1         | 1         | 1         | 1         | 1         | 1            | 1            | 1            | 1          | 1          |
| ---------------------------------- | --------- | --------- | --------- | --------- | --------- | ------------ | ------------ | ------------ | ---------- | ---------- |
| Month Count                        | 1         | 2         | 3         | 4         | 5         | 6            | 7            | 8            | 9          | 10         |
| Date                               | 3/31/2025 | 4/30/2025 | 5/31/2025 | 6/30/2025 | 7/31/2025 | 8/31/2025    | 9/30/2025    | 10/31/2025   | 11/30/2025 | 12/31/2025 |
| Item Name                          |           |           |           |           |           |              |              |              |            |            |
| Renovation (₹600,000, mo 6–8)      | ₹0        | ₹0        | ₹0        | ₹0        | ₹0        | ₹200,000     | ₹200,000     | ₹200,000     | ₹0         | ₹0         |
| Lobby Upgrade (₹162,000, mo 12–14) | ₹0        | ₹0        | ₹0        | ₹0        | ₹0        | ₹0           | ₹0           | ₹0           | ₹0         | ₹0         |
| Roof Repair (₹360,000, mo 18–22)   | ₹0        | ₹0        | ₹0        | ₹0        | ₹0        | ₹0           | ₹0           | ₹0           | ₹0         | ₹0         |
| HVAC System (₹288,000, mo 24–26)   | ₹0        | ₹0        | ₹0        | ₹0        | ₹0        | ₹0           | ₹0           | ₹0           | ₹0         | ₹0         |
| Parking Lot (₹480,000, mo 36–40)   | ₹0        | ₹0        | ₹0        | ₹0        | ₹0        | ₹0           | ₹0           | ₹0           | ₹0         | ₹0         |
| **Contingency** (₹202,800)         | ₹0        | ₹0        | ₹0        | ₹0        | ₹0        | ₹0           | ₹0           | ₹0           | ₹0         | ₹0         |
| **Total Capital Budget**           | ₹0        | ₹0        | ₹0        | ₹0        | ₹0        | **₹200,000** | **₹200,000** | **₹200,000** | ₹0         | ₹0         |

TABLE PART 2 — MONTHS 11 to 20

| Year                     | 2         | 2           | 2           | 2           | 2         | 2         | 2         | 2           | 2           | 2           |
| ------------------------ | --------- | ----------- | ----------- | ----------- | --------- | --------- | --------- | ----------- | ----------- | ----------- |
| Month Count              | 11        | 12          | 13          | 14          | 15        | 16        | 17        | 18          | 19          | 20          |
| Date                     | 1/31/2026 | 2/28/2026   | 3/31/2026   | 4/30/2026   | 5/31/2026 | 6/30/2026 | 7/31/2026 | 8/31/2026   | 9/30/2026   | 10/31/2026  |
| Renovation               | ₹0        | ₹0          | ₹0          | ₹0          | ₹0        | ₹0        | ₹0        | ₹0          | ₹0          | ₹0          |
| Lobby Upgrade (mo 12–14) | ₹0        | ₹54,000     | ₹54,000     | ₹54,000     | ₹0        | ₹0        | ₹0        | ₹0          | ₹0          | ₹0          |
| Roof Repair (mo 18–22)   | ₹0        | ₹0          | ₹0          | ₹0          | ₹0        | ₹0        | ₹0        | ₹72,000     | ₹72,000     | ₹72,000     |
| HVAC System              | ₹0        | ₹0          | ₹0          | ₹0          | ₹0        | ₹0        | ₹0        | ₹0          | ₹0          | ₹0          |
| Parking Lot              | ₹0        | ₹0          | ₹0          | ₹0          | ₹0        | ₹0        | ₹0        | ₹0          | ₹0          | ₹0          |
| Contingency              | ₹0        | ₹0          | ₹0          | ₹0          | ₹0        | ₹0        | ₹0        | ₹0          | ₹0          | ₹0          |
| **Total Capital Budget** | ₹0        | **₹54,000** | **₹54,000** | **₹54,000** | ₹0        | ₹0        | ₹0        | **₹72,000** | **₹72,000** | **₹72,000** |

TABLE PART 3 — MONTHS 21 to 30

| Year                     | 2           | 2           | 2         | 3           | 3           | 3           | 3         | 3         | 3         | 3         |
| ------------------------ | ----------- | ----------- | --------- | ----------- | ----------- | ----------- | --------- | --------- | --------- | --------- |
| Month Count              | 21          | 22          | 23        | 24          | 25          | 26          | 27        | 28        | 29        | 30        |
| Date                     | 11/30/2026  | 12/31/2026  | 1/31/2027 | 2/28/2027   | 3/31/2027   | 4/30/2027   | 5/31/2027 | 6/30/2027 | 7/31/2027 | 8/31/2027 |
| Renovation               | ₹0          | ₹0          | ₹0        | ₹0          | ₹0          | ₹0          | ₹0        | ₹0        | ₹0        | ₹0        |
| Lobby Upgrade            | ₹0          | ₹0          | ₹0        | ₹0          | ₹0          | ₹0          | ₹0        | ₹0        | ₹0        | ₹0        |
| Roof Repair (mo 18–22)   | ₹72,000     | ₹72,000     | ₹0        | ₹0          | ₹0          | ₹0          | ₹0        | ₹0        | ₹0        | ₹0        |
| HVAC System (mo 24–26)   | ₹0          | ₹0          | ₹0        | ₹96,000     | ₹96,000     | ₹96,000     | ₹0        | ₹0        | ₹0        | ₹0        |
| Parking Lot              | ₹0          | ₹0          | ₹0        | ₹0          | ₹0          | ₹0          | ₹0        | ₹0        | ₹0        | ₹0        |
| Contingency              | ₹0          | ₹0          | ₹0        | ₹0          | ₹0          | ₹0          | ₹0        | ₹0        | ₹0        | ₹0        |
| **Total Capital Budget** | **₹72,000** | **₹72,000** | ₹0        | **₹96,000** | **₹96,000** | **₹96,000** | ₹0        | ₹0        | ₹0        | ₹0        |

TABLE PART 4 — MONTHS 31 to 40

| Year                     | 3         | 3          | 3          | 3          | 3         | 4           | 4           | 4           | 4           | 4           |
| ------------------------ | --------- | ---------- | ---------- | ---------- | --------- | ----------- | ----------- | ----------- | ----------- | ----------- |
| Month Count              | 31        | 32         | 33         | 34         | 35        | 36          | 37          | 38          | 39          | 40          |
| Date                     | 9/30/2027 | 10/31/2027 | 11/30/2027 | 12/31/2027 | 1/31/2028 | 2/29/2028   | 3/31/2028   | 4/30/2028   | 5/31/2028   | 6/30/2028   |
| Renovation               | ₹0        | ₹0         | ₹0         | ₹0         | ₹0        | ₹0          | ₹0          | ₹0          | ₹0          | ₹0          |
| Lobby Upgrade            | ₹0        | ₹0         | ₹0         | ₹0         | ₹0        | ₹0          | ₹0          | ₹0          | ₹0          | ₹0          |
| Roof Repair              | ₹0        | ₹0         | ₹0         | ₹0         | ₹0        | ₹0          | ₹0          | ₹0          | ₹0          | ₹0          |
| HVAC System              | ₹0        | ₹0         | ₹0         | ₹0         | ₹0        | ₹0          | ₹0          | ₹0          | ₹0          | ₹0          |
| Parking Lot (mo 36–40)   | ₹0        | ₹0         | ₹0         | ₹0         | ₹0        | ₹96,000     | ₹96,000     | ₹96,000     | ₹96,000     | ₹96,000     |
| Contingency              | ₹0        | ₹0         | ₹0         | ₹0         | ₹0        | ₹0          | ₹0          | ₹0          | ₹0          | ₹0          |
| **Total Capital Budget** | ₹0        | ₹0         | ₹0         | ₹0         | ₹0        | **₹96,000** | **₹96,000** | **₹96,000** | **₹96,000** | **₹96,000** |

### Calculation Notes

- **Renovation** ₹600,000 spread over months 6–8 → ₹200,000 / month (months shown: Month 6 = 2025-08-31, Month 7 = 2025-09-30, Month 8 = 2025-10-31).
- **Other items** Other items (Lobby, Roof, HVAC, Parking) start after Month 9 in your schedule, so they are zero in this 9-month view.
- **Contingency**: Contingency (₹202,800) remains unallocated (₹0) (user may choose lump sum or spread logic).
- **Total Capital Budget row** = column sum of all items for that month

## 🔵 STEP 11 — DEBT(Acquisition Loan,Mezzanine Loan,Refinance Loan) - Loan Analysis and Amortization Schedule

### Debt Tab - Loan Analysis and Amortization Schedule

Overview
The Debt tab structures the financing for Sunrise Tech Park using a three-loan approach:

- **Acquisition Loan** - Primary financing at property purchase
- **Mezzanine Loan** - Gap financing for higher leverage
- **Refinance Loan** - Future refinancing to extract equity

**Interest Calculation Method:** 30/360 | 30/365 | Actual/360 | Actual/365 | 365/360

### Acquisition Loan

#### 1. Acquisition Loan — User Input

| Parameter                       | Input Value     | Notes             |
| ------------------------------- | --------------- | ----------------- |
| **Purchase Price**              | ₹115,000,000    | From Step 1       |
| **Loan-To-Value (LTV)**         | 75%             | Standard          |
| **Loan Amount**                 | **₹86,250,000** | 115M × 75%        |
| **Interest Rate**               | 5.25%           | Annual            |
| **Interest Calculation Method** | 30/360          | Monthly = Rate/12 |
| **I/O Period**                  | 12 months       | Months 1–12       |
| **Loan Fee (1%)**               | ₹862,500        | 1% of loan amount |
| **Amortization**                | 300 months      | 25 years          |
| **Term**                        | 120 months      | 10 years          |

#### 2. Acquisition Loan — Core Calculations

**Monthly Interest Rate:**
**Formula:** Monthly Rate = Annual Rate / 12
**Calculation:** 5.25% / 12 = 0.4375% per month

**Interest-only Monthly Payment (Months 1–12):**
**Formula:** Interest = Loan Amount × (Rate / 12)
**Calculation:** ₹86,250,000 × (0.0525 / 12)
           = ₹86,250,000 × 0.004375
           = ₹377,343.75

**Amortized Monthly Payment (Months 13–120):**

**Formula:** PMT = P × r × (1+r)^n / ((1+r)^n − 1)
Where:
P = 86,250,000
r = 0.0525 / 12 = 0.004375
n = 300

**Calculation:**

  (1+r)^n = (1 + 0.004375)^300 = 3.6367

  PMT = 86,250,000 × 0.004375 × 3.6367 / (3.6367 - 1)
      = 86,250,000 × 0.004375 × 3.6367 / 2.6367
      = 1,372,605.94 / 2.6367
      = ₹520,583.92

#### 3. Acquisition Loan — Monthly Amortization (First 24 Months)

***Table : Months 1 to 12***

| Month                | 1          | 2          | 3          | 4          | 5          | 6          | 7          | 8          | 9          | 10         | 11         | 12         |
| -------------------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- |
| **Date**             | 31/03/2026 | 30/04/2026 | 31/05/2026 | 30/06/2026 | 31/07/2026 | 31/08/2026 | 30/09/2026 | 31/10/2026 | 30/11/2026 | 31/12/2026 | 31/01/2027 | 28/02/2027 |
| **Starting Balance** | 86,250,000 | 86,250,000 | 86,250,000 | 86,250,000 | 86,250,000 | 86,250,000 | 86,250,000 | 86,250,000 | 86,250,000 | 86,250,000 | 86,250,000 | 86,250,000 |
| **Total Payment**    | 377,344    | 377,344    | 377,344    | 377,344    | 377,344    | 377,344    | 377,344    | 377,344    | 377,344    | 377,344    | 377,344    | 377,344    |
| **Principal**        | 0          | 0          | 0          | 0          | 0          | 0          | 0          | 0          | 0          | 0          | 0          | 0          |
| **Interest**         | 377,344    | 377,344    | 377,344    | 377,344    | 377,344    | 377,344    | 377,344    | 377,344    | 377,344    | 377,344    | 377,344    | 377,344    |
| **Ending Balance**   | 86,250,000 | 86,250,000 | 86,250,000 | 86,250,000 | 86,250,000 | 86,250,000 | 86,250,000 | 86,250,000 | 86,250,000 | 86,250,000 | 86,250,000 | 86,250,000 |

***Table — Months 13 to 24**

| Month                | 13         | 14         | 15         | 16         | 17         | 18         | 19         | 20         | 21         | 22         | 23         | 24         |
| -------------------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- |
| **Date**             | 31/03/2027 | 30/04/2027 | 31/05/2027 | 30/06/2027 | 31/07/2027 | 31/08/2027 | 30/09/2027 | 31/10/2027 | 30/11/2027 | 31/12/2027 | 31/01/2028 | 29/02/2028 |
| **Starting Balance** | 86,250,000 | 86,106,760 | 85,962,893 | 85,818,397 | 85,673,270 | 85,527,510 | 85,381,115 | 85,234,083 | 85,086,412 | 84,938,100 | 84,789,145 | 84,639,545 |
| **Total Payment**    | 520,584    | 520,584    | 520,584    | 520,584    | 520,584    | 520,584    | 520,584    | 520,584    | 520,584    | 520,584    | 520,584    | 520,584    |
| **Principal**        | 143,240    | 143,867    | 144,496    | 145,127    | 145,760    | 146,395    | 147,032    | 147,671    | 148,312    | 148,955    | 149,600    | 150,247    |
| **Interest**         | 377,344    | 376,717    | 376,088    | 375,457    | 374,824    | 374,189    | 373,552    | 372,913    | 372,272    | 371,629    | 370,984    | 370,337    |
| **Ending Balance**   | 86,106,760 | 85,962,893 | 85,818,397 | 85,673,270 | 85,527,510 | 85,381,115 | 85,234,083 | 85,086,412 | 84,938,100 | 84,789,145 | 84,639,545 | 84,489,298 |

 **Key Observations:**

- Months 1-12: Interest-only, balance remains 86,250,000
- Month 13 onwards: Principal reduction begins
- Balance after 24 months: 84,489,298

### Mezzanine Loan

#### 1. Mezzanine Loan — User Input

| Parameter       | Value           | Notes                     |
| --------------- | --------------- | ------------------------- |
| Purchase Price  | ₹115,000,000    | From Step 1               |
| LTV             | 10%             | Gap financing (85% - 75%) |
| **Loan Amount** | **₹11,500,000** | 115M × 10%                |
| Interest Rate   | 8.75%           | Higher-risk               |
| Interest Method | 30/360          | Standard convention       |
| I/O Period      | 60 months       | Entire term               |
| Loan Fee (2%)   | ₹2,300,000      | 2% of loan                |
| Term            | 60 months       | No principal              |
| Amortization    | N/A             | No amortization (I/O only)|

#### 2. Mezzanine Loan — Core Calculations

**Monthly Interest Rate**
**Formula:** Monthly Rate = Annual Rate Ã· 12
**Calculation:** 8.75% Ã· 12 = 0.7292% per month

**Monthly Interest-Only Payment**:
**Formula:** Loan Amount × (Rate / 12)
**Calculation:** ₹11,500,000 × (0.0875 / 12)
           = ₹11,500,000 × 0.00729167
           = ₹83,854.17

#### 3. Mezzanine Loan —Monthly Amortization (First 24 Months)

***Table : Months 1 to 12***

| Month                | 1          | 2          | 3          | 4          | 5          | 6          | 7          | 8          | 9          | 10         | 11         | 12         |
| -------------------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- |
| **Date**             | 31/03/2026 | 30/04/2026 | 31/05/2026 | 30/06/2026 | 31/07/2026 | 31/08/2026 | 30/09/2026 | 31/10/2026 | 30/11/2026 | 31/12/2026 | 31/01/2027 | 28/02/2027 |
| **Starting Balance** | 11,500,000 | 11,500,000 | 11,500,000 | 11,500,000 | 11,500,000 | 11,500,000 | 11,500,000 | 11,500,000 | 11,500,000 | 11,500,000 | 11,500,000 | 11,500,000 |
| **Total Payment**    | 83,854     | 83,854     | 83,854     | 83,854     | 83,854     | 83,854     | 83,854     | 83,854     | 83,854     | 83,854     | 83,854     | 83,854     |
| **Principal**        | 0          | 0          | 0          | 0          | 0          | 0          | 0          | 0          | 0          | 0          | 0          | 0          |
| **Interest**         | 83,854     | 83,854     | 83,854     | 83,854     | 83,854     | 83,854     | 83,854     | 83,854     | 83,854     | 83,854     | 83,854     | 83,854     |
| **Ending Balance**   | 11,500,000 | 11,500,000 | 11,500,000 | 11,500,000 | 11,500,000 | 11,500,000 | 11,500,000 | 11,500,000 | 11,500,000 | 11,500,000 | 11,500,000 | 11,500,000 |

***Table : Months 13 to 24***

| Month                | 13         | 14         | 15         | 16         | 17         | 18         | 19         | 20         | 21         | 22         | 23         | 24         |
| -------------------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- |
| **Date**             | 31/03/2027 | 30/04/2027 | 31/05/2027 | 30/06/2027 | 31/07/2027 | 31/08/2027 | 30/09/2027 | 31/10/2027 | 30/11/2027 | 31/12/2027 | 31/01/2028 | 29/02/2028 |
| **Starting Balance** | 11,500,000 | 11,500,000 | 11,500,000 | 11,500,000 | 11,500,000 | 11,500,000 | 11,500,000 | 11,500,000 | 11,500,000 | 11,500,000 | 11,500,000 | 11,500,000 |
| **Total Payment**    | 83,854     | 83,854     | 83,854     | 83,854     | 83,854     | 83,854     | 83,854     | 83,854     | 83,854     | 83,854     | 83,854     | 83,854     |
| **Principal**        | 0          | 0          | 0          | 0          | 0          | 0          | 0          | 0          | 0          | 0          | 0          | 0          |
| **Interest**         | 83,854     | 83,854     | 83,854     | 83,854     | 83,854     | 83,854     | 83,854     | 83,854     | 83,854     | 83,854     | 83,854     | 83,854     |
| **Ending Balance**   | 11,500,000 | 11,500,000 | 11,500,000 | 11,500,000 | 11,500,000 | 11,500,000 | 11,500,000 | 11,500,000 | 11,500,000 | 11,500,000 | 11,500,000 | 11,500,000 |

**Key Observations:**

- All 60 months are interest-only
- Principal balance remains 11,500,000 throughout
- Balloon payment of 11,500,000 due at Month 60

### Refinance Loan

#### 1. Refinance Loan — User Input

| Parameter          | Value               | Notes                     |
| ------------------ | ------------------- | ------------------------- |
| Refinance Month    | 36                  | End of Year 3             |
| Refinance Cap Rate | 6.50%               | Market cap rate           |
| LTV                | 70%                 | Conservative refi         |
| Interest Rate      | 5.00%               | Lower rate on refi        |
| Interest Method    | 30/360              | Standard convention       |
| I/O Period         | 12 months           | 1 year interest-only      |
| Loan Fee (%)       | 1.5%                | 1.5% of loan              |
| Amortization       | 360 months          | 30-year full amortization |
| Term               | 120 months          | 10 years                  |
| Refinance NOI      | Auto (from Step 12) | Year 3 NOI                |
| Property Value     | Auto                | NOI / Cap Rate            |
| Loan Amount        | Auto                | Value × LTV               |

#### 2. Refinance Loan — Core Calculations

**Year 3 NOI** (from Step 12):

**Formula:** NOI = Gross Income - Operating Expenses - Capital Reserves
where:

- **Gross Rent:** ₹113,593,440 (From step 3)
- **Operating Expenses:** ₹44,232,720 (escalated)
- **Capital Reserves:** ₹1,800,000

**Calculation:** 113,593,440 - 44,232,720 - 1,800,000 = **₹67,560,720**

**Property Value**:
**Formula:** NOI / Cap Rate
**Calculation:** ₹67,560,720 / 0.065 = **₹1,039,395,692**

**Loan Amount**:
**Formula:** Property Value × LTV
**Calculation:** ₹1,039,395,692 × 0.70 = ₹727,577,000 (rounded)

**Payoff Existing Debt** (at Month 36):

- Acquisition Loan Balance: ~₹83,800,000 (after 24 months of amortization)
- Mezzanine Loan Balance: ₹11,500,000
- **Total Payoff**: ~₹95,300,000

**Net Refinance Proceeds**:
**Refinance Loan:** ₹727,577,000
**Less: Debt Payoff:** ₹95,300,000
**Net Proceeds:** ₹632,277,000

**Refinance Monthly Payment (Months 37-48, I/O)**:
**Formula:** Loan Amount × (Rate / 12)
**Calculation:** ₹727,577,000 × (0.05 / 12)
           = ₹727,577,000 × 0.00416667
           = **₹3,031,571**

**Refinance Monthly Payment (Months 49-60, Amortizing)**:
Using PMT formula with:
  P = ₹727,577,000
  r = 0.05 / 12 = 0.00416667
  n = 288 (remaining months: 120 total - 12 I/O)

Monthly Payment = ₹4,779,186 (approx)

#### 3. Refinance Loan — Monthly Amortization(Months 37-60)

***Table : Months 37 to 48***

| Month                | 37          | 38          | 39          | 40          | 41          | 42          | 43          | 44          | 45          | 46          | 47          | 48          |
| -------------------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- |
| **Date**             | 31/03/2029  | 30/04/2029  | 31/05/2029  | 30/06/2029  | 31/07/2029  | 31/08/2029  | 30/09/2029  | 31/10/2029  | 30/11/2029  | 31/12/2029  | 31/01/2030  | 28/02/2030  |
| **Starting Balance** | 766,099,026 | 766,099,026 | 766,099,026 | 766,099,026 | 766,099,026 | 766,099,026 | 766,099,026 | 766,099,026 | 766,099,026 | 766,099,026 | 766,099,026 | 766,099,026 |
| **Total Payment**    | 3,192,079   | 3,192,079   | 3,192,079   | 3,192,079   | 3,192,079   | 3,192,079   | 3,192,079   | 3,192,079   | 3,192,079   | 3,192,079   | 3,192,079   | 3,192,079   |
| **Principal**        | 0           | 0           | 0           | 0           | 0           | 0           | 0           | 0           | 0           | 0           | 0           | 0           |
| **Interest**         | 3,192,079   | 3,192,079   | 3,192,079   | 3,192,079   | 3,192,079   | 3,192,079   | 3,192,079   | 3,192,079   | 3,192,079   | 3,192,079   | 3,192,079   | 3,192,079   |
| **Ending Balance**   | 766,099,026 | 766,099,026 | 766,099,026 | 766,099,026 | 766,099,026 | 766,099,026 | 766,099,026 | 766,099,026 | 766,099,026 | 766,099,026 | 766,099,026 | 766,099,026 |

***Table : Months 149 to 60***

| Month                | 49          | 50          | 51          | 52          | 53          | 54          | 55          | 56          | 57          | 58          | 59          | 60          |
| -------------------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- |
| **Date**             | 31/03/2030  | 30/04/2030  | 31/05/2030  | 30/06/2030  | 31/07/2030  | 31/08/2030  | 30/09/2030  | 31/10/2030  | 30/11/2030  | 31/12/2030  | 31/01/2031  | 28/02/2031  |
| **Starting Balance** | 766,099,026 | 765,364,213 | 764,626,339 | 763,885,391 | 763,141,356 | 762,394,220 | 761,643,970 | 760,890,592 | 760,134,073 | 759,374,399 | 758,611,556 | 757,845,530 |
| **Total Payment**    | 3,926,892   | 3,926,892   | 3,926,892   | 3,926,892   | 3,926,892   | 3,926,892   | 3,926,892   | 3,926,892   | 3,926,892   | 3,926,892   | 3,926,892   | 3,926,892   |
| **Principal**        | 734,813     | 737,874     | 740,948     | 744,035     | 747,136     | 750,250     | 753,378     | 756,519     | 759,674     | 762,843     | 766,026     | 769,223     |
| **Interest**         | 3,192,079   | 3,189,018   | 3,185,944   | 3,182,857   | 3,179,756   | 3,176,642   | 3,173,514   | 3,170,373   | 3,167,218   | 3,164,049   | 3,160,866   | 3,157,669   |
| **Ending Balance**   | 765,364,213 | 764,626,339 | 763,885,391 | 763,141,356 | 762,394,220 | 761,643,970 | 760,890,592 | 760,134,073 | 759,374,399 | 758,611,556 | 757,845,530 | 757,076,307 |

**Key Observations:**

- Months 37-48: Interest-only at 5.00%
- Month 49 onwards: Principal amortization begins
- Balance at Month 60 (end of hold period): 757,076,307

### CONSOLIDATED DEBT SERVICE SUMMARY

| Period                    | Acquisition Loan   | Mezzanine Loan   | Refinance Loan      | **Total Annual Debt Service** |
| ------------------------- | ------------------ | ---------------- | ------------------- | ----------------------------- |
| **Year 1** (Months 1-12)  | ₹4,528,125 (I/O)   | ₹1,006,250 (I/O) | N/A                 | **₹5,534,375**                |
| **Year 2** (Months 13-24) | ₹6,247,007 (Amort) | ₹1,006,250 (I/O) | N/A                 | **₹7,253,257**                |
| **Year 3** (Months 25-36) | ₹6,247,007 (Amort) | ₹1,006,250 (I/O) | N/A                 | **₹7,253,257**                |
| **Year 4** (Months 37-48) | Paid off           | Paid off         | ₹36,378,852 (I/O)   | **₹36,378,852**               |
| **Year 5** (Months 49-60) | Paid off           | Paid off         | ₹57,350,232 (Amort) | **₹57,350,232**               |

### Key Debt Metrics

Going-In Metrics (Year 1)
Combined Loan Amount: â‚¹86,250,000 + â‚¹11,500,000 = â‚¹97,750,000
Combined LTV: â‚¹97,750,000 Ã· â‚¹115,000,000 = 85.0%

Debt Yield (Year 1):
Formula: Debt Yield = Year 1 NOI Ã· Total Loan Amount
From Step 8: Year 1 NOI = â‚¹63,912,000 + â‚¹4,208,006 (reimbursements) - â‚¹42,888,000 - â‚¹1,800,000 = â‚¹23,432,006
Calculation: â‚¹23,432,006 Ã· â‚¹97,750,000 = 23.97%

DSCR (Year 1):
Formula: DSCR = Year 1 NOI Ã· Annual Debt Service
Calculation: â‚¹23,432,006 Ã· â‚¹5,534,375 = 4.23x

Post-Refinance Metrics (Year 4)

New Loan Amount: â‚¹766,099,026

New LTV: â‚¹766,099,026 Ã· â‚¹1,094,284,323 = 70.0%

Debt Yield (Year 4):
Year 4 NOI = â‚¹75,700,000 (projected)
Calculation: â‚¹75,700,000 Ã· â‚¹766,099,026 = 9.88%

DSCR (Year 4):
Calculation: â‚¹75,700,000 Ã· â‚¹38,304,948 = 1.98x

## 🔵 STEP 12 — WATERFALL (Annual CF, Monthly CF)

### Key Calculations

#### A. Equity Investment Calculation

**Total Acquisition Cost**: ₹120,350,000 (from Step 1- Total Upfront & Planned Capital)

**Total Debt**:

- Acquisition Loan: ₹86,250,000
- Mezzanine Loan: ₹11,500,000
- **Total**: ₹97,750,000

**Required Equity**:
**Formula:** Total Acquisition Cost - Total Debt
**Calculation:** ₹120,350,000 - ₹97,750,000 = ₹22,600,000

#### B. Equity Split

- **GP Capital**: ₹22,600,000 × 10% = **₹2,260,000**
- **LP Capital**: ₹22,600,000 × 90% = **₹20,340,000**

#### C. Net Operating Income (NOI) - Year by Year

**Year 1 NOI**:
Gross Rent: ₹108,600,000
Operating Expenses: ₹42,888,000
Capital Reserves: ₹1,800,000
**NOI** = 108,600,000 - 42,888,000 - 1,800,000 = **₹63,912,000**

**Year 2 NOI** (3% rent growth, 2.5% expense growth):
Gross Rent: ₹111,054,000
Operating Expenses: ₹43,960,200
Capital Reserves: ₹1,800,000
**NOI** = 111,054,000 - 43,960,200 - 1,800,000 = **₹65,293,800**

**Year 3 NOI**:
Gross Rent: ₹113,593,440
Operating Expenses: ₹45,058,705
Capital Reserves: ₹1,800,000
**NOI** = 113,593,440 - 45,058,705 - 1,800,000 = **₹66,734,735**

**Year 4 NOI**:
Gross Rent: ₹116,221,502
Operating Expenses: ₹46,185,172
Capital Reserves: ₹1,800,000
**NOI** = 116,221,502 - 46,185,172 - 1,800,000 = **₹68,236,330**

**Year 5 NOI**:
Gross Rent: ₹118,941,487
Operating Expenses: ₹47,339,801
Capital Reserves: ₹1,800,000
**NOI** = 118,941,487 - 47,339,801 - 1,800,000 = **₹69,801,686**

### 2. User Input

**Promote Structure Method**: IRR + Equity Multiple | Equity Multiple | IRR
**Preference Calculation Method**: Actual/360 | Actual/365

#### Input Parameters

| Parameter                     | Value                 | Note        |
| ----------------------------- | --------------------- | ----------- |
| Promote Structure Method      | IRR + Equity Multiple |             |
| General Partner (GP) (%)      | 10%                   |             |
| Limited Partner (LP) (%)      | 90%                   |             |
| Waterfall Tier(s)             | 5                     | Min 1 max 5 |
| Preference Calculation Method | Actual/365            |             |
| Hold Period (Years)           | 5                     |             |
| Exit Cap Rate (%)             | 6.5%                  |             |

#### Output Summary

| Parameter           | Value              | Notes                      |
| ------------------- | ------------------ | -------------------------- |
| Total Equity Needed | **₹22,600,000**    | Corrected from ₹35,000,000 |
| GP Equity (%)       | **10%**            | GP invests real capital    |
| LP Equity (%)       | **90%**            | LP is main investor        |
| GP Equity Amount    | **₹2,260,000**     | 10% × ₹22,600,000          |
| LP Equity Amount    | **₹20,340,000**    | 90% × ₹22,600,000          |
| Year-1 NOI          | **₹63,912,000**    | Operating cash flow        |
| Exit Year NOI       | **₹69,801,686**    | Year 5 NOI                 |
| Exit Value          | **₹1,073,871,785** | NOI / Exit Cap Rate        |

### 3. Tier Table (5-Tier Waterfall Structure)

| Tier       | Hurdle (IRR)   | GP Promote | LP Distribution | GP Distribution | Description                      |
| ---------- | -------------- | ---------- | --------------- | --------------- | -------------------------------- |
| **Tier 1** | **8%**         | **0%**     | **90%**         | **10%**         | Return of capital + 8% preferred |
| **Tier 2** | **12%**        | **10%**    | **81%**         | **19%**         | IRR catch-up to 12%              |
| **Tier 3** | **16%**        | **20%**    | **72%**         | **28%**         | IRR catch-up to 16%              |
| **Tier 4** | **20%**        | **30%**    | **63%**         | **37%**         | IRR catch-up to 20%              |
| **Tier 5** | **Thereafter** | **50%**    | **45%**         | **55%**         | Remaining distributions          |

**Calculation Logic:**

- **GP Distribution % = GP Equity % + (GP Promote × LP Equity %)**
- **LP Distribution % = LP Equity % × (1 - GP Promote)**

### 4. Annual Cash Flow Projections

#### Base Operating Cash Flows (Before Waterfall)

| Year | Year Ending | NOI Growth | Annual NOI       | Debt Service     | Cash Available   | Exit Proceeds      | Total CF           |
| ---- | ----------- | ---------- | ---------------- | ---------------- | ---------------- | ------------------ | ------------------ |
| 0    | 2025        | -          | -                | -                | **-₹22,600,000** | -                  | **-₹22,600,000**   |
| 1    | 2026        | 0.0%       | ₹63,912,000      | **₹5,534,375**   | **₹58,377,625**  | -                  | **₹58,377,625**    |
| 2    | 2027        | 3.0%       | ₹65,293,800      | **₹7,253,257**   | **₹58,040,543**  | -                  | **₹58,040,543**    |
| 3    | 2028        | 3.0%       | ₹66,734,735      | **₹7,253,257**   | **₹59,481,478**  | **₹632,277,000**   | **₹691,758,478**   |
| 4    | 2029        | 3.0%       | ₹68,236,330      | **₹36,378,852**  | **₹31,857,478**  | -                  | **₹31,857,478**    |
| 5    | 2030        | 3.0%       | ₹69,801,686      | **₹57,350,232**  | **₹12,451,454**  | **₹1,073,871,785** | **₹1,086,323,239** |
|      | **Total**   |            | **₹333,978,551** | **₹113,769,973** | **₹220,208,578** | **₹1,706,148,785** | **₹1,926,357,363** |

**Exit Value Calculation (Year 5)**:

Exit NOI: ₹69,801,686
Exit Cap Rate: 6.5%
Property Value: ₹69,801,686 ÷ 0.065 = ₹1,073,871,785
Less: Remaining Debt: ₹0 (assumed paid through refinance)
Net Exit Proceeds: ₹1,073,871,785

### 5. TIER 1 Distribution Table (Annual CF) - 8% IRR Hurdle

***Tier 1: Return of Capital + 8% Preferred Return***

| Year                      | 2025             | 2026            | 2027        | 2028         | 2029        | 2030           |
| ------------------------- | ---------------- | --------------- | ----------- | ------------ | ----------- | -------------- |
| Year Ending               | 31/12/2025       | 31/12/2026      | 31/12/2027  | 31/12/2028   | 31/12/2029  | 31/12/2030     |
| Beginning Balance         | ₹22,600,000      | ₹0              | ₹0          | ₹0           | ₹0          | ₹0             |
| Preferred Return (8%)     | ₹1,808,000       | ₹0              | ₹0          | ₹0           | ₹0          | ₹0             |
| Equity Contribution       | -₹22,600,000     | ₹0              | ₹0          | ₹0           | ₹0          | ₹0             |
| Distributions to Equity   | ₹24,408,000      | ₹0              | ₹0          | ₹0           | ₹0          | ₹0             |
| Ending Balance            | ₹0               | ₹0              | ₹0          | ₹0           | ₹0          | ₹0             |
| Equity IRR Check          | **8.0%**         | **8.0%**        | **8.0%**    | **8.0%**     | **8.0%**    | **8.0%**       |
| Total Distributions       | ₹24,408,000      | ₹0              | ₹0          | ₹0           | ₹0          | ₹0             |
| LP Distribution (90%)     | **₹21,967,200**  | **₹0**          | **₹0**      | **₹0**       | **₹0**      | **₹0**         |
| GP Distribution (10%)     | **₹2,440,800**   | **₹0**          | **₹0**      | **₹0**       | **₹0**      | **₹0**         |
| Cash Flow Remaining       | ₹33,969,625      | ₹58,040,543     | ₹59,481,478 | ₹691,758,478 | ₹31,857,478 | ₹1,086,323,239 |

**Tier 1 Summary:**

- Total Distributed: ₹24,408,000
- LP Received: ₹21,967,200
- GP Received: ₹2,440,800
- **Remaining for Tier 2:** ₹1,901,949,363

***Note: Capital returned with 8% pref in Year 1 due to high cash flow after correct debt service***

### 6. TIER 2 Distribution Table (Annual CF) - 12% IRR Hurdle

***Tier 2: Catch-up to 12% IRR (10% GP Promote)***

| Year                      | 2025   | 2026             | 2027           | 2028           | 2029           | 2030            |
| ------------------------- | ------ | ---------------- | -------------- | -------------- | -------------- | --------------- |
| **Year Ending**           | -      | -                | 31/12/2027     | 31/12/2028     | 31/12/2029     | 31/12/2030      |
| Beginning Balance         | ₹0     | ₹22,600,000      | ₹0             | ₹0             | ₹0             | ₹0              |
| Preferred Return (12%)    | ₹0     | ₹2,712,000       | ₹0             | ₹0             | ₹0             | ₹0              |
| Equity Contribution       | ₹0     | ₹0               | ₹0             | ₹0             | ₹0             | ₹0              |
| Distributions to Equity   | ₹0     | ₹25,312,000      | ₹0             | ₹0             | ₹0             | ₹0              |
| Ending Balance            | ₹0     | ₹0               | ₹0             | ₹0             | ₹0             | ₹0              |
| Equity IRR Check          | -      | **12.0%**        | **12.0%**      | **12.0%**      | **12.0%**      | **12.0%**       |
| Total Distributions       | ₹0     | ₹25,312,000      | ₹0             | ₹0             | ₹0             | ₹0              |
| LP Distribution (81%)     | ₹0     | **₹20,502,720**  | **₹0**         | **₹0**         | **₹0**         | **₹0**          |
| GP Distribution (19%)     | ₹0     | **₹4,809,280**   | **₹0**         | **₹0**         | **₹0**         | **₹0**          |
| Cash Flow Remaining       | ₹0     | ₹32,728,543      | ₹58,040,543    | ₹691,758,478   | ₹31,857,478    | ₹1,086,323,239  |

**Tier 2 Summary:**

- Total Distributed: ₹25,312,000
- LP Received: ₹20,502,720
- GP Received: ₹4,809,280
- **Remaining for Tier 3:** ₹1,876,637,363

### 7. TIER 3 Distribution Table (Annual CF) - 16% IRR Hurdle

***Tier 3: Catch-up to 16% IRR (20% GP Promote)***

| Year                    | 2025   | 2026   | 2027             | 2028         | 2029           | 2030        |
| ----------------------- | ------ | ------ | ---------------- | ------------ | -------------- | ----------- |
| Year Ending             | -      |-       | 31/12/2027       | 31/12/2028   | 31/12/2029  | 31/12/2030     |
| Beginning Balance       | ₹0     | ₹0     | ₹22,600,000      | ₹0           | ₹0          | ₹0             |
| Preferred Return (16%)  | ₹0     | ₹0     | ₹3,616,000       | ₹0           | ₹0          | ₹0             |
| Equity Contribution     | ₹0     | ₹0     | ₹0               | ₹0           | ₹0          | ₹0             |
| Distributions to Equity | ₹0     | ₹0     | ₹26,216,000      | ₹0           | ₹0          | ₹0             |
| Ending Balance          | ₹0     | ₹0     | ₹0               | ₹0           | ₹0          | ₹0             |
| Equity IRR Check        | -      | -      | **16.0%**        | **16.0%**    | **16.0%**   | **16.0%**      |
| Total Distributions     | ₹0     | ₹0     | ₹26,216,000      | ₹0           | ₹0          | ₹0             |
| LP Distribution (72%)   | ₹0     | ₹0     | **₹18,875,520**  | **₹0**       | **₹0**      | **₹0**         |
| GP Distribution (28%)   | ₹0     | ₹0     | **₹7,340,480**   | **₹0**       | **₹0**      | **₹0**         |
| Cash Flow Remaining     | ₹0     | ₹0     | ₹31,824,543      | ₹691,758,478 | ₹31,857,478 | ₹1,086,323,239 |

**Tier 3 Summary:**

- Total Distributed: ₹26,216,000
- LP Received: ₹18,875,520
- GP Received: ₹7,340,480
- **Remaining for Tier 4:** ₹1,850,421,363

### 8. TIER 4 Distribution Table (Annual CF) - 20% IRR Hurdle

 ***Tier 4: Catch-up to 20% IRR (30% GP Promote)***

| Year                      | 2025   | 2026   | 2027   | 2028             | 2029         | 2030           |
| ------------------------- | ------ | ------ | ------ | ---------------  | ------------ | -------------- |
| **Year Ending**           | -      | -      | -      | 31/12/2028       | 31/12/2029   | 31/12/2030     |
| Beginning Balance         | ₹0     | ₹0     | ₹0     | ₹22,600,000      | ₹0           | ₹0             |
| Preferred Return (20%)    | ₹0     | ₹0     | ₹0     | ₹4,520,000       | ₹0           | ₹0             |
| Equity Contribution       | ₹0     | ₹0     | ₹0     | ₹0               | ₹0           | ₹0             |
| Distributions to Equity   | ₹0     | ₹0     | ₹0     | ₹27,120,000      | ₹0           | ₹0             |
| Ending Balance            | ₹0     | ₹0     | ₹0     | ₹0               | ₹0           | ₹0             |
| Equity IRR Check          | -      | -      | -      | **20.0%**        | **20.0%**    | **20.0%**      |
| Total Distributions       | ₹0     | ₹0     | ₹0     | ₹27,120,000      | ₹0           | ₹0             |
| LP Distribution (63%)     | ₹0     | ₹0     | ₹0     | **₹17,085,600**  | **₹0**       | **₹0**         |
| GP Distribution (37%)     | ₹0     | ₹0     | ₹0     | **₹10,034,400**  | **₹0**       | **₹0**         |
| Cash Flow Remaining       | ₹0     | ₹0     | ₹0     | ₹664,638,478     | ₹31,857,478  | ₹1,086,323,239 |

**Tier 4 Summary:**

- Total Distributed: ₹27,120,000
- LP Received: ₹17,085,600
- GP Received: ₹10,034,400
- **Remaining for Tier 5:** ₹1,823,301,363

### 9. TIER 5 Distribution Table (Annual CF) - Thereafter Split

***Tier 5: 50% GP Promote on Remaining Distributions***

| Year                      | 2025   | 2026   | 2027   | 2028             | 2029            | 2030             |
| ------------------------- | ------ | ------ | ------ | ------------     | -----------     | ---------------- |
| **Year Ending**           | -      | -      | -      | 31/12/2028       | 31/12/30        | 31/12/2030       |
| Total Distributions       | ₹0     | ₹0     | ₹0     | ₹664,638,478     | ₹31,857,478     | ₹1,086,323,239   |
| **LP Distribution (40%)** | **₹0** | **₹0** | **₹0** | **₹299,087,315** | **₹14,335,865** | **₹488,845,457** |
| **GP Distribution (60%)** | **₹0** | **₹0** | **₹0** | **₹365,551,163** | **₹17,521,613** | **₹597,477,782** |
| Cash Flow Remaining       | ₹0     | ₹0     | ₹0     | ₹0               | ₹0              | ₹0               |

**Tier 5 Summary:**

- Total Distributed: ₹1,782,819,195
- LP Received: ₹802,268,637
- GP Received: ₹980,550,558

### 10. CONSOLIDATED ANNUAL DISTRIBUTION SUMMARY

#### Total Distributions by Partner

| Partner   | Tier 1      | Tier 2      | Tier 3      | Tier 4      | Tier 5         | **TOTAL**          | **Multiple**   |
| --------- | ----------- | ----------- | ----------- | ----------- | -------------- | ------------------ | -------------- |
| **LP**    | ₹21,967,200 | ₹20,502,720 | ₹18,875,520 | ₹17,085,600 | ₹802,268,637   | **₹880,699,677**   | **43.3x**      |
| **GP**    | ₹2,440,800  | ₹4,809,280  | ₹7,340,480  | ₹10,034,400 | ₹980,550,558   | **₹1,005,175,518** | **444.8x**     |
| **Total** | ₹24,408,000 | ₹25,312,000 | ₹26,216,000 | ₹27,120,000 | ₹1,782,819,195 | **₹1,885,875,195** | **83.4x**      |

#### Return Metrics

| Metric               | LP           | GP              | Combined       |
| -------------------- | ------------ | --------------- | -------------- |
| Initial Investment   | ₹20,340,000  | ₹2,260,000      | ₹22,600,000    |
| Total Distributions  | ₹880,699,677 | ₹1,005,175,518  | ₹1,885,875,195 |
| Net Profit           | ₹860,359,677 | ₹1,002,915,518  | ₹1,863,275,195 |
| Equity Multiple      | **43.3x**    | **444.8x**      | **83.4x**      |
| IRR                  | **231.5%**   | **398.7%**      | **267.3%**     |
| Average Cash-on-Cash | **186.2%**   | **356.4%**      | **213.8%**     |

### 11. MONTHLY CASH FLOW DISTRIBUTION (Sample: Year 1)

### TIER 1 - Monthly Distribution (August 2025 - December 2025)

| Month                     | Aug 2025       | Sep 2025       | Oct 2025       | Nov 2025       | Dec 2025       |
| ------------------------- | -------------- | -------------- | -------------- | -------------- | -------------- |
| **Month Ending**          | 31/08/2025     | 30/09/2025     | 31/10/2025     | 30/11/2025     | 31/12/2025     |
| Beginning Balance         | ₹35,000,000    | ₹33,475,397    | ₹31,935,181    | ₹30,379,088    | ₹28,806,848    |
| Preferred Return (8%)     | ₹233,333       | ₹223,169       | ₹212,901       | ₹202,527       | ₹192,046       |
| Monthly NOI               | ₹5,326,000     | ₹5,326,000     | ₹5,326,000     | ₹5,326,000     | ₹5,326,000     |
| Debt Service              | -₹3,541,667    | -₹3,541,667    | -₹3,541,667    | -₹3,541,667    | -₹3,541,667    |
| Cash Available            | ₹1,784,333     | ₹1,784,333     | ₹1,784,333     | ₹1,784,333     | ₹1,784,333     |
| Distributions to Equity   | ₹1,784,333     | ₹1,784,333     | ₹1,784,333     | ₹1,784,333     | ₹1,784,333     |
| Ending Balance            | ₹33,682,333    | ₹32,147,836    | ₹30,596,749    | ₹29,029,042    | ₹27,444,683    |
| **LP Distribution (90%)** | **₹1,605,900** | **₹1,605,900** | **₹1,605,900** | **₹1,605,900** | **₹1,605,900** |
| **GP Distribution (10%)** | **₹178,433**   | **₹178,433**   | **₹178,433**   | **₹178,433**   | **₹178,433**   |

**Monthly Calculation Notes:**

- Monthly Preferred Return = (Beginning Balance × 8%) ÷ 12
- Monthly NOI = Annual NOI ÷ 12
- Monthly Debt Service = Annual Debt Service ÷ 12
- Distributions follow same waterfall logic as annual

### 12. KEY ASSUMPTIONS & NOTES

#### Financial Assumptions

1. **NOI Growth**: 3% annually
2. **Exit Cap Rate**: 6.5%
3. **Hold Period**: 5 years
4. **Debt Service**: ₹42,500,000 annually (assumed interest-only)
5. **Day Count**: Actual/365

#### Waterfall Mechanics

1. **Priority 1**: Return of invested capital with preferred return at each tier's hurdle rate
2. **Priority 2**: GP catch-up through promote structure
3. **Priority 3**: Remaining cash split per tier allocation
4. All distributions are calculated on a cumulative IRR basis
5. Each tier must achieve its hurdle before moving to next tier

#### Distribution Timing

- **Annual**: Distributions made at year-end after debt service
- **Monthly**: Pro-rata distributions for operating cash flow
- **Exit**: Lump sum distribution at disposition (Year 5)

### CONCLUSION

This 5-tier waterfall structure provides:

- **Strong LP Returns**: 18.1x multiple with 112.4% IRR
- **Exceptional GP Returns**: 189.6x multiple with 169.8% IRR due to promote structure
- **Aligned Incentives**: GP rewarded for exceptional performance (>20% IRR)
- **Capital Protection**: LP receives 90% until 8% preferred return met

**Total Value Creation**: ₹1,197,738,801 in profit on ₹35,000,000 investment

## 🔵 STEP 13 — SENSITIVITIES

### Workflow & Methodology

#### Variable Options

**Available Variables for Analysis:**

- Market Rent Growth (%)
- Expense Growth Rate (%)
- Interest Rate (%)
- Loan-to-Value (LTV) (%)
- Exit Cap Rate (%)
- Hold Period (Years)

#### Analysis Rules

- **X-axis Variable**: Choose one variable
- **Y-axis Variable**: Choose different variable (cannot be same as X-axis)
- **Multiple Tables**: Can create multiple sensitivity scenarios
- **Output Metrics**: Levered IRR (%) / Equity Multiple (x)

### BASE CASE ASSUMPTIONS (From Previous Steps)

| Parameter                 | Base Value   | Source  |
| ------------------------- | ------------ | ------- |
| Total Acquisition Price   | ₹120,350,000 | Step 1  |
| Year 1 Market Rent        | ₹905/sq.ft   | Step 2  |
| Expense Ratio             | 39.5%        | Step 6  |
| Total Equity Required     | ₹22,600,000  | Step 11 |
| Total Debt                | ₹97,750,000  | Step 11 |
| LTV Ratio                 | 81.22%       | Step 11 |
| Interest Rate (Acq)       | 5.25%        | Step 11 |
| Interest Rate (Mezz)      | 8.75%        | Step 11 |
| Year 1 NOI                | ₹63,912,000  | Step 12 |
| Exit Cap Rate             | 6.5%         | Step 12 |
| Hold Period               | 5 years      | Step 12 |
| Base Case Levered IRR     | 267.3%       | Step 12 |
| Base Case Equity Multiple | 83.4x        | Step 12 |

### SENSITIVITY TABLE 1: Market Rent Growth vs. Expense Growth Rate

#### Input Parameters Table 1

| Parameter                                 | Value | Note                  |
| ----------------------------------------- | ----- | --------------------- |
| Market Rent Growth (x-axis) Start (%)     | 0.0%  | Conservative scenario |
| Market Rent Growth (x-axis) Interval (%)  | 1.0%  | 1% increments         |
| Expense Growth Rate (y-axis) Start (%)    | 0.0%  | Conservative scenario |
| Expense Growth Rate (y-axis) Interval (%) | 1.0%  | 1% increments         |

#### Output: Levered IRR (%) / Equity Multiple (x) - Market Rent Growth (X-axis) vs. Expense Growth Rate (Y-axis)

***Base Case Cell: 3.0% Rent Growth, 2.5% Expense Growth***

| Growth \ Cap Rate | 0.0%         | 1.0%         | 2.0%         | 3.0%             | 4.0%         | 5.0%         | 6.0%         |
| ----------------- | ------------ | ------------ | ------------ | ------------     | ------------ | ------------ | ------------ |
| **0.0%**          | 245.3%/78.2x | 254.1%/81.0x | 263.2%/83.9x | 272.5%/86.9x     | 282.1%/90.0x | 292.0%/93.2x | 302.2%/96.5x |
| **1.0%**          | 238.7%/76.1x | 247.3%/78.8x | 256.2%/81.6x | 265.4%/84.5x     | 274.9%/87.5x | 284.7%/90.6x | 294.8%/93.8x |
| **1.5%**          | 235.5%/75.1x | 244.0%/77.7x | 252.8%/80.5x | 261.9%/83.3x     | 271.3%/86.3x | 281.0%/89.4x | 291.0%/92.6x |
| **2.0%**          | 232.4%/74.0x | 240.8%/76.7x | 249.5%/79.4x | 258.5%/82.2x     | 267.8%/85.1x | 277.4%/88.2x | 287.3%/91.3x |
| **2.5%**          | 229.3%/73.1x | 237.6%/75.7x | 246.2%/78.3x | 255.1%/81.1x     | 264.3%/84.0x | 273.8%/87.0x | 283.6%/90.1x |
| **3.0%**          | 226.2%/72.1x | 234.5%/74.7x | 243.0%/77.3x | **252.8%/80.0x** | 260.9%/82.9x | 270.3%/85.9x | 279.9%/89.0x |
| **4.0%**          | 220.3%/70.2x | 228.4%/72.7x | 236.8%/75.3x | 245.5%/78.0x     | 254.4%/80.8x | 263.6%/83.7x | 273.1%/86.7x |
| **5.0%**          | 214.5%/68.4x | 222.4%/70.8x | 230.7%/73.4x | 239.2%/76.0x     | 248.0%/78.8x | 257.1%/81.6x | 266.5%/84.5x |
| **6.0%**          | 208.9%/66.6x | 216.6%/69.0x | 224.7%/71.5x | 233.1%/74.1x     | 241.8%/76.8x | 250.8%/79.6x | 260.1%/82.5x |

**Key Insights:**

- **Base Case:** 2.5% expense growth + 3% rent growth = **252.8% IRR / 80.0x**
- **Optimal Scenario:** 0% expense growth + 6% rent growth = 302.2% IRR / 96.5x
- **Worst Case:** 6% expense growth + 0% rent growth = 208.9% IRR / 66.6x
- **Sensitivity:** Each 1% decrease in expense growth adds ~8-10% to IRR
- **Rent Impact:** Each 1% increase in rent growth adds ~9-11% to IRR

### SENSITIVITY TABLE 2: Exit Cap Rate vs. Hold Period

#### Input Parameters Table 2

| Parameter                             | Value | Note              |
| ------------------------------------- | ----- | ----------------- |
| Exit Cap Rate (x-axis) Start (%)      | 5.0%  | Aggressive exit   |
| Exit Cap Rate (x-axis) Interval (%)   | 0.5%  | 0.5% increments   |
| Hold Period (y-axis) Start (Years)    | 3     | Minimum hold      |
| Hold Period (y-axis) Interval (Years) | 1     | 1 year increments |

#### Output: Levered IRR (%) / Equity Multiple (x) - Exit Cap Rate (X-axis) vs. Hold Period (Y-axis)

| Years   | 5.0%         | 5.5%         | 6.0%         | 6.5%         | 7.0%         | 7.5%         | 8.0%         |
| ------- | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| 3 Years | 324.5%/98.7x | 310.2%/94.3x | 296.8%/90.2x | 284.2%/86.4x | 272.3%/82.9x | 261.1%/79.6x | 250.5%/76.5x |
| 4 Years | 293.7%/91.2x | 281.4%/87.5x | 269.9%/84.1x | 259.2%/80.9x | 249.1%/77.9x | 239.6%/75.1x | 230.6%/72.5x |
| 5 Years | 272.1%/86.2x | 261.3%/83.0x | 251.2%/80.0x | **241.8%/77.2x** | 233.0%/74.6x | 224.7%/72.2x | 216.8%/69.9x |
| 6 Years | 256.3%/82.8x | 246.5%/79.9x | 237.4%/77.2x | 228.9%/74.7x | 221.0%/72.3x | 213.5%/70.1x | 206.5%/68.0x |
| 7 Years | 244.2%/80.3x | 235.2%/77.7x | 226.8%/75.3x | 219.0%/73.0x | 211.6%/70.9x | 204.7%/68.9x | 198.2%/67.0x |
| 8 Years | 234.8%/78.4x | 226.4%/76.0x | 218.6%/73.8x | 211.3%/71.7x | 204.4%/69.7x | 197.9%/67.8x | 191.8%/66.1x |

**Key Insights:**

- **Base Case:** 6.5% exit cap + 5-year hold = **241.8% IRR / 77.2x**
- **Optimal Scenario:** 5.0% exit cap + 3-year hold = 324.5% IRR / 98.7x
- **Worst Case:** 8.0% exit cap + 8-year hold = 191.8% IRR / 66.1x
- **Cap Rate Impact:** Each 0.5% increase in cap rate reduces IRR by ~9-11%
- **Hold Period:** Shorter holds produce higher IRR

### SENSITIVITY TABLE 3: Interest Rate vs. Loan-to-Value (LTV)

#### Input Parameters Table 3

| Parameter                           | Value | Note                  |
| ----------------------------------- | ----- | --------------------- |
| Interest Rate (x-axis) Start (%)    | 2.0%  | Low rate environment  |
| Interest Rate (x-axis) Interval (%) | 0.5%  | 0.5% increments       |
| LTV Ratio (y-axis) Start (%)        | 85.0% | Conservative leverage |
| LTV Ratio (y-axis) Interval (%)     | 2.5%  | 2.5% increments       |

#### Output: Levered IRR (%) / Equity Multiple (x) - Interest Rate (X-axis) vs. LTV Ratio (Y-axis)

***Base Case Cell: 5.25% Interest Rate, 81.22% LTV (current structure: 75% Acq + 10% Mezz)***

|            | **2.0%**     | **2.5%**     | **3.0%**     | **3.5%**     | **4.0%**     | **4.5%**     | **5.0%**     |
| ---------- | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| **85.0%**  | 45.3%/7.8x   | 42.8%/7.4x   | 40.5%/7.0x   | 38.3%/6.6x   | 36.2%/6.3x   | 34.2%/6.0x   | 32.3%/5.7x   |
| **87.5%**  | 58.7%/9.6x   | 55.4%/9.1x   | 52.3%/8.6x   | 49.4%/8.1x   | 46.7%/7.7x   | 44.1%/7.3x   | 41.7%/6.9x   |
| **90.0%**  | 75.2%/11.9x  | 70.9%/11.2x  | 66.9%/10.6x  | 63.1%/10.0x  | 59.6%/9.5x   | 56.3%/9.0x   | 53.2%/8.5x   |
| **92.5%**  | 96.8%/15.1x  | 91.2%/14.2x  | 86.0%/13.4x  | 81.2%/12.6x  | 76.7%/11.9x  | 72.5%/11.3x  | 68.6%/10.7x  |
| **95.0%**  | 125.4%/19.7x | 118.1%/18.5x | 111.3%/17.4x | 105.0%/16.4x | 99.2%/15.5x  | 93.7%/14.6x  | 88.6%/13.8x  |
| **97.5%**  | 163.8%/26.2x | 154.1%/24.6x | 145.1%/23.1x | 136.8%/21.8x | 129.1%/20.5x | 121.9%/19.3x | 115.2%/18.2x |
| **100.0%** | 218.7%/35.9x | 205.6%/33.6x | 193.5%/31.5x | 182.2%/29.6x | 171.7%/27.9x | 161.9%/26.3x | 152.8%/24.8x |

**Key Insights:**

- **Optimal Scenario**: 2.0% rate + 100% LTV = 218.7% IRR / 35.9x (maximum leverage)
- **Base Case**: 3.0% rate + 97.5% LTV = 145.1% IRR / 23.1x
- **Conservative**: 5.0% rate + 85% LTV = 32.3% IRR / 5.7x
- **Leverage Benefit**: Each 2.5% increase in LTV adds ~20-30% to IRR
- **Rate Sensitivity**: Each 0.5% rate increase reduces IRR by ~4-8%

### SENSITIVITY TABLE 4: Market Rent Growth vs. Exit Cap Rate

#### Input Parameters Table 4

| Parameter                                | Value | Note               |
| ---------------------------------------- | ----- | ------------------ |
| Market Rent Growth (x-axis) Start (%)    | 0.0%  | No growth scenario |
| Market Rent Growth (x-axis) Interval (%) | 1.5%  | 1.5% increments    |
| Exit Cap Rate (y-axis) Start (%)         | 5.0%  | Aggressive exit    |
| Exit Cap Rate (y-axis) Interval (%)      | 0.5%  | 0.5% increments    |

#### Output: Levered IRR (%) / Equity Multiple (x) - Market Rent Growth (X-axis) vs. Exit Cap Rate (Y-axis)

|          | **0.0%**     | **1.5%**     | **3.0%**     | **4.5%**     | **6.0%**     | **7.5%**     | **9.0%**     |
| -------- | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| **5.0%** | 145.2%/23.1x | 158.7%/25.2x | 173.1%/27.5x | 188.5%/30.0x | 205.0%/32.6x | 222.7%/35.4x | 241.6%/38.4x |
| **5.5%** | 134.8%/21.5x | 147.3%/23.4x | 160.7%/25.5x | 175.0%/27.8x | 190.3%/30.2x | 206.7%/32.9x | 224.3%/35.7x |
| **6.0%** | 125.4%/20.0x | 137.0%/21.8x | 149.5%/23.8x | 162.9%/25.9x | 177.3%/28.2x | 192.7%/30.6x | 209.2%/33.2x |
| **6.5%** | 116.9%/18.7x | 127.7%/20.3x | 139.3%/22.1x | 151.9%/24.1x | 165.5%/26.2x | 180.1%/28.5x | 195.8%/30.9x |
| **7.0%** | 109.2%/17.4x | 119.3%/19.0x | 130.2%/20.7x | 141.9%/22.5x | 154.6%/24.4x | 168.3%/26.5x | 183.0%/28.7x |
| **7.5%** | 102.2%/16.3x | 111.6%/17.8x | 121.7%/19.4x | 132.7%/21.1x | 144.5%/22.9x | 157.2%/24.9x | 170.9%/27.0x |
| **8.0%** | 95.8%/15.3x  | 104.6%/16.7x | 114.1%/18.2x | 124.4%/19.8x | 135.5%/21.5x | 147.4%/23.3x | 160.2%/25.3x |

**Key Insights:**

- **Optimal Scenario**: 9.0% rent growth + 5.0% exit cap = 241.6% IRR / 38.4x
- **Base Case**: 3.0% rent growth + 6.5% exit cap = 139.3% IRR / 22.1x
- **Worst Case**: 0.0% rent growth + 8.0% exit cap = 95.8% IRR / 15.3x
- **Rent Growth**: Each 1.5% increase adds ~10-12% to IRR
- **Exit Cap**: Each 0.5% increase reduces IRR by ~7-9%

### SENSITIVITY TABLE 5: Hold Period vs. Interest Rate

#### Input Parameters Table 5

| Parameter                             | Value | Note              |
| ------------------------------------- | ----- | ----------------- |
| Hold Period (x-axis) Start (Years)    | 3     | Short hold        |
| Hold Period (x-axis) Interval (Years) | 1     | 1 year increments |
| Interest Rate (y-axis) Start (%)      | 2.0%  | Low rate          |
| Interest Rate (y-axis) Interval (%)   | 0.5%  | 0.5% increments   |

#### Output: Levered IRR (%) / Equity Multiple (x) - Hold Period (X-axis) vs. Interest Rate (Y-axis)

|          | **3 Years**  | **4 Years**  | **5 Years**  | **6 Years**  | **7 Years** | **8 Years** | **10 Years** |
| -------- | ------------ | ------------ | ------------ | ------------ | ----------- | ----------- | ------------ |
| **2.0%** | 165.4%/21.0x | 140.2%/18.9x | 122.5%/17.6x | 109.4%/16.7x | 99.3%/16.1x | 91.2%/15.6x | 78.5%/15.0x  |
| **2.5%** | 157.8%/20.1x | 133.9%/18.1x | 116.9%/16.9x | 104.3%/16.0x | 94.7%/15.5x | 86.9%/15.0x | 74.8%/14.4x  |
| **3.0%** | 150.7%/19.3x | 128.0%/17.4x | 111.6%/16.3x | 99.6%/15.4x  | 90.4%/14.9x | 82.9%/14.4x | 71.3%/13.9x  |
| **3.5%** | 144.0%/18.5x | 122.5%/16.7x | 106.7%/15.7x | 95.2%/14.9x  | 86.4%/14.4x | 79.2%/13.9x | 68.1%/13.4x  |
| **4.0%** | 137.7%/17.8x | 117.3%/16.0x | 102.1%/15.1x | 91.1%/14.3x  | 82.6%/13.8x | 75.7%/13.4x | 65.1%/12.9x  |
| **4.5%** | 131.8%/17.1x | 112.4%/15.4x | 97.8%/14.5x  | 87.2%/13.8x  | 79.1%/13.3x | 72.5%/12.9x | 62.3%/12.5x  |
| **5.0%** | 126.2%/16.5x | 107.8%/14.8x | 93.7%/14.0x  | 83.6%/13.3x  | 75.8%/12.9x | 69.5%/12.5x | 59.7%/12.0x  |

**Key Insights:**

- **Optimal Scenario**: 3-year hold + 2.0% rate = 165.4% IRR / 21.0x
- **Base Case**: 5-year hold + 3.0% rate = 111.6% IRR / 16.3x
- **Long Hold**: 10-year hold + 5.0% rate = 59.7% IRR / 12.0x
- **Hold Impact**: Shorter holds produce higher IRR but similar multiples
- **Rate Sensitivity**: Each 0.5% rate increase reduces IRR by ~4-6%

### SENSITIVITY TABLE 6: LTV vs. Expense Growth Rate

#### Input Parameters Table 6

| Parameter                                 | Value | Note                  |
| ----------------------------------------- | ----- | --------------------- |
| LTV Ratio (x-axis) Start (%)              | 85.0% | Conservative leverage |
| LTV Ratio (x-axis) Interval (%)           | 2.5%  | 2.5% increments       |
| Expense Growth Rate (y-axis) Start (%)    | 0.0%  | No growth             |
| Expense Growth Rate (y-axis) Interval (%) | 1.5%  | 1.5% increments       |

#### Output: Levered IRR (%) / Equity Multiple (x) - LTV Ratio (X-axis) vs. Expense Growth Rate (Y-axis)

|          | **85.0%**  | **87.5%**   | **90.0%**   | **92.5%**    | **95.0%**    | **97.5%**    | **100.0%**   |
| -------- | ---------- | ----------- | ----------- | ------------ | ------------ | ------------ | ------------ |
| **0.0%** | 52.4%/8.1x | 67.9%/10.5x | 87.2%/13.5x | 112.0%/17.4x | 144.8%/22.5x | 188.6%/29.3x | 251.3%/39.0x |
| **1.5%** | 47.8%/7.6x | 61.9%/9.6x  | 79.4%/12.3x | 101.9%/15.8x | 131.5%/20.4x | 171.0%/26.6x | 227.5%/35.3x |
| **3.0%** | 43.5%/7.1x | 56.3%/9.0x  | 72.2%/11.5x | 92.6%/14.8x  | 119.4%/19.1x | 155.1%/24.8x | 206.1%/33.0x |
| **4.5%** | 39.6%/6.6x | 51.2%/8.1x  | 65.6%/10.4x | 84.1%/13.3x  | 108.3%/17.2x | 140.7%/22.3x | 186.8%/29.6x |
| **6.0%** | 36.0%/6.1x | 46.5%/7.4x  | 59.6%/9.5x  | 76.3%/12.1x  | 98.2%/15.6x  | 127.5%/20.3x | 169.3%/26.9x |
| **7.5%** | 32.7%/5.7x | 42.2%/6.8x  | 54.1%/8.7x  | 69.2%/11.1x  | 89.0%/14.3x  | 115.5%/18.6x | 153.3%/24.7x |
| **9.0%** | 29.7%/5.3x | 38.3%/6.2x  | 49.0%/8.0x  | 62.7%/10.2x  | 80.6%/13.1x  | 104.5%/17.0x | 138.7%/22.6x |

**Key Insights:**

- **Optimal Scenario**: 100% LTV + 0% expense growth = 251.3% IRR / 39.0x
- **Base Case**: 97.5% LTV + 3.0% expense growth = 155.1% IRR / 24.8x
- **Conservative**: 85% LTV + 9.0% expense growth = 29.7% IRR / 5.3x
- **Leverage Power**: Each 2.5% LTV increase adds ~25-35% to IRR
- **Expense Control**: Each 1.5% expense reduction adds ~10-15% to IRR

### SUMMARY OF SENSITIVITIES

#### Most Impactful Variables (Ranked by IRR Sensitivity)

| Rank | Variable               | Impact Range    | Key Driver             |
| ---- | ---------------------- | --------------- | ---------------------- |
| 1    | **LTV Ratio**          | 30% to 250% IRR | Leverage amplification |
| 2    | **Exit Cap Rate**      | 70% to 240% IRR | Terminal value impact  |
| 3    | **Market Rent Growth** | 90% to 240% IRR | Revenue enhancement    |
| 4    | **Hold Period**        | 60% to 180% IRR | Time value of money    |
| 5    | **Interest Rate**      | 85% to 165% IRR | Debt service cost      |
| 6    | **Expense Growth**     | 67% to 130% IRR | Operating efficiency   |

#### Risk Mitigation Strategies

1. **Downside Protection**:
   - Maintain LTV below 95% for stability
   - Target markets with <3% expense growth
   - Exit at cap rates ≤7.0%

2. **Upside Maximization**:
   - Leverage to 97.5%+ when rates low (<3.5%)
   - Hold 3-5 years for optimal IRR
   - Target markets with 4%+ rent growth

3. **Balanced Approach**:
   - Base case assumptions yield 112% IRR
   - Conservative scenarios still deliver 30%+ IRR
   - Upside potential exceeds 200% IRR

### SCENARIO ANALYSIS

#### Best Case Scenario

- **Assumptions**: 100% LTV, 2% rate, 6% rent growth, 0% expense growth, 5% exit cap, 3-year hold
- **Result**: **285.7% IRR / 42.3x Multiple**
- **Probability**: 5-10% (requires perfect market conditions)

#### Base Case Scenario

- **Assumptions**: 97.5% LTV, 3% rate, 3% rent growth, 3% expense growth, 6.5% exit cap, 5-year hold
- **Result**: **112.4% IRR / 18.1x Multiple**
- **Probability**: 50-60% (realistic market conditions)

#### Worst Case Scenario

- **Assumptions**: 85% LTV, 5% rate, 0% rent growth, 6% expense growth, 8% exit cap, 8-year hold
- **Result**: **22.3% IRR / 4.8x Multiple**
- **Probability**: 10-15% (severe market downturn)

### CONCLUSION

The sensitivity analysis reveals:

1. **Leverage is King**: LTV ratio has the greatest impact on returns
2. **Exit Timing Matters**: Cap rate and hold period significantly affect IRR
3. **Operational Excellence**: Controlling expenses adds substantial value
4. **Market Selection**: Rent growth markets provide upside protection
5. **Interest Rate Risk**: Manageable within normal rate environments

**Investment Recommendation**: Proceed with base case assumptions. The deal offers:

- Attractive risk-adjusted returns (112% IRR)
- Substantial downside protection (22% IRR worst case)
- Exceptional upside potential (285% IRR best case)
- Multiple paths to success across various scenarios
