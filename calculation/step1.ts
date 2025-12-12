/**
 * STEP 1 - PROPERTY OVERVIEW CALCULATIONS
 * Sunrise Tech Park - Real Estate Financial Analysis
 */

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

interface PropertyOverviewInput {
  propertyName: string;
  addressLine1: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  yearBuilt: number;
  landAcres: number;
  buildingSquareFootage: number;
  numberOfStories: number;
  propertyType: string;
  uncoveredParkingSpaces: number;
  coveredParkingSpaces: number;
  purchasePrice: number;
  closingCostsPercent: number;
  upfrontWorkingCapital: number;
  analysisDate: string;
  costOfSalePercent: number;
  exitCapRate: number;
  holdPeriodMonths: number;
  acquisitionFeePercent: number;
  assetManagementFeePercent: number;
  constructionMgmtFeePercent: number;
  dispositionFeePercent: number;
}

interface PropertyOverviewOutput {
  // Input values
  propertyName: string;
  addressLine1: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  yearBuilt: number;
  landAcres: number;
  buildingSquareFootage: number;
  numberOfStories: number;
  propertyType: string;
  uncoveredParkingSpaces: number;
  coveredParkingSpaces: number;
  purchasePrice: number;
  closingCostsPercent: number;
  upfrontWorkingCapital: number;
  analysisDate: string;
  costOfSalePercent: number;
  exitCapRate: number;
  holdPeriodMonths: number;
  acquisitionFeePercent: number;
  assetManagementFeePercent: number;
  constructionMgmtFeePercent: number;
  dispositionFeePercent: number;

  // Calculated values
  landSquareFootage: number;
  purchasePricePerSF: number;
  totalParkingSpaces: number;
  totalSpacesPer1000SF: number;
  closingCostsAmount: number;
  acquisitionFeeAmount: number;
  totalUpfrontAndPlannedCapital: number;
  netLeasableArea: number;
  buildingEfficiency: number;
}

// ============================================================================
// CALCULATION FUNCTIONS
// ============================================================================

/**
 * Calculate Land Square Footage from acres
 * Formula: Land Acres × 43,560
 */
function calculateLandSquareFootage(landAcres: number): number {
  const SQFT_PER_ACRE = 43560;
  return landAcres * SQFT_PER_ACRE;
}

/**
 * Calculate Purchase Price per Square Foot
 * Formula: Purchase Price ÷ Building Square Footage
 */
function calculatePurchasePricePerSF(purchasePrice: number, buildingSquareFootage: number): number {
  if (buildingSquareFootage === 0) {
    throw new Error("Building square footage cannot be zero");
  }
  return purchasePrice / buildingSquareFootage;
}

/**
 * Calculate Total Parking Spaces
 * Formula: Uncovered Parking Spaces + Covered Parking Spaces
 */
function calculateTotalParkingSpaces(uncoveredSpaces: number, coveredSpaces: number): number {
  return uncoveredSpaces + coveredSpaces;
}

/**
 * Calculate Total Parking Spaces per 1,000 SF
 * Formula: Total Parking Spaces ÷ (Building Square Footage ÷ 1,000)
 */
function calculateTotalSpacesPer1000SF(totalParkingSpaces: number, buildingSquareFootage: number): number {
  if (buildingSquareFootage === 0) {
    throw new Error("Building square footage cannot be zero");
  }
  return totalParkingSpaces / (buildingSquareFootage / 1000);
}

/**
 * Calculate Closing Costs Amount
 * Formula: Purchase Price × Closing Costs %
 */
function calculateClosingCostsAmount(purchasePrice: number, closingCostsPercent: number): number {
  return purchasePrice * (closingCostsPercent / 100);
}

/**
 * Calculate Acquisition Fee Amount
 * Formula: Purchase Price × Acquisition Fee %
 */
function calculateAcquisitionFeeAmount(purchasePrice: number, acquisitionFeePercent: number): number {
  return purchasePrice * (acquisitionFeePercent / 100);
}

/**
 * Calculate Total Upfront & Planned Capital
 * Formula: Purchase Price + Closing Costs + Upfront Working Capital + Acquisition Fee
 */
function calculateTotalUpfrontAndPlannedCapital(purchasePrice: number, closingCostsAmount: number, upfrontWorkingCapital: number, acquisitionFeeAmount: number): number {
  return purchasePrice + closingCostsAmount + upfrontWorkingCapital + acquisitionFeeAmount;
}

