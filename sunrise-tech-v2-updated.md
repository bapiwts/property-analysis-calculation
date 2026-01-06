# REAL ESTATE PROPERTY ANALYSIS - Sunrise Tech Park (V2) - UPDATED STEPS ONLY

## STEP 6 OPERATING EXPENSES (Final v2 - WITH ITERATIVE EGI)

This STEP 6 incorporates iterative Effective Gross Income (EGI) calculation to properly handle the circular dependency between Management Fee and EGI.

### Key Enhancements Implemented

- Per-expense **Gross-Up %** (no global gross-up)
- **Management Fee calculated as % of Final EGI using iterative calculation**
- Clear separation of **recoverable vs non-recoverable** expenses
- Explicit **gross-up application rules**
- **Iterative loop** to resolve circular dependency between EGI and Management Fee

## Gross-Up for Expense Reimbursement

### Gross-Up Rule

```plan
Gross-Up is applied only when Actual Occupancy is below the selected Gross-Up %.
If Actual Occupancy is equal to or greater than the Gross-Up %, no gross-up is applied.
```

### Gross-Up Formula

```plan
If Actual Occupancy ≥ Gross-Up %:
    GrossUpFactor = 1.00
Else:
    GrossUpFactor = Gross-Up % ÷ Actual Occupancy %

Building Square Feet (SF): 120,000
Actual Occupancy: 100%

Since Actual Occupancy is 100%, no gross-up adjustment applies to any expense line in the current period.
```

### Expenses Categories

- taxes
- insurance
- utilities
- management
- cam (Common Area Maintenance)

### Operating Expenses Table

> **NEW ADDITION:** Each expense now has **its own Gross-Up %** instead of one global percentage.
> **NEW OPTION:** Management Fee should be **% of EGI** instead of **% of Base Rent/SF**.

| Name                  | Category   | How Input | Amount Type | Amount Value | Frequency | Fixed (%) | Recoverable (%) | Apply To Tenants | Start Date     | Custom Date | Inflation Type | Custom Inflation (%) | Gross-Up % |
| --------------------- | ---------- | --------- | ----------- | ------------ | --------- | --------- | --------------- | ---------------- | -------------- | ----------- | -------------- | -------------------- | ---------- |
| Property Taxes        | taxes      | Amount    | fixed       | 2,200,000    | annually  | 0         | 100             | Yes              | Analysis Begin | —           | cpi            | —                    | 100%       |
| Building Insurance    | insurance  | Amount    | fixed       | 950,000      | annually  | 0         | 100             | Yes              | Analysis Begin | —           | expense        | —                    | 100%       |
| Electricity & Water   | utilities  | $/SF      | fixed       | 22           | monthly   | 20        | 80              | Yes              | Analysis Begin | —           | cpi            | —                    | 95%        |
| Property Mgmt Fees    | management | % EGI     | fixed       | 3.0%         | monthly   | 0         | 100             | Yes              | Analysis Begin | —           | custom         | 2.5                  | —          |
| Repairs & Maintenance | cam        | Amount    | custom      | 1,200,000    | detail    | 10        | 90              | Yes              | Custom Date    | 2025-09-01  | custom         | 3.0                  | 90%        |
| Security              | cam        | Amount    | fixed       | 900,000      | annually  | 25        | 75              | Yes              | Analysis Begin | —           | expense        | —                    | 85%        |
| Marketing             | management | Amount    | custom      | 850,000      | detail    | 100       | 0               | No               | Analysis Begin | —           | cpi            | —                    | 0%         |
| Legal                 | management | Amount    | custom      | 500,000      | detail    | 50        | 50              | Yes              | Custom Date    | 2025-09-01  | custom         | 1.5                  | 50%        |
| Landscaping           | cam        | Amount    | fixed       | 600,000      | annually  | 0         | 100             | Yes              | Analysis Begin | —           | expense        | —                    | 95%        |
| Cleaning              | cam        | Amount    | fixed       | 750,000      | annually  | 100       | 0               | No               | Analysis Begin | —           | expense        | —                    | 0%         |

### Iterative EGI Calculation( Resolving Circular Dependency)

To properly calculate Management Fee as "% of EGI" when EGI includes Expense Reimbursements that contain Management Fee, we must use an **iterative calculation** approach.

#### Step 1: Calculate Base EGI (No Reimbursements, No Management Fee)

```plan
Base EGI =
Contractual Rent
+ Turnover / Absorption Rent
+ Market Leasing Income
+ Other Income
− Vacancy Loss
− Credit Loss

Base EGI = $108,600,000 + $0 + $0 + $0 - $0 - $0 = $108,600,000
```

