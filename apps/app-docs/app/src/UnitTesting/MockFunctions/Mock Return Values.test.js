// Mock functions can also be used to inject test values into your code during a test:

const myMock = jest.fn();
console.log(myMock());
// > undefined

myMock
  .mockReturnValueOnce(10)
  .mockReturnValueOnce("x")
  .mockReturnValue(true);

console.log(myMock(), myMock(), myMock(), myMock());
// > 10, 'x', true, true

/*Mock functions are also very effective in code that uses a functional 
continuation-passing style. Code written in this style helps avoid 
the need for complicated stubs that recreate behavior of the real 
component they're standing in for, in favor of injecting values 
directly into the test right before they're used. */
test("mock functions", function() {
  const filterTestFn = jest.fn();

  // Make the mock return `true` for the first call,
  // and `false` for the second call
  filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

  const result = [11, 12].filter(filterTestFn);

  console.log(result);
  expect(result).toContain(11);
  // > [11]
  console.log(filterTestFn.mock.calls);
  // > [ [11], [12] ]
});
