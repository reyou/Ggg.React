/*Alternatively, you can use async and await in your tests. 
To write an async test, just use the async keyword in 
front of the function passed to test. For example, 
the same fetchData scenario can be tested with: */
async function fetchData(action) {
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
test("the data is peanut butter", async () => {
  expect.assertions(1);
  const data = await fetchData();
  expect(data).toBe("peanut butter");
});

test("the fetch fails with an error", async () => {
  expect.assertions(1);
  try {
    await fetchData("error");
  } catch (e) {
    expect(e).toMatch("error");
  }
});

// Of course, you can combine async and await with .resolves or .rejects.
test("the data is peanut butter", async () => {
  expect.assertions(1);
  await expect(fetchData()).resolves.toBe("peanut butter");
});

test("the fetch fails with an error", async () => {
  expect.assertions(1);
  await expect(fetchData("error")).rejects.toMatch("error");
});
