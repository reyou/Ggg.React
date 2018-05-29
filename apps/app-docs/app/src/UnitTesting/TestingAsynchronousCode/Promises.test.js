function fetchData(action) {
  if (action === "error") {
    return Promise.reject("error");
  }
  return new Promise(
    function(resolve) {
      resolve("peanut butter");
    },
    function(reject) {
      reject("some error has been occurred.");
    }
  );
}
test("the data is peanut butter", () => {
  /*If you expect a promise to be rejected use the .catch method. 
    Make sure to add expect.assertions to verify that a certain 
    number of assertions are called. Otherwise a fulfilled promise 
    would not fail the test. */
  expect.assertions(1);
  return fetchData().then(data => {
    expect(data).toBe("peanut butter");
  });
});

test("the fetch fails with an error", () => {
  expect.assertions(1);
  return fetchData("error").catch(e => expect(e).toMatch("error"));
});