#### Step 2: Initialize Iterative Loop

```plan
Iteration 0:
Initial Guess: EGI = Base EGI = $108,600,000
Management Fee = $0 (not yet calculated)
Max Iterations = 100
Convergence Threshold = $1.00 (stop when change < $1)
```

#### Step 3: Iterative Calculation Loop

**Iteration 1:**

```plan
Current EGI Estimate = $108,600,000

Step 3.1: Calculate Management Fee
Management Fee = Current EGI × 3.0%
Management Fee = $108,600,000 × 0.03 = $3,258,000

Step 3.2: Calculate All Operating Expenses (including Management Fee)
Property Taxes:        $2,200,000
Building Insurance:    $950,000
Electricity & Water:   $31,680,000
Property Mgmt Fees:    $3,258,000  ← newly calculated
Repairs & Maintenance: $1,200,000
Security:              $900,000
Marketing:             $850,000
Legal:                 $500,000
Landscaping:           $600,000
Cleaning:              $750,000
Total OpEx:            $42,888,000

Step 3.3: Calculate Expense Reimbursements (from STEP 8)
Infosys (FSG):     $0
Wipro:             $1,281,600
TCS:               $2,066,250
Vodafone:          $860,156
Total Reimbursements: $4,208,006

Step 3.4: Calculate New EGI
New EGI = Base EGI + Expense Reimbursements
New EGI = $108,600,000 + $4,208,006 = $112,808,006

Step 3.5: Check Convergence
Change = |$112,808,006 - $108,600,000| = $4,208,006
Change > $1.00 → Continue iterating
```

**Iteration 2:**

```plan
Current EGI Estimate = $112,808,006

Step 3.1: Recalculate Management Fee
Management Fee = $112,808,006 × 3.0% = $3,384,240

Step 3.2: Recalculate Operating Expenses
Property Taxes:        $2,200,000
Building Insurance:    $950,000
Electricity & Water:   $31,680,000
Property Mgmt Fees:    $3,384,240  ← updated
Repairs & Maintenance: $1,200,000
Security:              $900,000
Marketing:             $850,000
Legal:                 $500,000
Landscaping:           $600,000
Cleaning:              $750,000
Total OpEx:            $43,014,240

Step 3.3: Recalculate Expense Reimbursements
Wipro (includes higher mgmt fee):
  Core Operating = (Taxes + Insurance + Mgmt) × 25% × 80%
  = ($2,200,000 + $950,000 + $3,384,240) × 25% × 80%
  = $6,534,240 × 25% × 80% = $1,306,848

TCS: $2,066,250 (Base Year Stop - no change)

Vodafone (includes higher mgmt fee is excluded):
  $860,156 (no mgmt fee in selected expenses)

Total Reimbursements: $1,306,848 + $2,066,250 + $860,156 = $4,233,254

Step 3.4: Calculate New EGI
New EGI = $108,600,000 + $4,233,254 = $112,833,254

Step 3.5: Check Convergence
Change = |$112,833,254 - $112,808,006| = $25,248
Change > $1.00 → Continue iterating
```

**Iteration 3:**

```plan
Current EGI Estimate = $112,833,254

Management Fee = $112,833,254 × 3.0% = $3,384,998
Total OpEx = $43,014,998

Wipro Reimbursement:
  Core Operating = ($2,200,000 + $950,000 + $3,384,998) × 25% × 80%
  = $6,534,998 × 25% × 80% = $1,306,999

Total Reimbursements: $1,306,999 + $2,066,250 + $860,156 = $4,233,405

New EGI = $108,600,000 + $4,233,405 = $112,833,405

Change = |$112,833,405 - $112,833,254| = $151
Change > $1.00 → Continue iterating
```

**Iteration 4:**

```plan
Current EGI Estimate = $112,833,405

Management Fee = $112,833,405 × 3.0% = $3,385,002
Total OpEx = $43,015,002

Wipro Reimbursement:
  Core Operating = ($2,200,000 + $950,000 + $3,385,002) × 25% × 80%
  = $6,535,002 × 25% × 80% = $1,307,000

Total Reimbursements: $1,307,000 + $2,066,250 + $860,156 = $4,233,406

New EGI = $108,600,000 + $4,233,406 = $112,833,406

Change = |$112,833,406 - $112,833,405| = $1
Change > $1.00 → Continue iterating (barely)
```

**Iteration 5:**

```plan
Current EGI Estimate = $112,833,406

Management Fee = $112,833,406 × 3.0% = $3,385,002 (rounded)
Total OpEx = $43,015,002

Wipro Reimbursement: $1,307,000
Total Reimbursements: $4,233,406

New EGI = $108,600,000 + $4,233,406 = $112,833,406

Change = |$112,833,406 - $112,833,406| = $0
Change < $1.00 → CONVERGED ✓
```

