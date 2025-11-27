# Commercial Property Analysis

## Data Flow Summary

***Property Info → Rent Roll(Tenants) → Rent Details → Unpaid Leasing Costs(ULC) → Future Tenant Assumptions(FTA) → Operating Expenses → Expense Groups → Expense Reimbursement → Expense Reimbursement Assumptions → Expense Reimbursement Operating Expense Comparison Table(Applied Assumptions and Without Applied Assumptions) → Construction Budget → Debt(Acquisition Loan,Mezzanine Loan,Refinance Loan) →  Waterfall(Annual CF,Monthly CF) → Sensitivities***

---

## Property Overview Tab

```plan
name='ABC Plaza',
address_line_one='123 Main St',
city='Kolkata',
state='WB',
zip_code='743262',
country='India',
year_built=2010,
land_acres=2,
land_square_footage=87120,
building_square_footage=65000,
number_of_stories=5,
property_type=['retail'],
uncovered_parking_spaces=120,
covered_parking_spaces=30,
purchase_price=10000000, // $10,000,000
closing_costs=3, // 3%
upfront_working_capital=200000,
analysis_date=new Date('2025-08-29'),
cost_of_sale=2, // 2%
exit_cap_rate=6.5,
hold_period_months=60,
acquisition_fee=1,
asset_management_fee=1,
construction_management_fee=2,
disposition_fee=1,
```

## Property Calculations

### Total Upfront & Planned Capital

**Formula:** `totalUpfrontPlannedCapital = purchase_price + (purchase_price * (closing_costs / 100)) + upfront_working_capital`
**Calculation:** $10,000,000 + ($10,000,000 × 0.03) + $200,000 = $10,500,000

### Purchase Price / SF

**Formula:** `purchasePricePerSF = purchase_price / building_square_footage`
**Calculation:** $10,000,000 ÷ 65,000 = $153.85 per SF

### Total Parking Spaces

**Formula:** `totalParkingSpaces = uncovered_parking_spaces + covered_parking_spaces`
**Calculation:** 120 + 30 = 150 spaces

### Total Spaces / 1,000 SF

**Formula:** `totalSpacesPer1000SF = totalParkingSpaces / (building_square_footage / 1000)`
**Calculation:** 150 ÷ (65,000 ÷ 1,000) = 2.31 spaces per 1,000 SF

### Closing Costs

**Formula:** `closingCostsAmount = purchase_price * (closing_costs / 100)`
**Calculation:** $10,000,000 × 0.03 = $300,000

### Acquisition Fee Amount = purchase_price × acquisition_fee%

### Disposition Fee Amount = exit_value × disposition_fee%

### Construction Mgmt Fee Amount = construction_budget × construction_management_fee%

### Asset Mgmt Fee Amount = (annual rule based on client logic)

---

## Rent Roll Tab (Under the rent roll tab have Rant Roll Table,Rent Details Table,Unpaid Leasing Costs (ULC) Table, Future Tenant Assumptions Table  )

| Suite | Tenant        | Leased/Spec | Tenant SF | % of Total SF | Lease Start | Initial Lease (mo) | Lease End   | Option 1 (mo) | Option 2 (mo) | Contract End | Term (years) | Remaining Term (years) | In-Place Rent ($/mo) | Annual Rent ($) | Annual Rent / SF ($) | Monthly Rent ($) | Monthly Rent / SF ($) | Increase Method | Increase |
| ----- | ------------- | ----------- | --------- | ------------- | ----------- | ------------------ | ----------- | ------------- | ------------- | ------------ | ------------ | ---------------------- | -------------------- | --------------- | -------------------- | ---------------- | --------------------- | --------------- | -------- |
| 101   | Tenant A      | Leased      | 20,000    | 30.8%         | Jan-01-2025 | 60                 | Dec-31-2029 | 24            | 0             | Dec-31-2031  | 7.0          | 4.36                   | 40,000               | 480,000         | 24.0                 | 40,000           | 2.0                   | Inc. %/Yr       | 3%       |
| 102   | Tenant B      | Leased      | 15,000    | 23.1%         | Jan-01-2025 | 48                 | Dec-31-2028 | 12            | 12            | Dec-31-2030  | 6.0          | 3.36                   | 30,000               | 360,000         | 24.0                 | 30,000           | 2.0                   | Inc. $/Yr       | 2,000    |
| 103   | Future Tenant | Speculative | 10,000    | 15.4%         | Jan-01-2026 | 60                 | Dec-31-2030 | 12            | 12            | Dec-31-2032  | 7.0          | 5.36                   | 18,000               | 216,000         | 21.6                 | 18,000           | 1.8                   | Inc. %/Yr       | 3%       |
| 104   | Tenant C      | Leased      | 5,000     | 7.7%          | Jan-01-2025 | 36                 | Dec-31-2027 | 24            | 24            | Dec-31-2031  | 7.0          | 2.36                   | 12,500               | 150,000         | 30.0                 | 12,500           | 2.5                   | Detail          | –        |
| 105   | Tenant D      | Leased      | 8,000     | 12.3%         | Feb-01-2025 | 36                 | Jan-31-2028 | 12            | 12            | Jan-31-2030  | 5.0          | 2.42                   | 16,800               | 201,600         | 25.2                 | 16,800           | 2.1                   | Inc. %/Yr       | 5%       |
| 106   | Tenant E      | Leased      | 7,000     | 10.8%         | Mar-01-2025 | 60                 | Feb-28-2030 | 24            | 24            | Feb-28-2034  | 9.0          | 4.50                   | 12,600               | 151,200         | 21.6                 | 12,600           | 1.8                   | Inc. $/Yr       | 1,500    |

### Rent Roll Calculations

#### % of Total SF

**Formula:** `% of Total SF = SF / building_square_footage`

- Suite 101: 20,000 ÷ 65,000 = 30.8%
- Suite 102: 15,000 ÷ 65,000 = 23.1%
- Suite 103: 10,000 ÷ 65,000 = 15.4%
- Suite 104: 5,000 ÷ 65,000 = 7.7%
- Suite 105: 8,000 ÷ 65,000 = 12.3%
- Suite 106: 7,000 ÷ 65,000 = 10.8%

#### Lease End

**Formula:** `Lease End = Lease Start + Initial Lease (mo)`

- Suite 101: Jan-01-2025 + 60 months = Dec-31-2029
- Suite 102: Jan-01-2025 + 48 months = Dec-31-2028
- Suite 104: Jan-01-2025 + 36 months = Dec-31-2027
- Suite 105: Feb-01-2025 + 36 months = Jan-31-2028
- Suite 106: Mar-01-2025 + 60 months = Feb-28-2030

#### Contract End

**Formula:** `Contract End = Lease End + Option 1 (mo) + Option 2 (mo)`

- Suite 101: Dec-31-2029 + 24 + 0 = Dec-31-2031
- Suite 102: Dec-31-2028 + 12 + 12 = Dec-31-2030
- Suite 104: Dec-31-2027 + 24 + 24 = Dec-31-2031
- Suite 105: Jan-31-2028 + 12 + 12 = Jan-31-2030
- Suite 106: Feb-28-2030 + 24 + 24 = Feb-28-2034

#### Term (years)

**Formula:** `Term = (Contract End - Lease Start) in days / 365.25`

- Suite 101: 7.0 years total contract
- Suite 102: 6.0 years total contract
- Suite 104: 7.0 years total contract
- Suite 105: 5.0 years total contract
- Suite 106: 9.0 years total contract

#### Remaining Term (years) - from Aug 29, 2025

**Formula:** `Remaining Term = (Lease End - Now) in days / 365.25`

- Suite 101: (Dec-31-2029 - Aug-29-2025) = 4.36 years
- Suite 102: (Dec-31-2028 - Aug-29-2025) = 3.36 years
- Suite 104: (Dec-31-2027 - Aug-29-2025) = 2.36 years
- Suite 105: (Jan-31-2028 - Aug-29-2025) = 2.42 years
- Suite 106: (Feb-28-2030 - Aug-29-2025) = 4.50 years

#### Annual Rent ($)

**Formula:** `Annual Rent = In-Place Rent * 12`

- Suite 101: 40,000 × 12 = 480,000
- Suite 102: 30,000 × 12 = 360,000
- Suite 104: 12,500 × 12 = 150,000
- Suite 105: 16,800 × 12 = 201,600
- Suite 106: 12,600 × 12 = 151,200

#### Annual Rent / SF ($)

**Formula:** `Annual Rent/SF = Annual Rent / Tenant SF`

- Suite 101: 480,000 ÷ 20,000 = 24.0
- Suite 102: 360,000 ÷ 15,000 = 24.0
- Suite 104: 150,000 ÷ 5,000 = 30.0
- Suite 105: 201,600 ÷ 8,000 = 25.2
- Suite 106: 151,200 ÷ 7,000 = 21.6

#### Monthly Rent / SF ($)

**Formula:** `Monthly Rent/SF = Monthly Rent / Tenant SF`

- Suite 101: 40,000 ÷ 20,000 = 2.0
- Suite 102: 30,000 ÷ 15,000 = 2.0
- Suite 104: 12,500 ÷ 5,000 = 2.5
- Suite 105: 16,800 ÷ 8,000 = 2.1
- Suite 106: 12,600 ÷ 7,000 = 1.8

