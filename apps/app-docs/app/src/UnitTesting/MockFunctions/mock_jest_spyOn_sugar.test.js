// https://medium.com/@rickhanlonii/understanding-jest-mocks-f0046c68e53c
/*This is useful for tests within the same file, but unnecessary to 
do in an afterAll hook since each test file in Jest is sandboxed.
The key thing to remember about jest.spyOn is that it is just sugar 
for the basic jest.fn() usage. We can achieve the same goal by storing 
the original implementation, setting the mock implementation to to original, 
and re-assigning the original later: */
import * as app from "./app";
import * as math from "./math";

test("calls math.add", () => {
  // store the original implementation
  const originalAdd = math.add;

  // mock add with the original implementation
  math.add = jest.fn(originalAdd);

  // spy the calls to add
  expect(app.doAdd(1, 2)).toEqual(3);
  expect(math.add).toHaveBeenCalledWith(1, 2);

  // override the implementation
  math.add.mockImplementation(() => "mock");
  expect(app.doAdd(1, 2)).toEqual("mock");
  expect(math.add).toHaveBeenCalledWith(1, 2);

  // restore the original implementation
  math.add = originalAdd;
  expect(app.doAdd(1, 2)).toEqual(3);
});
