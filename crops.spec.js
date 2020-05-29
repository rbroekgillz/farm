const {Crop, Wheat, Sugarcane} = require('./crops.js');

/*
CROP BASE CLASS
 */

test('A crop can store its area size', () => {
  const crop = new Crop(12345);

});

/*
WHEAT CLASS
 */

test('A new Wheat can be instantiated', () => {
  const wheat = new Wheat();
  expect(wheat).toBeTruthy();
});

test('The Wheat class can calculate a yield', () => {
  const wheat = new Wheat(100);
  expect(wheat.getYieldInKg()).toBeDefined();
});

test('The Wheat class calculates the proper yield', () => {
  const wheat = new Wheat(100);
  expect(wheat.getYieldInKg()).toBeCloseTo(674.4, 2);
});

test('Wheat class calculates the proper yield value', () => {
  const wheat = new Wheat(100);
  expect(wheat.getYieldInEuros()).toBeCloseTo(1011.6, 1);
});

test('Wheat class calculates the proper yield value', () => {
  const wheat = new Wheat(0);
  expect(wheat.getYieldInEuros()).toBe(0);
});

test('Wheat class calculates the proper costs value', () => {
  const wheat = new Wheat(123);
  expect(wheat.getCosts()).toBe(41820);
});


/*
SUGARCANE CLASS
 */


test('A new Sugarcane can be instantiated', () => {
  const sugarcane = new Sugarcane();
  expect(sugarcane).toBeTruthy();
});

test('The Sugarcane class can calculate a yield', () => {
  const sugarcane = new Sugarcane(100);
  expect(sugarcane.getYieldInKg()).toBeDefined();
});

test('The Sugarcane class calculates the proper yield', () => {
  const sugarcane = new Sugarcane(100);
  expect(sugarcane.getYieldInKg()).toBeCloseTo(453.39, 2);
});

test('Sugarcane class calculates the proper yield value', () => {
  const sugarcane = new Sugarcane(0);
  expect(sugarcane.getYieldInEuros()).toBe(0);
});

test('Sugarcane class calculates the proper yield value', () => {
  const sugarcane = new Sugarcane(200);
  expect(sugarcane.getYieldInEuros()).toBeCloseTo(1943.7, 1);
});

test('Sugarcane class calculates the proper costs value', () => {
  const sugarcane = new Sugarcane(0);
  expect(sugarcane.getCosts()).toBe(0);
});
test('Sugarcane class calculates the proper costs value', () => {
  const sugarcane = new Sugarcane(456);
  expect(sugarcane.getCosts()).toBe(75696);
});