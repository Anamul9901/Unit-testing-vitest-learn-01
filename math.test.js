import { test, it, expect } from "vitest";
import { add } from "./math";

// it r test kaj same

// 1st test
it("should return the correct sum if an array of number is provided", () => {
  // Arrange
  const numbers = [1, 2, 3];
  const expectedResult = numbers.reduce((acc, cur) => acc + cur);

  // Actions
  const result = add(numbers);

  //Assertion
  expect(result).toBe(expectedResult);
});

// 2nd test
it("it should provide NaN if at least one invalid number is probided", () => {
  // Arrange
  const numbers = [1, "any string", 3];

  // Actions
  const result = add(numbers);

  //Assertion
  expect(result).toBeNaN();
});

// 2nd test
it("it should provide correct sum if an array numeric string is provided", () => {
  // Arrange
  const numbers = [1, "2", "3"];
  const expectedResult = numbers.reduce((acc, cur) => acc + +cur);

  // Actions
  const result = add(numbers);

  //Assertion
  expect(result).toBe(expectedResult);
});
