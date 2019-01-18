// https://medium.com/@rickhanlonii/understanding-jest-mocks-f0046c68e53c
/*This is useful in a number of scenarios where you want to assert 
that certain side-effects happen without actually replacing them.
In other cases, you may want to mock a function, but then restore 
the original implementation: */
import * as app from "./app";
import * as math from "./math";

test("calls math.add", () => {
  const addMock = jest.spyOn(math, "add");

  // override the implementation
  addMock.mockImplementation(() => "mock");
  expect(app.doAdd(1, 2)).toEqual("mock");

  // restore the original implementation
  addMock.mockRestore();
  expect(app.doAdd(1, 2)).toEqual(3);
});
