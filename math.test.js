import { test, it, expect } from "vitest";
import { add } from "./math";

// it r test kaj same

it("should return the correct sum if an array of number is provided", () => {
  // Arrange
  const numbers = [1, 2, 3];
  const expectedResult = numbers.reduce((acc, cur) => acc + cur);

  // Actions
  const result = add(numbers);

  //Assertion
  expect(result).toBe(expectedResult);
});
