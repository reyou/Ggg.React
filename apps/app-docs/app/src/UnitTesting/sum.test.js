const sum = require("./sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(10, 15)).toBe(25);
});
test("two plus two is four", () => {
  expect(2 + 2).toBe(4);
});