#### Step 4: Final Converged Values

```plan
CONVERGED AFTER 5 ITERATIONS:

Final EGI (Effective Gross Income):     $112,833,406
Base EGI (Before Reimbursements):       $108,600,000
Total Expense Reimbursements:           $4,233,406

Final Management Fee:                   $3,385,002
Final Total Operating Expenses:         $43,015,002
```

### Annual Operating Expense Calculations

#### With Gross-Up (No Gross-Up Applied - 100% Occupancy)

| Expense               | Annual Amount ($) | Gross-Up % | Recoverable % | Apply To Tenants | Recoverable Amount ($) |
| --------------------- | ----------------- | ---------- | ------------- | ---------------- | ---------------------- |
| Property Taxes        | 2,200,000         | 100%       | 100%          | Yes              | 2,200,000              |
| Building Insurance    | 950,000           | 100%       | 100%          | Yes              | 950,000                |
| Electricity & Water   | 31,680,000        | 95%        | 80%           | Yes              | 25,344,000             |
| Property Mgmt Fees    | 3,385,002         | -          | 100%          | Yes              | 3,385,002              |
| Repairs & Maintenance | 1,200,000         | 90%        | 90%           | Yes              | 1,080,000              |
| Security              | 900,000           | 85%        | 75%           | Yes              | 675,000                |
| Marketing             | 850,000           | 0%         | 0%            | No               | 0                      |
| Legal                 | 500,000           | 50%        | 50%           | Yes              | 250,000                |
| Landscaping           | 600,000           | 95%        | 100%          | Yes              | 600,000                |
| Cleaning              | 750,000           | 0%         | 0%            | No               | 0                      |
| **TOTAL**             | **$43,015,002**   |            |               |                  | **$34,484,002**        |

### Totals & Per-Square Feet (SF) Metrics

- Total Operating Expenses (annual): **$43,015,002** *(sum of final annual amounts)*
- Operating Expenses / SF: $43,015,002 ÷ 120,000 = **$358.46 / SF**
- Total Recoverable Operating Expenses (annual): **$34,484,002**
- Recoverable / SF: $34,484,002 ÷ 120,000 = **$287.37 / SF**

### Comparison: Before vs After Iterative Calculation

| Metric                        | Before (Simple) | After (Iterative) | Difference |
| ----------------------------- | --------------- | ----------------- | ---------- |
| Management Fee                | $3,258,000      | $3,385,002        | +$127,002  |
| Total Operating Expenses      | $42,888,000     | $43,015,002       | +$127,002  |
| Total Expense Reimbursements  | $4,208,006      | $4,233,406        | +$25,400   |
| Final EGI                     | $112,808,006    | $112,833,406      | +$25,400   |

**Key Insight:** The iterative calculation properly accounts for the circular dependency, resulting in a higher Management Fee ($127,002 more) and slightly higher Expense Reimbursements ($25,400 more) that stabilize after 5 iterations.

---

## STEP 8 OPERATING EXPENSES REIMBURSEMENT (per tenant) - WITH UPDATED VALUES

| Suite   | Tenant       | Detail (Y/N) | Reimbursement Type | Expense Groups |          |     | Modified Gross |      |       |          |     | Base Year Stop |      |       |              |         | Base Year Stop Amount |          |          | Pro Rata   | Recovery % | CAM Cap | CAM Annual |           |                               | Reimbursement Years 1-5 |           |           |
| ------- | ------------ | ------------ | ------------------ | -------------- | -------- | --- | -------------- | ---- | ----- | -------- | --- | -------------- | ---- | ----- | ------------ | ------- | --------------------- | -------- | -------- | ---------- | ---------- | ------- | ---------- | --------- | ----------------------------- | ----------------------- | --------- | --------- |
|         |              |              |                    |                | Prop Tax | Ins | CAM            | Mgmt | Utils | Prop Tax | Ins | CAM            | Mgmt | Utils | Prop Tax ($) | Ins ($) | CAM ($)               | Mgmt ($) | Utils($) |            |            |         |            |           |                               |                         |           |           |
| **101** | **Infosys**  | Yes          | Full Service Gross | —              | —        | —   | —              | —    | —     | —        | —   | —              | —    | —     | —            | —       | —                     | —        | —        | **33.33%** | 0%         | None    | —          | —         | All expenses included in rent |                         | —         | —         |
| **102** | **Wipro**    | Yes          | None               | Core Operating | —        | —   | —              | —    | —     | —        | —   | —              | —    | —     | 550,000      | 237,500 | —                     | 846,250  | —        | **25.00%** | 80%        | None    | —          | 1,307,000 | 1,342,200                     | 1,378,415               | 1,415,685 | 1,454,042 |
| **103** | **TCS**      | Yes          | Base Year Stop     | —              | No       | No  | No             | No   | No    | Yes      | Yes | Yes            | Yes  | Yes   | 650,000      | 275,000 | 825,000               | 225,000  | 200,000  | **20.83%** | 95%        | Cum     | 4%         | 2,066,250 | 2,097,600                     | 2,130,204               | 2,164,112 | 2,199,377 |
| **104** | **Vodafone** | Yes          | Modified Gross     | —              | Yes      | Yes | Yes            | No   | No    | —        | —   | —              | —    | —     | 458,333      | 197,917 | 5,280,000             | —        | —        | **20.83%** | 75%        | None    | —          | 860,156   | 885,961                       | 912,540                 | 939,916   | 968,114   |