### Property Metrics

#### Net Leasable Area (NLA)

**Formula:** `Net Leasable Area = Σ (square_feet for all suites)`
**Calculation:** 20,000 + 15,000 + 10,000 + 5,000 + 8,000 + 7,000 = 65,000 SF

#### Building Efficiency

**Formula:** `Building Efficiency = NLA ÷ BSF`
**Calculation:** 65,000 ÷ 65,000 = 100% (fully leased when occupied)

#### Current Occupancy (Physical)

**Formula:** `Occupancy = (Σ leased tenant.square_feet) / NLA`
**Calculation:** (20,000 + 15,000 + 5,000 + 8,000 + 7,000) ÷ 65,000 = 84.6%

#### Vacancy Rate

**Formula:** `Vacancy = 1 - Occupancy`
**Calculation:** 1 - 84.6% = 15.4%

#### Weighted Average Lease Term (WALT)

**Formula:** `WALT = Σ (remaining_term_years × leased_sf) ÷ total_leased_sf`
**Calculation:**

- Suite 101: 4.36 × 20,000 = 87,200
- Suite 102: 3.36 × 15,000 = 50,400
- Suite 104: 2.36 × 5,000 = 11,800
- Suite 105: 2.42 × 8,000 = 19,360
- Suite 106: 4.50 × 7,000 = 31,500
- **Total:** (87,200 + 50,400 + 11,800 + 19,360 + 31,500) ÷ 55,000 = 3.64 years

#### Total Base Rent

**Formula:** `Total Base Rent = Σ (Annual Amount for leased units)`
**Calculation:** $480,000 + $360,000 + $150,000 + $201,600 + $151,200 = $1,342,800

---

## Rent Details (Year-by-Year Projections) Tab

### Suite 101 - Tenant A (Inc. %/Yr: 3%)

**Formula:** `YearN = Year(N-1) × (1 + increase_rate)`

- Year 1: $40,000 × 12 = $480,000
- Year 2: $480,000 × 1.03 = $494,400
- Year 3: $494,400 × 1.03 = $509,232
- Year 4: $509,232 × 1.03 = $524,509
- Year 5: $524,509 × 1.03 = $540,244
- Year 6: $540,244 × 1.03 = $556,451
- Year 7: $556,451 × 1.03 = $573,145

### Suite 102 - Tenant B (Inc. $/Yr: $2,000)

**Formula:** `YearN = BaseAnnual + (increase × (N-1))`

- Year 1: $360,000
- Year 2: $360,000 + $2,000 = $362,000
- Year 3: $360,000 + $4,000 = $364,000
- Year 4: $360,000 + $6,000 = $366,000
- Year 5: $360,000 + $8,000 = $368,000
- Year 6: $360,000 + $10,000 = $370,000

### Suite 103 - Future Tenant (Inc. %/Yr: 3%)

- Year 1: $18,000 × 12 = $216,000
- Year 2: $216,000 × 1.03 = $222,480
- Year 3: $222,480 × 1.03 = $229,154
- Year 4: $229,154 × 1.03 = $236,029
- Year 5: $236,029 × 1.03 = $243,110
- Year 6: $243,110 × 1.03 = $250,403
- Year 7: $250,403 × 1.03 = $257,915

### Suite 104 - Tenant C (Detail Method)

**Custom annual amounts based on lease terms:**

- Year 1: $150,000 (base)
- Year 2: $154,500 (3% increase)
- Year 3: $159,135 (3% increase)
- Year 4: $163,789 (2.9% increase)
- Year 5: $163,789 (0% increase)
- Year 6: $165,427 (1% increase)
- Year 7: $167,081 (1% increase)

### Suite 105 - Tenant D (Inc. %/Yr: 5%)

**Formula:** `YearN = Year(N-1) × (1 + increase_rate)`

- Year 1: $16,800 × 12 = $201,600
- Year 2: $201,600 × 1.05 = $211,680
- Year 3: $211,680 × 1.05 = $222,264
- Year 4: $222,264 × 1.05 = $233,377
- Year 5: $233,377 × 1.05 = $245,046

### Suite 106 - Tenant E (Inc. $/Yr: $1,500)

**Formula:** `YearN = BaseAnnual + (increase × (N-1))`

- Year 1: $151,200
- Year 2: $151,200 + $1,500 = $152,700
- Year 3: $151,200 + $3,000 = $154,200
- Year 4: $151,200 + $4,500 = $155,700
- Year 5: $151,200 + $6,000 = $157,200
- Year 6: $151,200 + $7,500 = $158,700
- Year 7: $151,200 + $9,000 = $160,200
- Year 8: $151,200 + $10,500 = $161,700
- Year 9: $151,200 + $12,000 = $163,200

### Rent Details Table

| Suite | Tenant        | End Year | Year 1  | Year 2  | Year 3  | Year 4  | Year 5  | Year 6  | Year 7  | Year 8  | Year 9  | Year 10+ |
| ----- | ------------- | -------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| 101   | Tenant A      | 2034     | 480,000 | 494,400 | 509,232 | 524,509 | 540,244 | 556,451 | 573,145 | N/A     | N/A     | N/A      |
| 102   | Tenant B      | 2032     | 360,000 | 362,000 | 364,000 | 366,000 | 368,000 | 370,000 | N/A     | N/A     | N/A     | N/A      |
| 103   | Future Tenant | 2036     | 216,000 | 222,480 | 229,154 | 236,029 | 243,110 | 250,403 | 257,915 | N/A     | N/A     | N/A      |
| 104   | Tenant C      | 2031     | 150,000 | 152,000 | 155,000 | 157,000 | 160,000 | 160,000 | 160,000 | N/A     | N/A     | N/A      |
| 105   | Tenant D      | 2034     | 201,600 | 211,680 | 222,264 | 233,377 | 245,046 | N/A     | N/A     | N/A     | N/A     | N/A      |
| 106   | Tenant E      | 2034     | 151,200 | 152,700 | 154,200 | 155,700 | 157,200 | 158,700 | 160,200 | 161,700 | 163,200 | N/A      |

---

## Unpaid Leasing Costs (ULC) Tab

### Unpaid Leasing Costs Table

| Suite | Tenant        | Tenant Improvements (TI) Amount | Leasing Commission (LC) Amount | Concessions |
| ----- | ------------- | ------------------------------- | ------------------------------ | ----------- |
| 101   | Tenant A      | $500,000                        | $150,000                       | $50,000     |
| 102   | Tenant B      | $350,000                        | $100,000                       | $40,000     |
| 103   | Future Tenant | $0                              | $0                             | $0          |
| 104   | Tenant C      | $400,000                        | $125,000                       | $60,000     |
| 105   | Tenant D      | $320,000                        | $120,000                       | $45,000     |
| 106   | Tenant E      | $280,000                        | $110,000                       | $35,000     |

### ULC Calculations

- **Total Tenant Improvements:** $500,000 + $350,000 + $400,000 + $320,000 + $280,000 = $1,850,000
- **Total Leasing Commissions:** $150,000 + $100,000 + $125,000 + $120,000 + $110,000 = $605,000
- **Total Concessions:** $50,000 + $40,000 + $60,000 + $45,000 + $35,000 = $230,000
- **Total ULC:** $2,685,000

---

## Future Tenant Assumptions Tab

| Suite | Tenant        |         | New Tenant Assumptions |           |         | Renewal Tenant Assumptions |           | Market Rent at Aug 2025 |          |          | Market Rent Growth % |          |           | Reimbursement Type |          |     | Modified Gross |      |       |          |     | Base Year Stop |      |       |             |        | Base Year Stop Amount |         |          | % Pro Rata OpEx | Renewal Prob | Lease Term | Downtime |
| ----- | ------------- | ------- | ---------------------- | --------- | ------- | -------------------------- | --------- | ----------------------- | -------- | -------- | -------------------- | -------- | --------- | ------------------ | -------- | --- | -------------- | ---- | ----- | -------- | --- | -------------- | ---- | ----- | ----------- | ------ | --------------------- | ------- | -------- | --------------- | ------------ | ---------- | -------- |
|       |               | TI($)   | LC(%)                  | Free Rent | TI($)   | LC(%)                      | Free Rent | ($)                     | Month 12 | Month 24 | Month 36             | Month 48 | Month 60+ |                    | Prop Tax | Ins | CAM            | Mgmt | Utils | Prop Tax | Ins | CAM            | Mgmt | Utils | Prop Tax($) | Ins($) | CAM($)                | Mgmt($) | Utils($) | (%)             | (%)          | (months)   | (months) |
| 101   | Tenant A      | 500,000 | 6                      | 2         | 250,000 | 3                          | 1         | 24.48                   | 24.48    | 24.48    | 24.48                | 24.48    | 24.48     | Full Service Gross | -        | -   | -              | -    | -     | -        | -   | -              | -    | -     | -           | -      | -                     | -       | -        | 30.8%           | 70%          | 84         | 6        |
| 102   | Tenant B      | 350,000 | 6                      | 2         | 175,000 | 3                          | 1         | 24.48                   | 25.21    | 25.97    | 26.75                | 27.55    | 28.37     | Modified           | Yes      | Yes | Yes            | No   | No    | -        | -   | -              | -    | -     | -           | -      | -                     | -       | -        | 23.1%           | 60%          | 72         | 6        |
| 103   | Future Tenant | 400,000 | 6                      | 3         | -       | -                          | -         | 26.52                   | 26.52    | 26.52    | 26.52                | 26.52    | 26.52     | NNN                | -        | -   | -              | -    | -     | -        | -   | -              | -    | -     | -           | -      | -                     | -       | -        | 15.4%           | -            | 60         | 9        |
| 104   | Tenant C      | 400,000 | 6                      | 2         | 200,000 | 3                          | 1         | 30.60                   | 31.52    | 32.46    | 33.43                | 34.43    | 35.46     | Base Year          | Yes      | Yes | Yes            | Yes  | Yes   | Yes      | Yes | Yes            | Yes  | Yes   | 1,500       | 2,700  | 990                   | 2,500   | 1,200    | 7.7%            | 50%          | 84         | 6        |
| 105   | Tenant D      | 320,000 | 6                      | 2         | 160,000 | 3                          | 1         | 25.62                   | 26.39    | 27.18    | 28.00                | 28.84    | 29.71     | NNN                | -        | -   | -              | -    | -     | -        | -   | -              | -    | -     | -           | -      | -                     | -       | -        | 12.3%           | 65%          | 60         | 6        |
| 106   | Tenant E      | 280,000 | 6                      | 2         | 140,000 | 3                          | 1         | 22.03                   | 22.69    | 23.37    | 24.07                | 24.79    | 25.53     | Modified           | Yes      | Yes | Yes            | No   | No    | -        | -   | -              | -    | -     | -           | -      | -                     | -       | -        | 10.8%           | 55%          | 108        | 6        |

