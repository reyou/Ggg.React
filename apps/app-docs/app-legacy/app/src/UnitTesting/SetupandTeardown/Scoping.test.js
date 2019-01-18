/*By default, the before and after blocks apply to every test in a file. 
You can also group tests together using a describe block. 
When they are inside a describe block, the before and after 
blocks only apply to the tests within that describe block.
For example, let's say we had not just a city database, but 
also a food database. We could do different setup for different 
tests: */
let cities = [];
let foods = [];
function initializeCityDatabase() {
  cities.push("Vienna");
  cities.push("San Juan");
}
function initializeFoodDatabase() {
  return new Promise(function(resolve) {
    foods.push("Vienna");
    foods.push("San Juan");
    resolve();
  }, null);
}
function clearFoodDatabase() {
  return Promise.resolve(function() {
    foods = [];
  });
}
function isValidCityFoodPair(city, food) {
  return true;
}
function clearCityDatabase() {
  cities = [];
}
function isCity(city) {
  if (cities.indexOf(city) >= 0) {
    return true;
  }
  return false;
}
// Applies to all tests in this file
beforeEach(() => {
  return initializeCityDatabase();
});

test("city database has Vienna", () => {
  expect(isCity("Vienna")).toBeTruthy();
});

test("city database has San Juan", () => {
  expect(isCity("San Juan")).toBeTruthy();
});

describe("matching cities to foods", () => {
  // Applies only to tests in this describe block
  beforeEach(() => {
    return initializeFoodDatabase();
  });
  afterEach(() => {
    return clearFoodDatabase();
  });
  test("Vienna <3 sausage", () => {
    expect(isValidCityFoodPair("Vienna", "Wiener Schnitzel")).toBe(true);
  });

  test("San Juan <3 plantains", () => {
    expect(isValidCityFoodPair("San Juan", "Mofongo")).toBe(true);
  });
});