/**
 * Calculate Net Leasable Area (NLA)
 * Note: This assumes 100% building efficiency (NLA = BSF)
 * This will be verified in Step 2 with the Rent Roll
 */
function calculateNetLeasableArea(buildingSquareFootage: number): number {
  // Assuming 100% efficiency for now
  return buildingSquareFootage;
}

/**
 * Calculate Building Efficiency (preliminary)
 * Formula: Net Leasable Area ÷ Building Square Footage
 * Note: This assumes 100% efficiency until verified with Rent Roll in Step 2
 */
function calculateBuildingEfficiency(netLeasableArea: number, buildingSquareFootage: number): number {
  if (buildingSquareFootage === 0) {
    throw new Error("Building square footage cannot be zero");
  }
  return (netLeasableArea / buildingSquareFootage) * 100; // Returns as percentage
}

// ============================================================================
// MAIN CALCULATION FUNCTION
// ============================================================================

/**
 * Calculate all Property Overview metrics
 */
const calculatePropertyOverview = (input: PropertyOverviewInput): PropertyOverviewOutput => {
  // Calculate derived values
  const landSquareFootage = calculateLandSquareFootage(input.landAcres);
  const purchasePricePerSF = calculatePurchasePricePerSF(input.purchasePrice, input.buildingSquareFootage);
  const totalParkingSpaces = calculateTotalParkingSpaces(input.uncoveredParkingSpaces, input.coveredParkingSpaces);
  const totalSpacesPer1000SF = calculateTotalSpacesPer1000SF(totalParkingSpaces, input.buildingSquareFootage);
  const closingCostsAmount = calculateClosingCostsAmount(input.purchasePrice, input.closingCostsPercent);
  const acquisitionFeeAmount = calculateAcquisitionFeeAmount(input.purchasePrice, input.acquisitionFeePercent);
  const totalUpfrontAndPlannedCapital = calculateTotalUpfrontAndPlannedCapital(input.purchasePrice, closingCostsAmount, input.upfrontWorkingCapital, acquisitionFeeAmount);
  const netLeasableArea = calculateNetLeasableArea(input.buildingSquareFootage);
  const buildingEfficiency = calculateBuildingEfficiency(netLeasableArea, input.buildingSquareFootage);

  return {
    // Input values (pass through)
    ...input,

    // Calculated values
    landSquareFootage,
    purchasePricePerSF,
    totalParkingSpaces,
    totalSpacesPer1000SF,
    closingCostsAmount,
    acquisitionFeeAmount,
    totalUpfrontAndPlannedCapital,
    netLeasableArea,
    buildingEfficiency,
  };
};

// ============================================================================
// EXAMPLE USAGE - SUNRISE TECH PARK
// ============================================================================

const sunriseTechParkInput: PropertyOverviewInput = {
  propertyName: "Sunrise Tech Park",
  addressLine1: "12 Tech Drive",
  city: "Bengaluru",
  state: "KA",
  zipCode: "560103",
  country: "India",
  yearBuilt: 2015,
  landAcres: 3.2,
  buildingSquareFootage: 120000,
  numberOfStories: 7,
  propertyType: "Office / Tech Park",
  uncoveredParkingSpaces: 210,
  coveredParkingSpaces: 90,
  purchasePrice: 115000000, // ₹115,000,000
  closingCostsPercent: 3.0,
  upfrontWorkingCapital: 750000, // ₹750,000
  analysisDate: "2025-08-29",
  costOfSalePercent: 2.0,
  exitCapRate: 6.5,
  holdPeriodMonths: 60,
  acquisitionFeePercent: 1.0,
  assetManagementFeePercent: 1.0,
  constructionMgmtFeePercent: 2.0,
  dispositionFeePercent: 1.0,
};

// Calculate all metrics
const propertyOverview = calculatePropertyOverview(sunriseTechParkInput);

// ============================================================================
// DISPLAY RESULTS
// ============================================================================

console.log("=".repeat(80));
console.log("STEP 1 - PROPERTY OVERVIEW CALCULATIONS");
console.log("=".repeat(80));
console.log();

console.log("📍 PROPERTY INFORMATION");
console.log("-".repeat(80));
console.log(`Property Name: ${propertyOverview.propertyName}`);
console.log(`Address: ${propertyOverview.addressLine1}`);
console.log(`City: ${propertyOverview.city}, ${propertyOverview.state} ${propertyOverview.zipCode}`);
console.log(`Country: ${propertyOverview.country}`);
console.log(`Property Type: ${propertyOverview.propertyType}`);
console.log(`Year Built: ${propertyOverview.yearBuilt}`);
console.log();