### Note for Future Tenant Assumptions

```plan
Market Rent Growth % → User provides globally

Example: 3.0% annual

You do not calculate these — they must be entered by the user in setting screens.
```

### Market Rent (As-of Date) Calculations

We assume **Market Rent Growth % = 3% annual = 0.03** and **Current Month Number (Aug 2025) = 8**

**Formula:**
\[
\text{Market Rent (current month)} = \text{Annual Rent/SF} \times \left(1 + \text{Growth \%} \times \frac{\text{Month No.}}{12}\right)
\]

- Growth % = **3% = 0.03**
- Current Month No. = **8**
- Growth Factor = \(1 + (0.03 \times \tfrac{8}{12}) = 1 + 0.02 = 1.02\)

So each suite’s rent/SF × **1.02**.

Market Rent (As-of Aug 2025):

- Suite 101 (Tenant A): 24.00 × 1.02 = 24.48 $/SF
- Suite 102 (Tenant B): 24.00 × 1.02 = 24.48 $/SF
- Suite 103 (Vacant): 26.00 × 1.02 = 26.52 $/SF
- Suite 104 (Tenant C): 30.00 × 1.02 = 30.60 $/SF
- Suite 105 (Tenant D): 25.20 × 1.02 = 25.62 $/SF
- Suite 106 (Tenant E): 21.60 × 1.02 = 22.03 $/SF

### Lease Term Calculations

**Formula:** `Lease Term =  (Contract End - Lease Start) in months`

- Suite 101: 84 months
- Suite 102: 72 months
- Suite 103: 60 month
- Suite 104: 84 months
- Suite 105: 60 months
- Suite 106: 108 months

### % Pro Rata OpEx

**Formula:** `% Pro Rata OpEx = Tenant SF ÷ building_square_footage`

- Suite 101: 20,000 ÷ 65,000 = 30.8%
- Suite 102: 15,000 ÷ 65,000 = 23.1%
- Suite 103: 10,000 ÷ 65,000 = 15.4%
- Suite 104: 5,000 ÷ 65,000 = 7.7%
- Suite 105: 8,000 ÷ 65,000 = 12.3%
- Suite 106: 7,000 ÷ 65,000 = 10.8%

---

## Operating Expenses Tab

### Gross Up for Reimbursement

**Checkbox:** [ ] Gross Up for Reimbursement
**Input Field:** Gross Up Occupancy % (e.g., 95% or 100%)

**Description:** If checked, operating expenses are "grossed up" to the entered occupancy percentage to ensure fairness among tenants when the building is not fully occupied. Gross-Up applies only when enabled and only for applicable categories (e.g., CAM, Utilities).

**Formula:**

```plan
GrossUpFactor = GrossUp% ÷ ActualOccupancy%
```

**Example:**

- Building: 85% occupied
- Gross Up %: 95%
- Gross-up Factor = 95% ÷ 85% = 1.118

### Operating Expenses Categories

- Taxes
- Insurance
- Utilities
- Management
- CAM (Common Area Maintenance)

### Operating Expenses Table

| Name                  | Category   | How Input           | Amount Type | Amount Value | Frequency | Fixed (%) | Recoverable (%) | Apply To Tenants | Start Date     | Custom Date | Inflation Type | Custom Inflation (%) |
| --------------------- | ---------- | ------------------- | ----------- | ------------ | --------- | --------- | --------------- | ---------------- | -------------- | ----------- | -------------- | -------------------- |
| Property Taxes        | taxes      | Amount              | fixed       | 225,000      | annually  | 0         | 100             | Yes              | Analysis Begin | —           | cpi            | —                    |
| Building Insurance    | insurance  | Amount              | fixed       | 97,500       | annually  | 0         | 100             | Yes              | Analysis Begin | —           | expense        | —                    |
| Electricity & Water   | cam        | $/SF                | fixed       | 2.5          | monthly   | 20        | 80              | Yes              | Analysis Begin | —           | cpi            | —                    |
| Property Mgmt Fees    | management | % of Base Rent / SF | fixed       | 5.0          | monthly   | 0         | 100             | Yes              | Analysis Begin | —           | custom         | 2.5                  |
| Repairs & Maintenance | cam        | Amount              | custom      | 100,000      | detail    | 10        | 90              | Yes              | Custom Date    | 2025-09-01  | custom         | 3.0                  |
| Security              | cam        | Amount              | fixed       | 80,000       | annually  | 25        | 75              | Yes              | Analysis Begin | —           | expense        | —                    |
| Marketing             | management | Amount              | custom      | 60,000       | detail    | 100       | 0               | No               | Analysis Begin | —           | cpi            | —                    |
| Legal                 | management | Amount              | custom      | 45,000       | detail    | 50        | 50              | Yes              | Custom Date    | 2025-09-01  | custom         | 1.5                  |
| Landscaping           | cam        | Amount              | fixed       | 70,000       | annually  | 0         | 100             | Yes              | Analysis Begin | —           | cpi            | —                    |
| Cleaning              | cam        | Amount              | fixed       | 85,000       | annually  | 100       | 0               | No               | Analysis Begin | —           | expense        | —                    |

### Calculation Formulas by Input Type

#### Amount

Direct value

```plan
Annual Amount = Amount Value × Frequency Multiplier
```

#### $/SF

Per square foot calculation

```plan
Annual Amount = Amount Value × Building Square Footage × Frequency Multiplier
```

#### % of Base Rent / SF

Percentage of base rent

```plan
Annual Amount = (Percentage / 100) × Total Base Rent
```

#### % of Market / SF

Percentage of Market per SF

```plan
Annual Amount = (Percentage / 100) × Market Rent per SF (as-of date) × Square Footage × Frequency Multiplier
```

### Individual Expense Calculations

**Building Data:**

- Building Square Footage: 65,000 SF
- Total Base Rent: $1,342,800
- Actual Occupancy: 85%
- Gross Up Target: 95%
- Gross Up Factor: 1.118

#### Property Taxes

- **Formula:** Direct amount
- **Calculation:** $225,000 annually
- **Gross Up:** Not applicable (Taxes category)

#### Building Insurance

- **Formula:** Direct amount
- **Calculation:** $97,500 annually
- **Gross Up:** Not applicable (Insurance category)

#### Electricity & Water

- **Formula:** `Amount Value × Building Square Footage × 12`
- **Calculation:** $2.5 × 65,000 × 12 = $1,950,000 annually
- **Gross Up:** Applicable (CAM category) → $1,950,000 × 1.118 = $2,180,100

#### Property Management Fees

- **Formula:** `(Percentage / 100) × Total Base Rent`
- **Calculation:** (5.0 / 100) × $1,342,800 = $67,140 annually
- **Gross Up:** Not applicable (Management category)

#### Repairs & Maintenance

- **Formula:** Custom schedule (see below)
- **Calculation:** $100,000 annually (per custom schedule)
- **Gross Up:** Applicable (CAM category) → $100,000 × 1.118 = $111,800

#### Security

- **Formula:** Direct amount
- **Calculation:** $80,000 annually
- **Gross Up:** Applicable (CAM category) → $80,000 × 1.118 = $89,440

#### Marketing

- **Formula:** Custom schedule (see below)
- **Calculation:** $60,000 annually (per custom schedule)
- **Gross Up:** Not applicable (Management category, Apply To Tenants = No)

#### Legal

- **Formula:** Custom schedule (see below)
- **Calculation:** $45,000 annually (per custom schedule)
- **Gross Up:** Not applicable (Management category)

#### Landscaping

- **Formula:** Direct amount
- **Calculation:** $70,000 annually
- **Gross Up:** Applicable (CAM category) → $70,000 × 1.118 = $78,260

#### Cleaning

- **Formula:** Direct amount
- **Calculation:** $85,000 annually
- **Gross Up:** Not applicable (Apply To Tenants = No)

