/*If a test is failing, one of the first things to check 
should be whether the test is failing when it's the only test 
that runs. In Jest it's simple to run only one test - 
just temporarily change that test command to a test.only: */
test.only("this will be the only test that runs", () => {
  // expect(true).toBe(false);
  expect(true).toBe(true);
});

test("this test will not run", () => {
  expect("A").toBe("A");
});
