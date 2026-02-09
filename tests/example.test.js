const { calculateFinalAmount } = require("../src/pricing");

test("Invalid subtotal should throw error", () => {
  expect(() => calculateFinalAmount("100", "SAVE10")).toThrow("Invalid subtotal");
  expect(() => calculateFinalAmount(NaN, "SAVE10")).toThrow("Invalid subtotal");
  expect(() => calculateFinalAmount(-100, "SAVE10")).toThrow("Invalid subtotal");
});

test("No coupon applies correct default pricing", () => {
  expect(calculateFinalAmount(500)).toBe(500);
  expect(calculateFinalAmount(1500)).toBe(1425); 
});

test("SAVE10 coupon should give 10% discount", () => {
  expect(calculateFinalAmount(500, "SAVE10")).toBe(450);   
  expect(calculateFinalAmount(1500, "SAVE10")).toBe(1325); 
});

test("FLAT50 coupon boundary case", () => {
  expect(calculateFinalAmount(50, "FLAT50")).toBe(0);
  expect(calculateFinalAmount(40, "FLAT50")).toBe(0);
});

test("Coupon should be case-insensitive", () => {
  expect(calculateFinalAmount(500, "save10")).toBe(450);
  expect(calculateFinalAmount(500, "flat50")).toBe(450);
});

test("Invalid coupon should throw error", () => {
  expect(() => calculateFinalAmount(100, "INVALID")).toThrow("Invalid Coupon");
});
