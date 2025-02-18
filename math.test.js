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

// 3nd test
it("it should provide correct sum if an array numeric string is provided", () => {
  // Arrange
  const numbers = [1, "2", "3"];
  const expectedResult = numbers.reduce((acc, cur) => acc + +cur);

  // Actions
  const result = add(numbers);

  //Assertion
  expect(result).toBe(expectedResult);
});

// 4.1 test
it("it(4.1 test) should throw an error if no argument is passed", () => {
  try {
    add();
  } catch (err) {
    // add function e konu argument na pathale ai error ta define krbe.
    expect(err).toBeDefined();
  }
});

// 4.2 test // same work to 4.1
it("it(4.2 test) should throw an error if no argument is passed", () => {
  const resultFn = () => {
    add();
  };
  expect(resultFn).toThrow();
});

// 5 test
it("it should throw an error if multiple argument is provided", () => {
  const resultFn = () => {
    add(1, 2, 3);
  };

  expect(resultFn).toThrow(/is not iterable/i);
});
