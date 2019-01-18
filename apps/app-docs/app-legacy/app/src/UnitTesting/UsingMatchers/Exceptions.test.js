// https://facebook.github.io/jest/docs/en/using-matchers.html#exceptions
// If you want to test that a particular function throws an
// error when it's called, use toThrow.
class ConfigError {
  constructor(message) {
    this.message = message;
  }
}
function compileAndroidCode() {
  throw new ConfigError("you are using the wrong JDK");
}

test("compiling android goes as expected", () => {
  expect(compileAndroidCode).toThrow();
  expect(compileAndroidCode).toThrow(ConfigError);

  // You can also use the exact error message or a regexp
  expect(compileAndroidCode).toThrow("you are using the wrong JDK");
  expect(compileAndroidCode).toThrow(/JDK/);
});
