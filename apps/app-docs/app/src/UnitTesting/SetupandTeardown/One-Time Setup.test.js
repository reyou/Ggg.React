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
beforeAll(() => {
  return initializeCityDatabase();
});

afterAll(() => {
  return clearCityDatabase();
});

test("city database has Vienna", () => {
  expect(isCity("Vienna")).toBeTruthy();
});

test("city database has San Juan", () => {
  expect(isCity("San Juan")).toBeTruthy();
});
