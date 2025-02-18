import { it, expect } from "vitest";
import { validateArrayNotEmpty, validateEmail } from "./validation";

it("should validate a correct email address", () => {
  const email = "example@gmail.com";
  const resultFn = () => validateEmail(email);

  expect(resultFn).not.toThrow();
});

it("should throw an error if an invalid email is passed", () => {
  const email = "example";
  const resultFn = () => validateEmail(email);

  expect(resultFn).toThrow("Invalid email format");
});

it("throws an error for an undefined email address", () => {
  expect(() => validateEmail(undefined).toThrow("Invalid email format"));
});

it("throws an error for an null email address", () => {
  expect(() => validateEmail(null).toThrow("Invalid email format"));
});

it("should validate a non-empty array", () => {
  const array = [2, 5];
  const requestFn = () => validateArrayNotEmpty(array);
  expect(requestFn).not.toThrow();
});

it("throws an error for an empty array", () => {
  const empty_array = [];
  const resultFn = () => validateArrayNotEmpty(empty_array);
  expect(resultFn).toThrow("Array can not be empty.");
});

it("throws an error for a not-array input", () => {
  const non_array = "not an array";
  const resultFn = () => validateArrayNotEmpty(non_array);
  expect(resultFn).toThrow("Array can not be empty.");
});

it("throws an error for a null input", () => {
  const null_array = null;
  const resultFn = () => validateArrayNotEmpty(null_array);
  expect(resultFn).toThrow("Array can not be empty.");
});

it("throws an error for an undefined input", () => {
  const undefined_array = undefined;
  const resultFn = () => validateArrayNotEmpty(undefined_array);
  expect(resultFn).toThrow("Array can not be empty.");
});