### Custom Schedule Examples

#### Repairs & Maintenance (Custom Schedule)

| Month     | Amount ($)  |
| --------- | ----------- |
| Jan       | 1,000       |
| Feb       | 1,500       |
| Mar       | 2,000       |
| Apr       | 1,800       |
| May       | 4,000       |
| Jun       | 3,000       |
| Jul       | 5,000       |
| Aug       | 1,200       |
| Sep       | 1,500       |
| Oct       | 2,500       |
| Nov       | 3,000       |
| Dec       | 74,500      |
| **Total** | **100,000** |

#### Legal (Custom Schedule)

| Month     | Amount ($) |
| --------- | ---------- |
| Jan       | 1,000      |
| Feb       | 1,000      |
| Mar       | 1,000      |
| Apr       | 1,000      |
| May       | 1,000      |
| Jun       | 1,000      |
| Jul       | 1,000      |
| Aug       | 1,000      |
| Sep       | 1,000      |
| Oct       | 1,000      |
| Nov       | 1,000      |
| Dec       | 34,000     |
| **Total** | **45,000** |

#### Marketing (Custom Schedule)

| Month     | Amount ($) |
| --------- | ---------- |
| Jan       | 2,000      |
| Feb       | 2,000      |
| Mar       | 2,000      |
| Apr       | 2,000      |
| May       | 2,000      |
| Jun       | 2,000      |
| Jul       | 2,000      |
| Aug       | 2,000      |
| Sep       | 2,000      |
| Oct       | 2,000      |
| Nov       | 2,000      |
| Dec       | 38,000     |
| **Total** | **60,000** |

### Total Operating Expenses Summary

#### With Gross Up

| Expense                  | Annual Amount ($) | Gross Up Applied? | Gross Up Factor | Final Annual Amount ($) |
| ------------------------ | ----------------- | ----------------- | --------------- | ----------------------- |
| Property Taxes           | 225,000           | No                | —               | 225,000                 |
| Building Insurance       | 97,500            | No                | —               | 97,500                  |
| Electricity & Water      | 1,950,000         | Yes               | 1.118           | 2,180,100               |
| Property Management Fees | 67,140            | No                | —               | 67,140                  |
| Repairs & Maintenance    | 100,000           | Yes               | 1.118           | 111,800                 |
| Security                 | 80,000            | Yes               | 1.118           | 89,440                  |
| Marketing                | 60,000            | No                | —               | 60,000                  |
| Legal                    | 45,000            | No                | —               | 45,000                  |
| Landscaping              | 70,000            | Yes               | 1.118           | 78,260                  |
| Cleaning                 | 85,000            | No*               | —               | 85,000                  |

\* *Cleaning is CAM but has "Apply To Tenants = No", so no gross up is applied*

**Total Operating Expenses (With Gross Up):**
$225,000 + $97,500 + $2,180,100 + $67,140 + $111,800 + $89,440 + $60,000 + $45,000 + $78,260 + $85,000 = **$3,039,240**

**Operating Expenses Per SF (With Gross Up):**
$3,039,240 ÷ 65,000 = **$46.76 per SF**

#### Without Gross Up

| Expense                  | Annual Amount ($) |
| ------------------------ | ----------------- |
| Property Taxes           | 225,000           |
| Building Insurance       | 97,500            |
| Electricity & Water      | 1,950,000         |
| Property Management Fees | 67,140            |
| Repairs & Maintenance    | 100,000           |
| Security                 | 80,000            |
| Marketing                | 60,000            |
| Legal                    | 45,000            |
| Landscaping              | 70,000            |
| Cleaning                 | 85,000            |

**Total Operating Expenses (No Gross Up):**
$225,000 + $97,500 + $1,950,000 + $67,140 + $100,000 + $80,000 + $60,000 + $45,000 + $70,000 + $85,000 = **$2,779,640**

**Operating Expenses Per SF (No Gross Up):**
$2,779,640 ÷ 65,000 = **$42.76 per SF**

## Notes for Operating Expenses

### Inflation Rates

**CPI Inflation %** → User provides globally
*Example: 3.0%*

**Expense Inflation %** → User provides globally
*Example: 2.5%*

**Custom Inflation %** → User provides per row
*Example: 1.5% or 3.0%*

> **Note:** These inflation rates are not calculated by the system—they must be entered by the user in the settings screens.

### Gross Up Application Rules

Gross Up is applied only when:

1. The "Gross Up for Reimbursement" checkbox is enabled
2. The expense category is CAM or Utilities (if configured)
3. "Apply To Tenants" is set to "Yes"

Expenses with "Apply To Tenants = No" are not grossed up, even if they are in the CAM category.

---

## Expense Groups

### Expense Groups Structure

#### Group 1: Core Operating Expenses

**Expenses:**

- Property Taxes (100% recoverable)
- Building Insurance (100% recoverable)
- Property Management Fees (100% recoverable)

**Example:**

```json
{
    "name": "Core Operating Expenses",
    "expenses": [
        {
            "name": "Property Taxes",
            "reimbursable": "Yes",
            "baseYearStopAmount": 325000,
            "recoverablePercentage": 100
        },
        {
            "name": "Building Insurance",
            "reimbursable": "Yes",
            "baseYearStopAmount": 97500,
            "recoverablePercentage": 100
        },
        {
            "name": "Property Management Fees",
            "reimbursable": "Yes",
            "baseYearStopAmount": 67140,
            "recoverablePercentage": 100
        }
    ]
}
```

#### Group 2: Maintenance & Utilities

**Expenses:**

- Electricity & Water (80% recoverable)
- Repairs & Maintenance (90% recoverable)
- Security (75% recoverable)

**Example:**

