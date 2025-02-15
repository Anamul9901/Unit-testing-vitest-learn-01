import { test, it, expect } from "vitest";
import { add } from "./math";

// it r test kaj same

it("should return the correct sum if an array of number is provided", () => {
  const result = add([1, 2, 3]);
  expect(result).toBe(6);
});
