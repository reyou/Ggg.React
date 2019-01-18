/*For example, let's say that several tests interact with a 
database of cities. You have a method initializeCityDatabase() 
that must be called before each of these tests, and a method 
clearCityDatabase() that must be called after each of these tests. 
You can do this with: */
let cities = [];
function initializeCityDatabase() {
  cities.push("Vienna");
  cities.push("San Juan");
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
beforeEach(() => {
  initializeCityDatabase();
  /*For example, if initializeCityDatabase() returned a promise 
  that resolved when the database was initialized, we 
  would want to return that promise: */
  // return initializeCityDatabase();
});

afterEach(() => {
  clearCityDatabase();
});

test("city database has Vienna", () => {
  expect(isCity("Vienna")).toBeTruthy();
});

test("city database has San Juan", () => {
  expect(isCity("San Juan")).toBeTruthy();
});