```json
{
    "name": "Maintenance & Utilities",
    "expenses": [
        {
            "name": "Electricity & Water",
            "reimbursable": "Yes",
            "baseYearStopAmount": 162500,
            "recoverablePercentage": 80
        },
        {
            "name": "Repairs & Maintenance",
            "reimbursable": "Yes",
            "baseYearStopAmount": 175500,
            "recoverablePercentage": 90
        },
        {
            "name": "Security",
            "reimbursable": "Yes",
            "baseYearStopAmount": 234000,
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
            "baseYearStopAmount": 124800,
            "recoverablePercentage": 100
        },
        {
            "name": "Legal",
            "reimbursable": "Yes",
            "baseYearStopAmount": 78000,
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

---

## Expense Reimbursement Tab

## Reimbursement Logic Overview

### Selection Rules

**User can select EITHER:**

- **Reimbursement Type** (Full Service Gross, Modified Gross, Base Year Stop, NNN)
  - If selected: Individual expense checkboxes determine what's included
  - OR
- **Expense Group** (Core Operating, Maintenance & Utilities, etc.)
  - If selected: All expenses in that group are automatically included

**CANNOT select both simultaneously** - it's either Type OR Group

**Full Service Gross (FSG):** All expenses included in rent, no additional reimbursements
**Modified Gross (MG):** Selected expenses reimbursed above base rent
**Base Year Stop:** Tenant pays increases above base year amounts
**NNN (Triple Net):** Tenant pays pro-rata share of all operating expenses

### CAM Cap Types

**None:** No cap on expense increases
**Non-Cumulative:** Annual cap resets each year, unused portions don't carry forward
**Cumulative:** Unused cap portions from previous years can be applied to future increases

### Tenants Pro Rata Calculations

**Formula:** `Pro Rata Share = Tenant SF ÷ Total Building SF`

**Building Data:**

- Purchase Price: $10,000,000
- Total Building SF: 65,000
- Total Base Rent: $1,342,800
- Actual Occupancy: 85% (55,000 SF occupied)
- Vacant: 10,000 SF (Suite 103)

**Calculation:**

- Suite 101: 20,000 ÷ 65,000 = 30.8%
- Suite 102: 15,000 ÷ 65,000 = 23.1%
- Suite 103: 10,000 ÷ 65,000 = 15.4%
- Suite 104: 5,000 ÷ 65,000 = 7.7%
- Suite 105: 8,000 ÷ 65,000 = 12.3%
- Suite 106: 7,000 ÷ 65,000 = 10.8%

### Expense Reimbursement Table

| Suite | Tenant        | Detail | Reimbursement Type | Expense Groups          |          |     | Modified Gross |      |       |          |     | Base Year Stop |      |       |              |           | Base Year Stop Amount |          |           | Pro Rata | Recovery    | CAM Cap | CAM Annual |       |       | Reimbursement Years 1-5       |       |       |
| ----- | ------------- | ------ | ------------------ | ----------------------- | -------- | --- | -------------- | ---- | ----- | -------- | --- | -------------- | ---- | ----- | ------------ | --------- | --------------------- | -------- | --------- | -------- | ----------- | ------- | ---------- | ----- | ----- | ----------------------------- | ----- | ----- |
|       |               | (Y/N)  |                    |                         | Prop Tax | Ins | CAM            | Mgmt | Utils | Prop Tax | Ins | CAM            | Mgmt | Utils | Prop Tax(\$) | Ins  (\$) | CAM(\$)               | Mgmt(\$) | Utils(\$) | OpEx(%)  | %(of Share) | Type    | Cap(%)     | Yr1   | Yr2   | Yr3                           | Yr4   | Yr5   |
| 101   | Tenant A      | Yes    | Full Service Gross | -                       | -        | -   | -              | -    | -     | -        | -   | -              | -    | -     | -            | -         | -                     | -        | -         | 30.8%    | 100%        | None    | -          |       |       | All expenses included in rent |       |       |
| 102   | Tenant B      | Yes    | None               | Core Operating          | -        | -   | -              | -    | -     | -        | -   | -              | -    | -     | 51,975       | 22,523    | -                     | 15,503   | -         | 23.1%    | 80%         | None    | -          |       |       | Group-based reimbursement     |       |       |
| 103   | Future Tenant | No     | -                  | -                       | -        | -   | -              | -    | -     | -        | -   | -              | -    | -     | -            | -         | -                     | -        | -         | 15.4%    | -           | -       | -          | -     | -     | -                             | -     | -     |
| 104   | Tenant C      | Yes    | Base Year Stop     | -                       | No       | No  | No             | No   | No    | Yes      | Yes | Yes            | Yes  | Yes   | 2,500        | 3,900     | 1,360                 | 520      | 1,250     | 7.7%     | 95%         | Cum     | 4%         | 15.00 | 15.60 | 16.22                         | 16.87 | 17.55 |
| 105   | Tenant D      | Yes    | None               | Maintenance & Utilities | -        | -   | -              | -    | -     | -        | -   | -              | -    | -     | -            | -         | 15,998                | 11,070   | 7,380     | 12.3%    | 100%        | Non-Cum | 3%         |       |       | Group-based reimbursement     |       |       |
| 106   | Tenant E      | Yes    | Modified Gross     | -                       | Yes      | Yes | Yes            | No   | No    | -        | -   | -              | -    | -     | -            | -         | -                     | -        | -         | 10.8%    | 75%         | None    | -          |       |       | Built into rent               |       |       |

### Tenant Reimbursement Calculations (NO GROSS-UP)

#### Suite 101 - Tenant A (20,000 SF)

**Pro Rata:** 20,000 ÷ 65,000 = **30.77%**
**Reimbursement Type:** Full Service Gross (FSG)
**Recovery Rate:** N/A (all included in rent)

**Calculation:**

```plan
All operating expenses included in base rent
No additional reimbursements
```

**Annual Reimbursement:** $0

**Notes:**

- Tenant pays higher base rent to cover all expenses
- Landlord bears expense risk/volatility
- No pass-through of expense increases

### Suite 102 - Tenant B (15,000 SF)

**Pro Rata:** 15,000 ÷ 65,000 = **23.08%**
**Expense Group:** Core Operating Expenses
**Recovery Rate:** 80% (of pro-rata share)

**Selected Expenses:**

- Property Taxes: $225,000
- Building Insurance: $97,500
- Property Management: $67,140

**Calculations:**

```plan
Property Taxes:     $225,000 × 23.08% × 100% × 80% = $41,580
Building Insurance: $97,500  × 23.08% × 100% × 80% = $18,018
Property Management: $67,140 × 23.08% × 100% × 80% = $12,398
```

**Annual Reimbursement:** **$71,996**

**Breakdown by Category:**

- Taxes: $41,580
- Insurance: $18,018
- Management: $12,398

### Suite 103 - Future Tenant (10,000 SF) - VACANT

**Pro Rata:** 10,000 ÷ 65,000 = **15.38%**
**Status:** Vacant (Detail = "No")

**Calculation:**

```plan
No tenant = No reimbursement calculations
```

**Annual Reimbursement:** $0

**Landlord's Lost Recovery (Example if this were NNN):**

```plan
If NNN with 100% recovery:
Lost Recovery = $2,779,640 × 15.38% = $427,439 annually
```

**Impact:**

- Reduces building occupancy to 85%
- May trigger gross-up for other tenants
- Landlord absorbs all OpEx for this space

---

### Suite 104 - Tenant C (5,000 SF)

**Pro Rata:** 5,000 ÷ 65,000 = **7.69%**
**Reimbursement Type:** Base Year Stop
**Recovery Rate:** 95% (of increases above base year)
**CAM Cap:** 4% Cumulative
**Base Year Stops:** As provided in table

**Year 1 Reimbursement = Base Year Stop Amounts:**

| Category     | Base Year Stop | Tenant Pays (Year 1) |
| ------------ | -------------- | -------------------- |
| Property Tax | $2,500         | $2,500               |
| Insurance    | $3,900         | $3,900               |
| CAM          | $1,360         | $1,360               |
| Management   | $520           | $520                 |
| Utilities    | $1,250         | $1,250               |
| **TOTAL**    | **$9,530**     | **$9,530**           |

**Year 1 Annual Reimbursement:** **$9,530**

**Future Years Formula:**

```plan
For each expense category:
1. Calculate Current Year Expense × Pro Rata × Recovery %
2. Compare to Base Year Stop Amount
3. Increase = Current - Base Year Stop
4. Apply 4% Cumulative Cap to increase
5. Tenant Pays = Base Year Stop + Capped Increase
```

**Example Year 2 (assuming 3% inflation):**

```plan
Property Tax Current: $225,000 × 1.03 = $231,750
Tenant Share: $231,750 × 7.69% × 95% = $16,925
Increase from Base: $16,925 - $2,500 = $14,425
Capped at 4%: $2,500 × 1.04 = $2,600
Tenant Pays: $2,600
```

### Suite 105 - Tenant D (8,000 SF)

**Pro Rata:** 8,000 ÷ 65,000 = **12.31%**
**Expense Group:** Maintenance & Utilities
**Recovery Rate:** 100% (of pro-rata share)
**CAM Cap:** 3% Non-Cumulative

**Selected Expenses:**

- Electricity & Water: $1,950,000 (80% recoverable)
- Repairs & Maintenance: $100,000 (90% recoverable)
- Security: $80,000 (75% recoverable)

**Calculations:**

```plan
Electricity & Water: $1,950,000 × 12.31% × 80% × 100% = $192,156
Repairs & Maintenance: $100,000 × 12.31% × 90% × 100% = $11,079
Security: $80,000 × 12.31% × 75% × 100% = $7,386
```

**Total Annual Reimbursement:** **$210,621**

**Breakdown by Category:**

- CAM (Utilities): $192,156
- CAM (Repairs): $11,079
- CAM (Security): $7,386

**Note:** 3% Non-Cumulative cap applies to year-over-year increases only

### Suite 106 - Tenant E (7,000 SF)

**Pro Rata:** 7,000 ÷ 65,000 = **10.77%**
**Reimbursement Type:** Modified Gross (Custom Selection)
**Recovery Rate:** 75% (of pro-rata share)

**Selected Expenses:**

- Property Taxes: Yes → $225,000 (100% recoverable)
- Building Insurance: Yes → $97,500 (100% recoverable)
- CAM (Electricity & Water): Yes → $1,950,000 (80% recoverable)
- Management: No
- Utilities: No (covered above in CAM)

**Calculations:**

```plan
Property Taxes: $225,000 × 10.77% × 100% × 75% = $18,174
Building Insurance: $97,500 × 10.77% × 100% × 75% = $7,876
Electricity & Water: $1,950,000 × 10.77% × 80% × 75% = $126,081
```

**Total Annual Reimbursement:** **$152,131**

**Breakdown by Category:**

- Taxes: $18,174
- Insurance: $7,876
- CAM (Utilities): $126,081

## Year 1 Reimbursement Summary (NO GROSS-UP)

| Suite     | Tenant        | SF     | Pro Rata | Type/Group              | Recovery | Annual Reimbursement |
| --------- | ------------- | ------ | -------- | ----------------------- | -------- | -------------------- |
| 101       | Tenant A      | 20,000 | 30.77%   | FSG                     | N/A      | $0                   |
| 102       | Tenant B      | 15,000 | 23.08%   | Core Operating Group    | 80%      | $71,996              |
| 103       | Future Tenant | 10,000 | 15.38%   | VACANT                  | —        | $0                   |
| 104       | Tenant C      | 5,000  | 7.69%    | Base Year Stop          | 95%      | $9,530               |
| 105       | Tenant D      | 8,000  | 12.31%   | Maint & Utilities Group | 100%     | $210,621             |
| 106       | Tenant E      | 7,000  | 10.77%   | Modified Gross (Custom) | 75%      | $152,131             |
| **TOTAL** |               | 65,000 | 100%     |                         |          | **$444,278**         |

## Reimbursement Summary (WITH GROSS-UP at 95%)

### Suite 105 - Tenant D (Recalculated with Gross-Up)

**Expenses with Gross-Up Applied:**

- Electricity & Water: $2,180,100 (grossed up from $1,950,000)
- Repairs & Maintenance: $111,800 (grossed up from $100,000)
- Security: $89,440 (grossed up from $80,000)

**Calculations:**

```plan
Electricity & Water: $2,180,100 × 12.31% × 80% × 100% = $214,791
Repairs & Maintenance: $111,800 × 12.31% × 90% × 100% = $12,390
Security: $89,440 × 12.31% × 75% × 100% = $8,259
```

**Total Annual Reimbursement (Grossed Up):** **$235,440**
**Increase from No Gross-Up:** $235,440 - $210,621 = **$24,819**

### Suite 106 - Tenant E (Recalculated with Gross-Up)

**Expenses with Gross-Up Applied:**

- Property Taxes: $225,000 (no gross-up)
- Building Insurance: $97,500 (no gross-up)
- Electricity & Water: $2,180,100 (grossed up)

**Calculations:**

```plan
Property Taxes: $225,000 × 10.77% × 100% × 75% = $18,174
Building Insurance: $97,500 × 10.77% × 100% × 75% = $7,876
Electricity & Water: $2,180,100 × 10.77% × 80% × 75% = $140,927
```

**Total Annual Reimbursement (Grossed Up):** **$166,977**
**Increase from No Gross-Up:** $166,977 - $152,131 = **$14,846**

## Year 1 Final Summary (WITH GROSS-UP)

| Suite     | Tenant        | No Gross-Up  | With Gross-Up | Difference   |
| --------- | ------------- | ------------ | ------------- | ------------ |
| 101       | Tenant A      | $0           | $0            | $0           |
| 102       | Tenant B      | $71,996      | $71,996       | $0           |
| 103       | Future Tenant | $0           | $0            | $0           |
| 104       | Tenant C      | $9,530       | $9,530        | $0           |
| 105       | Tenant D      | $210,621     | $235,440      | +$24,819     |
| 106       | Tenant E      | $152,131     | $166,977      | +$14,846     |
| **TOTAL** |               | **$444,278** | **$483,943**  | **+$39,665** |

## NOI & Cap Rate Calculations

### Year 1 - No Gross-Up

**Net Operating Income:**

```text
NOI = Total Base Rent + Tenant Reimbursements - Total Operating Expenses
NOI = $1,342,800 + $444,278 - $2,779,640
NOI = -$992,562 (NEGATIVE)
```

**Cap Rate:** N/A (negative NOI)

### Year 1 - With Gross-Up (95%)

**Net Operating Income:**

```text
NOI = Total Base Rent + Tenant Reimbursements - Total Operating Expenses
NOI = $1,342,800 + $483,943 - $3,039,240
NOI = -$1,212,497 (NEGATIVE)
```

**Cap Rate:** N/A (negative NOI)

## Key Findings & Issues

### Critical Problem

**This property has NEGATIVE NOI** because:

1. Operating expenses ($2.78M - $3.04M) are extremely high
2. Base rent ($1.34M) is far too low
3. Even with reimbursements, income doesn't cover expenses

### Electricity & Water Issue

- $1,950,000 annually = $30/SF
- This is **extraordinarily high** for commercial real estate
- Typical range: $2-5/SF
- **Possible error in original data?**

### Required Base Rent for Breakeven (No Gross-Up)

```text
Required Income = OpEx - Reimbursements
Required Income = $2,779,640 - $444,278 = $2,335,362

