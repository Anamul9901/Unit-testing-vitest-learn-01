import { it, expect } from "vitest";
import { validateEmail } from "./validation";

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
