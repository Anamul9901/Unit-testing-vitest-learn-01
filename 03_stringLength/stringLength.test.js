import { expect, it } from "vitest";
import { stringLength } from "./stringLength";

it("returns correct length from non-empty string", () => {
  expect(stringLength("hello")).toBe(5);
  expect(stringLength("hello world")).toBe(11);
});

it("returns 0 for empty string", () => {
  expect(stringLength("")).toBe(0);
});

it("throws error for not-string input", () => {
  // throw er khetre function call dete hobe["()=>fun" aivbe], karone throw konu kisu return kore nah
  expect(() => stringLength(null)).toThrow();
  expect(() => stringLength(undefined)).toThrow();
  expect(stringLength(123)).toBeUndefined();
});
