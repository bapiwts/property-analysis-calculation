# REAL ESTATE PROPERTY ANALYSIS

## 🔵 STEP 1 — PROPERTY OVERVIEW (Sunrise Tech Park)

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

## 🔵 STEP 2 — RENT ROLL TABLE

| Suite | Tenant   | Leased/Spec | Tenant SF | % of Total SF | Lease Start | Initial Lease (mo) | Lease End   | Option 1 (mo) | Option 2 (mo) | Contract End | Term (years) | Remaining Term (years) | In-Place Rent (₹/mo) | Annual Rent (₹) | Annual Rent/SF (₹) | Monthly Rent/SF (₹) | Increase Method | Increase |
| ----- | -------- | ----------- | --------- | ------------- | ----------- | ------------------ | ----------- | ------------- | ------------- | ------------ | ------------ | ---------------------- | -------------------- | --------------- | ------------------ | ------------------- | --------------- | -------- |
| 101   | Infosys  | Leased      | 40,000    | 33.3%         | Jan-01-2022 | 120                | Dec-31-2031 | 60            | 60            | Dec-31-2041  | 10.0         | 6.42                   | 3,200,000            | 38,400,000      | 960                | 80                  | Inc. %/Yr       | 3.5%     |
| 102   | Wipro    | Leased      | 30,000    | 25.0%         | Jul-01-2021 | 96                 | Jun-30-2029 | 36            | 0             | Jun-30-2032  | 8.0          | 3.92                   | 2,100,000            | 25,200,000      | 840                | 70                  | Inc. $/Yr       | 150,000  |
| 103   | TCS      | Leased      | 25,000    | 20.8%         | Sep-01-2020 | 120                | Aug-31-2030 | 60            | 0             | Aug-31-2035  | 10.0         | 5.08                   | 2,000,000            | 24,000,000      | 960                | 80                  | Detail          | —        |
| 104   | Vodafone | Leased      | 25,000    | 20.8%         | Jan-01-2024 | 60                 | Dec-31-2028 | 0             | 0             | Dec-31-2028  | 5.0          | 3.42                   | 1,750,000            | 21,000,000      | 840                | 70                  | Flat            | 0%       |

## 🔵 STEP 3 — RENT DETAIL TABLE

### We apply

- Infosys → +3.5% per year
- Wipro → +₹150,000 per year
- TCS → Detailed schedule (slightly higher early years)
- Vodafone → 0% (Flat rent)

### Assumption

- Year 1 = 2026, because Analysis Date = Aug 29, 2025

| Suite | Tenant   | End Year | Year 1        | Year 2     | Year 3     | Year 4     | Year 5     | Year 6     | Year 7     | Year 8 | Year 9 | Year 10+ |
| ----- | -------- | -------- | ------------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ------ | ------ | -------- |
| 101   | Infosys  | 2031     | 38,400,000    | 39,744,000 | 41,135,040 | 42,574,766 | 44,064,882 | 45,607,163 | 47,203,415 | N/A    | N/A    | N/A      |
| 102   | Wipro    | 2029     | 25,200,000    | 25,350,000 | 25,500,000 | 25,650,000 | 25,800,000 | 25,950,000 | N/A        | N/A    | N/A    | N/A      |
| 103   | TCS      | 2030     | 24,000,000    | 24,960,000 | 25,958,400 | 26,996,736 | 28,076,605 | 29,199,669 | 30,367,656 | N/A    | N/A    | N/A      |
| 104   | Vodafone | 2028     | 21,000,000    | 21,000,000 | 21,000,000 | 21,000,000 | 21,000,000 | N/A        | N/A        | N/A    | N/A    | N/A      |

## 🔵 STEP 4 —  UNPAID LEASING COSTS (ULC)

### Assumptions for Sunrise Tech Park

- Only newer leases normally have ULC
- So we include for Infosys (2022), Vodafone (2024)
- Wipro & TCS have older stabilized leases → No ULC