Current Base Rent: $1,342,800
Shortfall: $992,562 annually
```

## Expense Reimbursement Assumptions Tab

### Operating Expense Assumptions

| Item                    | Value |
| ----------------------- | ----- |
| Property Management Fee | 5.00% |
| Expense Growth          | 3.00% |
| Capital Reserves / SF   | $0.25 |

### Property Tax Assumptions

| Item                    | Value       |
| ----------------------- | ----------- |
| Assessed Value          | $11,050,000 |
| Property Tax Rate       | 2.94%       |
| Fixed Charge Assessment | $0.00       |

### Property Tax Growth Rates

| Item                  | Year 1 | Year 2 | Year 3 | Year 4 | Year 5+ |
| --------------------- | ------ | ------ | ------ | ------ | ------- |
| Assessed Value Growth | 3.00%  | 3.00%  | 3.00%  | 3.00%  | 3.00%   |
| Fixed Charge Growth   | 3.00%  | 3.00%  | 3.00%  | 3.00%  | 3.00%   |
| Vacancy               | 15.40% | 12.00% | 8.00%  | 6.00%  | 4.00%   |

## Expense Reimbursement Operating Expense Comparison Table (Without Assumptions)

| Category              | Trailing 12 Months |        | Broker    |        | Comparable |        | Hold Period |        |
| --------------------- | ------------------ | ------ | --------- | ------ | ---------- | ------ | ----------- | ------ |
|                       | Total($)           | PSF/Yr | Total($)  | PSF/Yr | Total($)   | PSF/Yr | Total($)    | PSF/Yr |
| Property Taxes        | 225,000            | 3.46   | 225,000   | 3.46   | 225,000    | 3.46   | 225,000     | 3.46   |
| Total Taxes           | 225,000            | 3.46   | 225,000   | 3.46   | 225,000    | 3.46   | 225,000     | 3.46   |
| Building Insurance    | 97,500             | 1.50   | 97,500    | 1.50   | 97,500     | 1.50   | 97,500      | 1.50   |
| Total Insurance       | 97,500             | 1.50   | 97,500    | 1.50   | 97,500     | 1.50   | 97,500      | 1.50   |
| Electricity & Water   | 162,500            | 2.50   | 162,500   | 2.50   | 162,500    | 2.50   | 162,500     | 2.50   |
| Total Utilities       | 162,500            | 2.50   | 162,500   | 2.50   | 162,500    | 2.50   | 162,500     | 2.50   |
| Repairs & Maintenance | 100,000            | 1.54   | 100,000   | 1.54   | 100,000    | 1.54   | 100,000     | 1.54   |
| Security              | 80,000             | 1.23   | 80,000    | 1.23   | 80,000     | 1.23   | 80,000      | 1.23   |
| Legal                 | 45,000             | 0.69   | 45,000    | 0.69   | 45,000     | 0.69   | 45,000      | 0.69   |
| Landscaping           | 70,000             | 1.08   | 70,000    | 1.08   | 70,000     | 1.08   | 70,000      | 1.08   |
| Total CAM             | 295,000            | 4.54   | 295,000   | 4.54   | 295,000    | 4.54   | 295,000     | 4.54   |
| Property Mgmt. Fee    | 67,140*            | 1.03   | 67,140*   | 1.03   | 67,140*    | 1.03   | 67,140*     | 1.03   |
| Total Mgmt. Fee       | 67,140             | 1.03   | 67,140    | 1.03   | 67,140     | 1.03   | 67,140      | 1.03   |
| Marketing             | 60,000             | 0.92   | 60,000    | 0.92   | 60,000     | 0.92   | 60,000      | 0.92   |
| Cleaning              | 85,000             | 1.31   | 85,000    | 1.31   | 85,000     | 1.31   | 85,000      | 1.31   |
| Total Other Expenses  | 145,000            | 2.23   | 145,000   | 2.23   | 145,000    | 2.23   | 145,000     | 2.23   |
| Capital Reserves      | 16,250**           | 0.25   | 16,250**  | 0.25   | 16,250**   | 0.25   | 16,250**    | 0.25   |
| TOTAL EXPENSES        | 1,008,390          | 15.51  | 1,008,390 | 15.51  | 1,008,390  | 15.51  | 1,008,390   | 15.51  |

*Property Mgmt. Fee = 5% of Effective Gross Income ($1,342,800)
**Capital Reserves = $0.25 × 65,000 SF = $16,250

## Expense Reimbursement Operating Expense Comparison Table (Applied Assumptions)

| Category              | Trailing 12 Months |        | Broker    |        | Comparable |        | Hold Period |        |
| --------------------- | ------------------ | ------ | --------- | ------ | ---------- | ------ | ----------- | ------ |
|                       | Total($)           | PSF/Yr | Total($)  | PSF/Yr | Total($)   | PSF/Yr | Total($)    | PSF/Yr |
| Property Taxes        | 231,750            | 3.57   | 231,750   | 3.57   | 231,750    | 3.57   | 231,750     | 3.57   |
| Total Taxes           | 231,750            | 3.57   | 231,750   | 3.57   | 231,750    | 3.57   | 231,750     | 3.57   |
| Building Insurance    | 100,425            | 1.55   | 100,425   | 1.55   | 100,425    | 1.55   | 100,425     | 1.55   |
| Total Insurance       | 100,425            | 1.55   | 100,425   | 1.55   | 100,425    | 1.55   | 100,425     | 1.55   |
| Electricity & Water   | 167,375            | 2.58   | 167,375   | 2.58   | 167,375    | 2.58   | 167,375     | 2.58   |
| Total Utilities       | 167,375            | 2.58   | 167,375   | 2.58   | 167,375    | 2.58   | 167,375     | 2.58   |
| Repairs & Maintenance | 103,000            | 1.58   | 103,000   | 1.58   | 103,000    | 1.58   | 103,000     | 1.58   |
| Security              | 82,400             | 1.27   | 82,400    | 1.27   | 82,400     | 1.27   | 82,400      | 1.27   |
| Legal                 | 45,675             | 0.70   | 45,675    | 0.70   | 45,675     | 0.70   | 45,675      | 0.70   |
| Landscaping           | 72,100             | 1.11   | 72,100    | 1.11   | 72,100     | 1.11   | 72,100      | 1.11   |
| Total CAM             | 303,175            | 4.66   | 303,175   | 4.66   | 303,175    | 4.66   | 303,175     | 4.66   |
| Property Mgmt. Fee    | 68,769*            | 1.06   | 68,769*   | 1.06   | 68,769*    | 1.06   | 68,769*     | 1.06   |
| Total Mgmt. Fee       | 68,769             | 1.06   | 68,769    | 1.06   | 68,769     | 1.06   | 68,769      | 1.06   |
| Marketing             | 61,800             | 0.95   | 61,800    | 0.95   | 61,800     | 0.95   | 61,800      | 0.95   |
| Cleaning              | 87,550             | 1.35   | 87,550    | 1.35   | 87,550     | 1.35   | 87,550      | 1.35   |
| Total Other Expenses  | 149,350            | 2.30   | 149,350   | 2.30   | 149,350    | 2.30   | 149,350     | 2.30   |
| Capital Reserves      | 16,738**           | 0.26   | 16,738**  | 0.26   | 16,738**   | 0.26   | 16,738**    | 0.26   |
| TOTAL EXPENSES        | 1,037,582          | 15.96  | 1,037,582 | 15.96  | 1,037,582  | 15.96  | 1,037,582   | 15.96  |

*Property Mgmt. Fee = 5% of Adjusted Effective Gross Income with 3% growth
**Capital Reserves = $0.25 × 65,000 SF × 1.03 growth factor

---

## Construction Budget Tab

**Capital Budget**
***The Construction Budget captures all planned capital expenditures over the holding period, including major renovations, tenant improvements, building upgrades, and infrastructure investments that extend beyond normal operating expenses.***

### Capital Budget Table (Example, Building SF = 65,000)

| Item                     | Total($)      | Per SF($) | Month Start(mo) | Month End(mo) | Total Months |
| ------------------------ | ------------- | --------- | --------------- | ------------- | ------------ |
| Renovation               | 325,000       | 5.00      | 6               | 8             | 3            |
| Lobby Upgrade            | 87,500        | 1.35      | 12              | 14            | 3            |
| Roof Repair              | 195,000       | 3.00      | 18              | 22            | 5            |
| HVAC System              | 156,000       | 2.40      | 24              | 26            | 3            |
| Parking Lot              | 260,000       | 4.00      | 36              | 40            | 5            |
| **Contingency***         | 110,000       | 1.69      | N/A             | N/A           | N/A          |
| **Total Capital Budget** | **1,133,500** | **17.44** | N/A             | N/A           | N/A          |

### Calculation Logic

### Per SF ($)

**Formula:** `Per SF = Total($) ÷ Building SF`
**Calculation:** Renovation = 325,000 ÷ 65,000 = **5.00**

### Total Months

**Formula:** `Total Months = Month End – Month Start + 1`
**Calculation:** Renovation = 8 – 6 + 1 = **3 months**

### Contingency Per SF

**Formula:** `Contingency Per SF = Contingency Total ÷ Building SF`
**Calculation:** 110,000 ÷ 65,000 = **1.69**

### Total Capital Budget ($)

**Formula:**: `Σ(Items 1–5) + Contingency`
**Calculation:** 325,000 + 87,500 + 195,000 + 156,000 + 260,000 + 110,000 = **1,133,500**

### Total Capital Budget (Per SF $)

**Formula:** `Total Capital Budget ÷ Building SF`
**Calculation:** 1,133,500 ÷ 65,000 = **17.44**

## Construction Budget - Monthly Spread Example (Building SF = 65,000)

The following table shows the monthly allocation of construction budget items, matching the UI design (Year, Month Count, Date, Items, Contingency, and Total Capital Budget).

| Year                              | 1         | 1         | 1         | 1         | 1         | 1         | 1         | 1          | 1          |
| --------------------------------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- | ---------- | ---------- |
| Month Count                       | 1         | 2         | 3         | 4         | 5         | 6         | 7         | 8          | 9          |
| Date                              | 3/31/2025 | 4/30/2025 | 5/31/2025 | 6/30/2025 | 7/31/2025 | 8/31/2025 | 9/30/2025 | 10/31/2025 | 11/30/2025 |
| Item Name                         |           |           |           |           |           |           |           |            |            |
| Renovation ($325,000, mo 6–8)     | $0        | $0        | $0        | $108,333  | $108,333  | $108,333  | $0        | $0         | $0         |
| Lobby Upgrade ($87,500, mo 12–14) | $0        | $0        | $0        | $0        | $0        | $0        | $0        | $0         | $0         |
| Roof Repair ($195,000, mo 18–22)  | $0        | $0        | $0        | $0        | $0        | $0        | $0        | $0         | $0         |
| HVAC System ($156,000, mo 24–26)  | $0        | $0        | $0        | $0        | $0        | $0        | $0        | $0         | $0         |
| Parking Lot ($260,000, mo 36–40)  | $0        | $0        | $0        | $0        | $0        | $0        | $0        | $0         | $0         |
| **Contingency* ($110,000)**       | $0        | $0        | $0        | $0        | $0        | $0        | $0        | $0         | $0         |
| **Total Capital Budget**          | $0        | $0        | $0        | $108,333  | $108,333  | $108,333  | $0        | $0         | $0         |

### Calculation Notes

- **Renovation** ($325,000, Months 6–8): Spread evenly → $325,000 ÷ 3 = $108,333 per month.
- **Other items** (Lobby, Roof, HVAC, Parking Lot) start later in the timeline (Month 12+), so values are $0 in this window.
- **Contingency**: Not allocated yet (user may choose lump sum or spread logic).
- **Total Capital Budget row** = column sum of all items for that month.

---

## Debt Tab - Loan Analysis and Amortization Schedule

### Debt Types Structure

The Debt tab contains three loan type options:

- **Acquisition Loan** (Primary loan for property purchase)
- **Mezzanine Loan** (Secondary financing, higher interest rate)
- **Refinance Loan** (Future refinancing option)

### Debt Calculations Section

#### Key Metrics Summary

- **Total Purchase Price:** $10,000,000
- **Combined LTV:** 85.0% (Acquisition 75% + Mezzanine 10%)
- **Total Loan Amount:** $8,500,000
- **Year 1 NOI:** $350,660

#### Key Metrics Display

| Metric                  | Value      | Formula                          |
| ----------------------- | ---------- | -------------------------------- |
| **Loan Amount**         | $7,500,000 | LTV% × Property Value            |
| **Going-In Debt Yield** | 4.68%      | Year 1 NOI ÷ Loan Amount         |
| **Going-In DSCR**       | 0.89       | Year 1 NOI ÷ Annual Debt Service |

### 1. Acquisition Loan

### Loan Parameters

| Parameter                          | Input Value | Notes                                |
| ---------------------------------- | ----------- | ------------------------------------ |
| **Loan-To-Value (LTV)**            | 75.0%       | Primary financing                    |
| **Interest Rate**                  | 5.25%       | Annual interest rate                 |
| **Interest Calculation Method**    | 360/30      | Standard commercial loan calculation |
| **I/O Period**                     | 12 months   | Interest-only payment period         |
| **Loan Fee (% of Purchase Price)** | 1.0%        | $100,000 loan origination fee        |
| **Amortization**                   | 300 months  | 25-year amortization schedule        |
| **Term**                           | 120 months  | 10-year loan term                    |

### Acquisition Loan Calculations

#### Acquisition Loan Amount

**Formula:** `Acquisition Loan Amount = Purchase Price × Acquisition LTV`
**Calculation:** $10,000,000 × 0.75 = **$7,500,000**

#### Monthly Interest Rate

**Formula:** `Monthly Rate = Annual Rate ÷ 12`
**Calculation:** 5.25% ÷ 12 = **0.4375%**

#### Monthly Payment (After I/O Period)

**Formula:** `PMT = P × [r(1+r)^n] / [(1+r)^n - 1]`
Where: P = $7,500,000, r = 0.004375, n = 300
**Calculation:** **$45,577** per month

#### Interest-Only Payment

**Formula:** `I/O Payment = Loan Amount × Monthly Rate`
**Calculation:** $7,500,000 × 0.004375 = **$32,813** per month

#### Going-In Debt Yield (Acquisition Only)

**Formula:** `Debt Yield = Year 1 NOI ÷ Acquisition Loan Amount`
**Calculation:** $350,660 ÷ $7,500,000 = **4.68%**

#### Going-In DSCR (Acquisition Only)

**Formula:** `DSCR = Year 1 NOI ÷ Annual Debt Service`
Annual Debt Service = ($32,813 × 12) = $393,756
**Calculation:** $350,660 ÷ $393,756 = **0.89**

### 2. Mezzanine Loan

### Mezzanine Loan Parameters

| Parameter                          | Input Value | Notes                                |
| ---------------------------------- | ----------- | ------------------------------------ |
| **Loan-To-Value (LTV)**            | 10.0%       | Gap financing (85% - 75% = 10%)      |
| **Interest Rate**                  | 8.75%       | Higher rate for subordinate debt     |
| **Interest Calculation Method**    | 360/30      | Standard commercial loan calculation |
| **I/O Period**                     | 60 months   | Interest-only for entire term        |
| **Loan Fee (% of Purchase Price)** | 2.0%        | $20,000 loan origination fee         |
| **Amortization**                   | N/A         | Interest-only loan                   |
| **Term**                           | 60 months   | 5-year loan term                     |

### Mezzanine Loan Calculations

#### Loan Amount

**Formula:** `Mezzanine Loan Amount = Purchase Price × (Mezzanine Total LTV – Acquisition LTV)`
**Calculation:** $10,000,000 × (0.85 – 0.75) = **$1,000,000**

#### Mezzanine Monthly Interest Rate

**Formula:** `Monthly Rate = Annual Rate ÷ 12`
**Calculation:** 8.75% ÷ 12 = **0.7292%**

#### Monthly Payment (Interest-Only)

**Formula:** `I/O Payment = Loan Amount × Monthly Rate`
**Calculation:** $1,000,000 × 0.007292 = **$7,292** per month

#### Annual Debt Service (Mezzanine)

**Calculation:** $7,292 × 12 = **$87,504**

#### Mezzanine Loan Origination Fee

**Formula:** `Fee = Purchase Price × Fee %`
**Calculation:** $10,000,000 × 0.02 = **$20,000**

### 3. Refinance Loan

### Refinance Loan Parameters

| Parameter                       | Input Value | Notes                                |
| ------------------------------- | ----------- | ------------------------------------ |
| **Refinance Month**             | Month 24    | 2 years into hold period             |
| **Refinance Cap Rate**          | 7.0%        | Market cap rate at refinance         |
| **Loan-To-Value (LTV)**         | 80.0%       | Higher LTV for seasoned property     |
| **Interest Rate**               | 4.85%       | Lower rate environment               |
| **Interest Calculation Method** | 360/30      | Standard commercial loan calculation |
| **I/O Period**                  | 24 months   | Interest-only payment period         |
| **Loan Fee (% of Loan Amount)** | 1.5%        | Refinance loan origination fee       |
| **Amortization**                | 360 months  | 30-year amortization schedule        |
| **Term**                        | 120 months  | 10-year loan term                    |

### Refinance Loan Calculations

#### Refinance NOI (Month 24)

**Formula:** `Refinance NOI = Sum of 12 months after refinance month`
**Calculation:** Approx. average Year 3 NOI = **$372,016**

#### Property Value at Refinance

**Formula:** `Property Value = Refinance NOI ÷ Refinance Cap Rate`
**Calculation:** $372,016 ÷ 0.07 = **$5,314,514**

#### Refinance Loan Amount

**Formula:** `Refinance Loan = Property Value × Refinance LTV`
**Calculation:** $5,314,514 × 0.80 = **$4,251,611**

#### Monthly Interest Rate (Refinance)

**Formula:** `Monthly Rate = Annual Rate ÷ 12`
**Calculation:** 4.85% ÷ 12 = **0.4042%**

#### Monthly Payment After I/O Period (Refinance)

**Formula:** `PMT = P × [r(1+r)^n] / [(1+r)^n - 1]`
Where: P = $4,251,611, r = 0.004042, n = 360
**Calculation:** **$22,360** per month

#### Interest-Only Payment (Refinance)

**Formula:** `I/O Payment = Loan Amount × Monthly Rate`
**Calculation:** $4,251,611 × 0.004042 = **$17,191** per month

#### Refinance Loan Origination Fee

**Formula:** `Fee = Loan Amount × Fee %`
**Calculation:** $4,251,611 × 0.015 = **$63,774**

### Combined Debt Analysis Summary

### Total Debt Service (Before Refinance - Months 1-24)

- **Acquisition Loan:** $32,813/month (I/O) + $45,577/month (Amortizing from Month 13)
- **Mezzanine Loan:** $7,292/month (I/O for entire term)

| Months | Acquisition Payment | Mezzanine Payment | Total Monthly Payment |
| ------ | ------------------- | ----------------- | --------------------- |
| 1-12   | $32,813             | $7,292            | $40,105               |
| 13-24  | $45,577             | $7,292            | $52,869               |

### Total Debt Service (After Refinance - Months 25-60)

- **Refinance Loan:** $17,191/month (I/O for 24 months) + $22,360/month (Amortizing thereafter)

| Months | Refinance Payment | Total Monthly Payment |
| ------ | ----------------- | --------------------- |
| 25-48  | $17,191           | $17,191               |
| 49-60  | $22,360           | $22,360               |

### Combined Debt Metrics

#### Combined Going-In Debt Yield (Pre-Refinance)

**Formula:** `Combined Debt Yield = Year 1 NOI ÷ Total Loan Amount`
**Calculation:** $350,660 ÷ $8,500,000 = **4.12%**

#### Combined Going-In DSCR (Months 1-12)

**Formula:** `DSCR = Year 1 NOI ÷ Annual Combined Debt Service`
Annual Combined Debt Service = $40,105 × 12 = $481,260
**Calculation:** $350,660 ÷ $481,260 = **0.73**

#### Combined Going-In DSCR (Months 13-24)

**Formula:** `DSCR = Year 2 NOI ÷ Annual Combined Debt Service`
Annual Combined Debt Service = $52,869 × 12 = $634,428
**Calculation:** $361,180 ÷ $634,428 = **0.57**

## Detailed Monthly Amortization Schedule

### Acquisition Loan - Monthly Schedule (Sample - First 24 Months)

| Month | Date      | Starting Balance | Total Payment | Principal | Interest | Ending Balance |
| ----- | --------- | ---------------- | ------------- | --------- | -------- | -------------- |
| 1     | 3/31/2025 | $7,500,000       | $32,813       | $0        | $32,813  | $7,500,000     |
| 2     | 4/30/2025 | $7,500,000       | $32,813       | $0        | $32,813  | $7,500,000     |
| ...   | ...       | ...              | ...           | ...       | ...      | ...            |
| 13    | 3/31/2026 | $7,500,000       | $45,577       | $12,764   | $32,813  | $7,487,236     |
| 24    | 2/28/2027 | $7,356,488       | $45,577       | $13,393   | $32,184  | $7,343,095     |

### Mezzanine Loan - Monthly Schedule (Months 1-60)

| Month | Date      | Starting Balance | Total Payment | Principal  | Interest | Ending Balance |
| ----- | --------- | ---------------- | ------------- | ---------- | -------- | -------------- |
| 1     | 3/31/2025 | $1,000,000       | $7,292        | $0         | $7,292   | $1,000,000     |
| 2     | 4/30/2025 | $1,000,000       | $7,292        | $0         | $7,292   | $1,000,000     |
| ...   | ...       | ...              | ...           | ...        | ...      | ...            |
| 60    | 2/28/2030 | $1,000,000       | $1,007,292    | $1,000,000 | $7,292   | $0             |

*Note: Mezzanine loan balloon payment of $1,000,000 principal plus final interest payment of $7,292 in Month 60*

### Refinance Loan - Monthly Schedule (Starting Month 25)

| Month | Date      | Starting Balance | Total Payment | Principal | Interest | Ending Balance |
| ----- | --------- | ---------------- | ------------- | --------- | -------- | -------------- |
| 25    | 3/31/2027 | $4,251,611       | $17,191       | $0        | $17,191  | $4,251,611     |
| 26    | 4/30/2027 | $4,251,611       | $17,191       | $0        | $17,191  | $4,251,611     |
| ...   | ...       | ...              | ...           | ...       | ...      | ...            |
| 48    | 2/28/2029 | $4,251,611       | $17,191       | $0        | $17,191  | $4,251,611     |
| 49    | 3/31/2029 | $4,251,611       | $22,360       | $5,169    | $17,191  | $4,246,442     |
| 50    | 4/30/2029 | $4,246,442       | $22,360       | $5,190    | $17,170  | $4,241,252     |
| ...   | ...       | ...              | ...           | ...       | ...      | ...            |

---

## Summary Financial Metrics

### Key Performance Indicators

- **Total Purchase Price:** $10,000,000
- **Price per SF:** $153.85
- **Total Upfront Capital:** $10,500,000
- **Current Annual Base Rent:** $1,342,800
- **Total Operating Expenses:** $992,140
- **Year 1 NOI:** $350,660
- **Year 1 Cap Rate:** 3.51%
- **Current Occupancy:** 84.6%
- **Current Vacancy:** 15.4%
- **WALT:** 3.64 years
- **Combined Loan Amount:** $8,500,000
- **Combined LTV:** 85.0%
- **Combined Debt Yield:** 4.12%
- **Combined DSCR (Months 1-12):** 0.73
- **Combined DSCR (Months 13-24):** 0.57

### Cash Flow Impact Analysis

#### Year 1 Cash Flow (Before Debt Service)

**NOI:** $350,660

#### Year 1 Cash Flow (After Debt Service - Months 1-12)

**Formula:** `Cash Flow = NOI - Annual Debt Service`
**Calculation:** $350,660 - $481,260 = **-$130,600** (negative cash flow)

#### Year 1 Cash Flow (After Debt Service - Months 13-24)

**Formula:** `Cash Flow = Year 2 NOI - Annual Debt Service`
**Calculation:** $361,180 - $634,428 = **-$273,248** (negative cash flow)

#### Post-Refinance Cash Flow (Months 25-48)

**Formula:** `Cash Flow = Year 3 NOI - Annual Refinance Debt Service`
**Calculation:** $372,016 - $200,256 = **$171,760** (positive cash flow)

### Loan Payoff Schedule Summary

| Loan Type   | Original Amount | Payoff Month | Payoff Amount | Method       |
| ----------- | --------------- | ------------ | ------------- | ------------ |
| Acquisition | $7,500,000      | Month 24     | $7,343,095    | Refinance    |
| Mezzanine   | $1,000,000      | Month 60     | $1,000,000    | Balloon      |
| Refinance   | $4,127,771      | Month 144*   | TBD           | Amortization |

*Refinance loan extends beyond hold period
