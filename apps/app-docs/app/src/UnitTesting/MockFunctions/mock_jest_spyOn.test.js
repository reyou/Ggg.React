// https://medium.com/@rickhanlonii/understanding-jest-mocks-f0046c68e53c
/*Spy or mock a function with jest.spyOn
Sometimes you only want to watch a method be called, but keep the original 
implementation. Other times you may want to mock the implementation, 
but restore the original later in the suite.
In these cases, you can use jest.spyOn.
Here we simply “spy” calls to the math function, but leave the 
original implementation in place: */
import * as app from "./app";
import * as math from "./math";

test("calls math.add", () => {
  const addMock = jest.spyOn(math, "add");

  // calls the original implementation
  expect(app.doAdd(1, 2)).toEqual(3);

  // and the spy stores the calls to add
  expect(addMock).toHaveBeenCalledWith(1, 2);
});