| Suite | Tenant   | Total TI (₹) | Total LC (₹) | Concessions (₹) |
| ----- | -------- | ------------ | ------------ | --------------- |
| 101   | Infosys  | 14,000,000   | 1,152,000    | 6,400,000       |
| 102   | Wipro    | 0            | 0            | 0               |
| 103   | TCS      | 0            | 0            | 0               |
| 104   | Vodafone | 10,000,000   | 420,000      | 1,750,000       |

## 🔵 STEP 5 —  FUTURE TENANT ASSUMPTIONS (FTA)

### Assumptions

- Used for post-expiry modeling
- Applies to lease rollover years
- Market rent values based on Sunrise Tech Park rents
- Growth: 3% annual market rent growth

| Suite | Tenant        |         | New Tenant Assumptions |           |         | Renewal Tenant Assumptions |           | Market Rent at Aug 2025 |          |          | Market Rent Growth % |          |           | Reimbursement Type |          |     | Modified Gross |      |       |          |     | Base Year Stop |      |       |             |          | Base Year Stop Amount |           |           | % Pro Rata OpEx | Renewal Prob | Lease Term | Downtime |
| ----- | ------------- | ------- | ---------------------- | --------- | ------- | -------------------------- | --------- | ----------------------- | -------- | -------- | -------------------- | -------- | --------- | ------------------ | -------- | --- | -------------- | ---- | ----- | -------- | --- | -------------- | ---- | ----- | ----------- | -------- | --------------------- | --------- | --------  | --------------- | ------------ | ---------- | -------- |
|       |               | TI($)   | LC(%)                  | Free Rent | TI($)   | LC(%)                      | Free Rent | ($)                     | Month 12 | Month 24 | Month 36             | Month 48 | Month 60+ |                    | Prop Tax | Ins | CAM            | Mgmt | Utils | Prop Tax | Ins | CAM            | Mgmt | Utils | Prop Tax($) | Ins($)   | CAM($)                | Mgmt($)   | Utils($)  | (%)             | (%)          | (months)   | (months) |
| 101   | Infosys       | 350     | 3%                     | 2         | 150     | 2%                         | 1         | 92                      | 94.76    | 97.60    | 100.52               | 103.53   | 106.63    | Modified Gross     | Yes      | Yes | Yes            | Yes  | Yes   | Yes      | Yes | Yes            | Yes  | Yes   | 1,120,000   | 480,000  | 1,400,000             | 400,000   | 320,000   | 33.30%          | 70%          | 60         | 3        |
| 102   | Wipro         | 300     | 3%                     | 1         | 120     | 2%                         | 1         | 82                      | 84.46    | 87.00    | 89.61                | 92.30    | 95.07     | Modified Gross     | Yes      | Yes | Yes            | Yes  | Yes   | Yes      | Yes | Yes            | Yes  | Yes   | 720,000     | 300,000  | 960,000               | 240,000   | 210,000   | 25.00%          | 65%          | 48         | 3        |
| 103   | TCS           | 320     | 3%                     | 2         | 150     | 2%                         | 1         | 86                      | 88.58    | 91.24    | 93.98                | 96.80    | 99.70     | Modified Gross     | Yes      | Yes | Yes            | Yes  | Yes   | Yes      | Yes | Yes            | Yes  | Yes   | 650,000     | 275,000  | 825,000               | 225,000   | 200,000   | 20.80%          | 60%          | 60         | 3        |
| 104   | Vodafone      | 280     | 2%                     | 1         | 100     | 2%                         | 0         | 74                      | 76.22    | 78.51    | 80.86                | 83.28    | 85.78     | Modified Gross     | Yes      | Yes | Yes            | Yes  | Yes   | Yes      | Yes | Yes            | Yes  | Yes   | 550,000     | 225,000  | 750,000               | 200,000   | 150,000   | 20.80%          | 55%          | 60         | 3        |
