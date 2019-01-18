// https://medium.com/@rickhanlonii/understanding-jest-mocks-f0046c68e53c
/*The most basic strategy for mocking is to reassign a function to 
the Mock Function. Then, anywhere the reassigned functions are 
used, the mock will be called instead of the original function: */
/*jest.mock does this automatically for all functions in a module
jest.spyOn does the same thing but allows restoring the original function */
import * as app from "./app";
import * as math from "./math";

math.add = jest.fn();
math.subtract = jest.fn();

test("calls math.add", () => {
  app.doAdd(1, 2);
  expect(math.add).toHaveBeenCalledWith(1, 2);
});

test("calls math.subtract", () => {
  app.doSubtract(1, 2);
  expect(math.subtract).toHaveBeenCalledWith(1, 2);
});
