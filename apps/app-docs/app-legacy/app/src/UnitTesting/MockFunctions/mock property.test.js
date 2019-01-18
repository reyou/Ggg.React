/*All mock functions have this special .mock property, 
which is where data about how the function has been called 
and what the function returned is kept. The .mock property 
also tracks the value of this for each call, so it is 
possible to inspect this as well: */
test("All mock functions have this special .mock property", function() {
  const myMock = jest.fn();

  const a = new myMock();
  const b = {};
  const bound = myMock.bind(b);
  bound();

  console.log("myMock.mock.instances: ");
  console.log(myMock.mock.instances);
});
// > [ <a>, <b> ]

/*These mock members are very useful in tests to assert 
how these functions get called, instantiated, or 
what they returned: */

test.skip("These mock members are very useful in tests to", function() {
  // The function was called exactly once
  expect(someMockFunction.mock.calls.length).toBe(1);

  // The first arg of the first call to the function was 'first arg'
  expect(someMockFunction.mock.calls[0][0]).toBe("first arg");

  // The second arg of the first call to the function was 'second arg'
  expect(someMockFunction.mock.calls[0][1]).toBe("second arg");

  // The return value of the first call to the function was 'return value'
  expect(someMockFunction.mock.returnValues[0]).toBe("return value");

  // This function was instantiated exactly twice
  expect(someMockFunction.mock.instances.length).toBe(2);

  // The object returned by the first instantiation of this function
  // had a `name` property whose value was set to 'test'
  expect(someMockFunction.mock.instances[0].name).toEqual("test");
});