console.log("📏 PHYSICAL CHARACTERISTICS");
console.log("-".repeat(80));
console.log(`Land Acres: ${propertyOverview.landAcres.toFixed(2)}`);
console.log(`Land Square Footage: ${propertyOverview.landSquareFootage.toLocaleString()} SF`);
console.log(`Building Square Footage: ${propertyOverview.buildingSquareFootage.toLocaleString()} SF`);
console.log(`Number of Stories: ${propertyOverview.numberOfStories}`);
console.log(`Net Leasable Area: ${propertyOverview.netLeasableArea.toLocaleString()} SF`);
console.log();

console.log("🚗 PARKING");
console.log("-".repeat(80));
console.log(`Uncovered Spaces: ${propertyOverview.uncoveredParkingSpaces}`);
console.log(`Covered Spaces: ${propertyOverview.coveredParkingSpaces}`);
console.log(`Total Parking Spaces: ${propertyOverview.totalParkingSpaces}`);
console.log(`Spaces per 1,000 SF: ${propertyOverview.totalSpacesPer1000SF.toFixed(2)}`);
console.log();

console.log("💰 ACQUISITION COSTS");
console.log("-".repeat(80));
console.log(`Purchase Price: ₹${propertyOverview.purchasePrice.toLocaleString()}`);
console.log(`Purchase Price per SF: ₹${propertyOverview.purchasePricePerSF.toFixed(2)}`);
console.log(`Closing Costs (${propertyOverview.closingCostsPercent}%): ₹${propertyOverview.closingCostsAmount.toLocaleString()}`);
console.log(`Acquisition Fee (${propertyOverview.acquisitionFeePercent}%): ₹${propertyOverview.acquisitionFeeAmount.toLocaleString()}`);
console.log(`Upfront Working Capital: ₹${propertyOverview.upfrontWorkingCapital.toLocaleString()}`);
console.log(`Total Upfront & Planned Capital: ₹${propertyOverview.totalUpfrontAndPlannedCapital.toLocaleString()}`);
console.log();

console.log("📊 INVESTMENT PARAMETERS");
console.log("-".repeat(80));
console.log(`Analysis Date: ${propertyOverview.analysisDate}`);
console.log(`Hold Period: ${propertyOverview.holdPeriodMonths} months`);
console.log(`Exit Cap Rate: ${propertyOverview.exitCapRate}%`);
console.log(`Cost of Sale: ${propertyOverview.costOfSalePercent}%`);
console.log(`Asset Management Fee: ${propertyOverview.assetManagementFeePercent}%`);
console.log(`Construction Mgmt Fee: ${propertyOverview.constructionMgmtFeePercent}%`);
console.log(`Disposition Fee: ${propertyOverview.dispositionFeePercent}%`);
console.log();

console.log("✅ VERIFICATION");
console.log("-".repeat(80));
console.log(`Land SF Calculation: ${propertyOverview.landAcres} acres × 43,560 = ${propertyOverview.landSquareFootage.toLocaleString()} SF`);
console.log(`Price per SF: ₹${propertyOverview.purchasePrice.toLocaleString()} ÷ ${propertyOverview.buildingSquareFootage.toLocaleString()} = ₹${propertyOverview.purchasePricePerSF.toFixed(2)}`);
console.log(`Total Parking: ${propertyOverview.uncoveredParkingSpaces} + ${propertyOverview.coveredParkingSpaces} = ${propertyOverview.totalParkingSpaces}`);
console.log(`Parking Ratio: ${propertyOverview.totalParkingSpaces} ÷ ${propertyOverview.buildingSquareFootage / 1000} = ${propertyOverview.totalSpacesPer1000SF.toFixed(2)} per 1,000 SF`);
console.log();

console.log("=".repeat(80));
console.log("✓ Step 1 Complete - All calculations verified!");
console.log("=".repeat(80));

// Export for use in other modules
export {
  PropertyOverviewInput,
  PropertyOverviewOutput,
  calculatePropertyOverview,
  calculateLandSquareFootage,
  calculatePurchasePricePerSF,
  calculateTotalParkingSpaces,
  calculateTotalSpacesPer1000SF,
  calculateClosingCostsAmount,
  calculateAcquisitionFeeAmount,
  calculateTotalUpfrontAndPlannedCapital,
  calculateNetLeasableArea,
  calculateBuildingEfficiency,
};