### UPDATED CALCULATIONS FOR WIPRO (Suite 102)

**Configuration:**

- Pro Rata: 30,000 ÷ 120,000 = 25.00%
- Expense Group: Core Operating Expenses
- Recovery %: 80% (of pro-rata share)
- CAM Cap: None
- Group = Core Operating (Taxes $2,200,000; Insurance $950,000; **Mgmt $3,385,002**)

**Core Operating Expenses Breakdown:**

| Expense            | Annual Amount  | Wipro's Share (25%) |
| ------------------ | -------------- | ------------------- |
| Property Taxes     | $2,200,000     | $550,000            |
| Building Insurance | $950,000       | $237,500            |
| Property Mgmt Fees | **$3,385,002** | **$846,250**        |
| **Total**          | **$6,535,002** | **$1,633,750**      |

**Year 1 Calculation**
Formula: Pro-Rata Share × Recovery %
Calculation: $1,633,750 × 0.80 = **$1,307,000**

| Year | Taxes (CPI 3%) | Insurance (Exp 2.5%) | Mgmt (Custom 2.5%) | Total Pro-Rata | Recovery (80%) |
| ---- | -------------- | -------------------- | ------------------ | -------------- | -------------- |
| 1    | $550,000       | $237,500             | $846,250           | $1,633,750     | **$1,307,000** |
| 2    | $566,500       | $243,438             | $867,406           | $1,677,344     | **$1,341,875** |
| 3    | $583,495       | $249,523             | $889,091           | $1,722,109     | **$1,377,687** |
| 4    | $600,999       | $255,761             | $911,319           | $1,768,079     | **$1,414,463** |
| 5    | $619,029       | $262,155             | $934,102           | $1,815,286     | **$1,452,229** |

### Per-Tenant Reimbursement Summary (UPDATED)

| Suite   | Tenant       | Reimbursement Type | Pro Rata   | Recovery % | Year 1 Reimbursement | Year 2     | Year 3     | Year 4     | Year 5     |
| ------- | ------------ | ------------------ | ---------- | ---------- | -------------------- | ---------- | ---------- | ---------- | ---------- |
| **101** | **Infosys**  | Full Service Gross | **33.33%** | 0%         | $0                   | $0         | $0         | $0         | $0         |
| **102** | **Wipro**    | Core Operating     | **25.00%** | 80%        | **$1,307,000**       | $1,341,875 | $1,377,687 | $1,414,463 | $1,452,229 |
| **103** | **TCS**      | Base Year Stop     | **20.83%** | 95%        | $2,066,250           | $2,097,600 | $2,130,204 | $2,164,112 | $2,199,377 |
| **104** | **Vodafone** | Modified Gross     | **20.83%** | 75%        | $860,156             | $885,961   | $912,540   | $939,916   | $968,114   |
| **TOTAL YEAR 1 REIMBURSEMENTS** | |         |            |            | **$4,233,406**       |            |            |            |            |

### Final EGI Summary

```plan
Final EGI =
Base EGI (Contractual Rent)
+ Total Tenant Expense Reimbursements

Final EGI = $108,600,000 + $4,233,406 = $112,833,406
```

---

## STEP 9 EXPENSES REIMBURSEMENT ASSUMPTIONS - UPDATED

### A. Operating Expense Assumptions

**User Input Table:**

| Item                                   | Value | Notes                                        |
| -------------------------------------- | ----- | -------------------------------------------- |
| Property Management Fee (%)            | 3.0%  | % of Final EGI (calculated iteratively)      |
| Expense Growth (%)                     | 2.5%  | General expense inflation                    |
| Capital Reserves ($/Square Feet - SF)  | 15.00 | Annual capital reserve per square feet (SF)  |

