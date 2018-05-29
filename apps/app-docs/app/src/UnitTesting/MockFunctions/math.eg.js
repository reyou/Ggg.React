// https://medium.com/@rickhanlonii/understanding-jest-mocks-f0046c68e53c
/*Mock a module with jest.mock
A more common approach is to use jest.mock to automatically set 
all exports of a module to the Mock Function. So, calling 
jest.mock('./math.js'); essentially sets math.js to: */
export const add = jest.fn();
export const subtract = jest.fn();
export const multiply = jest.fn();
export const divide = jest.fn();
