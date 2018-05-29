// https://facebook.github.io/jest/docs/en/using-matchers.html#arrays
// You can check if an array contains a particular item using toContain:

const shoppingList = [
  "diapers",
  "kleenex",
  "trash bags",
  "paper towels",
  "beer"
];

test("the shopping list has beer on it", () => {
  expect(shoppingList).toContain("beer");
});