**Calculations**
Property Management Fee Amount:

```plan
Formula: (Management Fee % / 100) × Final EGI (after iteration)
Calculation: (3.0 / 100) × $112,833,406 = $3,385,002/year
```

Capital Reserves Amount:

```plan
Formula: Capital Reserves per SF × Building Square Footage
Calculation: $15.00 × 120,000 = $1,800,000/year
```

### B. Property Tax Assumptions

| Item                                 | Value       | Notes                    |
| ------------------------------------ | ----------- | ------------------------ |
| Assessed Value ($)                   | 125,000,000 | Tax assessment value     |
| Property Tax Rate (%)                | 1.76%       | Annual tax rate          |
| Fixed Charge Assessment ($)          | 0           | Additional fixed charges |

**Calculations:**

```plan
Year 1 Property Tax:
Formula: (Assessed Value × Tax Rate / 100) + Fixed Charge
Calculation: ($125,000,000 × 1.76 / 100) + $0 = $2,200,000
```

### C. Property Tax Growth Rates

**User Input Table:**

| Item                      | Year 1 | Year 2 | Year 3 | Year 4 | Year 5+ |
| ------------------------- | ------ | ------ | ------ | ------ | ------- |
| Assessed Value Growth (%) | 3.0%   | 3.0%   | 3.0%   | 3.0%   | 3.0%    |
| Fixed Charge Growth (%)   | 0.0%   | 0.0%   | 0.0%   | 0.0%   | 0.0%    |
| Vacancy (%)               | 0.0%   | 0.0%   | 0.0%   | 5.0%   | 8.0%    |

### Expense Reimbursement Operating Expense Comparison Table (Without Assumptions)

| Category                  | Trailing 12 ($) | PSF/Yr     | Broker ($)     | PSF/Yr     | Comparable ($) | PSF/Yr     | Hold Period ($) | PSF/Yr     |
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
| **Property Mgmt. Fee**    | **3,385,002**   | **28.21**  | **3,385,002**  | **28.21**  | **3,385,002**  | **28.21**  | **3,385,002**   | **28.21**  |
| **Total Mgmt. Fee**       | **3,385,002**   | **28.21**  | **3,385,002**  | **28.21**  | **3,385,002**  | **28.21**  | **3,385,002**   | **28.21**  |
| **Marketing**             | 850,000         | 7.08       | 850,000        | 7.08       | 850,000        | 7.08       | 850,000         | 7.08       |
| **Cleaning**              | 750,000         | 6.25       | 750,000        | 6.25       | 750,000        | 6.25       | 750,000         | 6.25       |
| **Total Other Expenses**  | 1,600,000       | 13.33      | 1,600,000      | 13.33      | 1,600,000      | 13.33      | 1,600,000       | 13.33      |
| **Capital Reserves**      | 1,800,000       | 15.00      | 1,800,000      | 15.00      | 1,800,000      | 15.00      | 1,800,000       | 15.00      |
| **TOTAL EXPENSES**        | **45,815,002**  | **381.79** | **45,815,002** | **381.79** | **45,815,002** | **381.79** | **45,815,002**  | **381.79** |

### Expense Reimbursement Operating Expense Comparison Table (Applied Assumptions)

| Category                 | Trailing 12 ($) | PSF/Yr | Broker ($) | PSF/Yr | Comparable ($) | PSF/Yr | Hold Period ($) | PSF/Yr |
| ------------------------ | --------------: | -----: | ---------: | -----: | -------------: | -----: | --------------: | -----: |
| Property Taxes           |       2,200,000 |  18.33 |  2,200,000 |  18.33 |      2,200,000 |  18.33 |       2,266,000 |  18.88 |
| Total Taxes              |       2,200,000 |  18.33 |  2,200,000 |  18.33 |      2,200,000 |  18.33 |       2,266,000 |  18.88 |
| Building Insurance       |         950,000 |   7.92 |    950,000 |   7.92 |        950,000 |   7.92 |         973,750 |   8.11 |
| Total Insurance          |         950,000 |   7.92 |    950,000 |   7.92 |        950,000 |   7.92 |         973,750 |   8.11 |
| Electricity & Water      |      31,680,000 | 264.00 | 31,680,000 | 264.00 |     31,680,000 | 264.00 |      31,680,000 | 264.00 |
| Total Utilities          |      31,680,000 | 264.00 | 31,680,000 | 264.00 |     31,680,000 | 264.00 |      31,680,000 | 264.00 |
| Repairs & Maintenance    |       1,200,000 |  10.00 |            |        |                |        |                 |        |
