/*You can also use the .resolves matcher in your expect statement, 
and Jest will wait for that promise to resolve. If the promise 
is rejected, the test will automatically fail. */
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
  expect.assertions(1);
  return expect(fetchData()).resolves.toBe("peanut butter");
});
test("the fetch fails with an error", () => {
  expect.assertions(1);
  return expect(fetchData("error")).rejects.toMatch("error");
});
