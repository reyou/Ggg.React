// https://facebook.github.io/jest/docs/en/using-matchers.html
// toBe uses Object.is to test exact equality.
// If you want to check the value of an object,
// use toEqual instead:
test("object assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({
    one: 1,
    two: 2
  });
});
// toEqual recursively checks every field of an object or array.
// You can also test for the opposite of a matcher:
test("adding positive numbers is not zero", () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});
