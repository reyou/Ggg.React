// https://medium.com/@rickhanlonii/understanding-jest-mocks-f0046c68e53c
/*From here, we can use any of the above features of the Mock 
Function for all of the exports of the module: */
/*This is the easiest and most common form of mocking (and is the type 
of mocking Jest does for you with automock: true).
The only disadvantage of this strategy is that it’s difficult to access 
the original implementation of the module. For those use cases, 
you can use spyOn. */
import * as app from "./app";
import * as math from "./math";

// Set all module functions to jest.fn
jest.mock("./math.js");

test("calls math.add", () => {
  app.doAdd(1, 2);
  expect(math.add).toHaveBeenCalledWith(1, 2);
});

test("calls math.subtract", () => {
  app.doSubtract(1, 2);
  expect(math.subtract).toHaveBeenCalledWith(1, 2);
});
