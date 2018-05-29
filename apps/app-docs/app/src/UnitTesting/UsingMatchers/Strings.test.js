// https://facebook.github.io/jest/docs/en/using-matchers.html#strings
// You can check strings against regular expressions with toMatch:

test("there is no I in team", () => {
  expect("team").not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect("Christoph").toMatch(/stop/);
});
