import { expect, it } from "vitest";
import { cleanNumbers } from "./numbers";

it("should return an array of numbers if an array of string number is provided", () => {
  const stringNumbers = ["2", "3"];

  const result = cleanNumbers(stringNumbers);

  expect(result[0]).toBeTypeOf("number");
});

it("should throw error if at least an empty string is provided", () => {
  const stringNumbers = ["", "3"];

  // throw er kehtre arekta function er vetor call dete hoi. karon throw konu kisu return kore nah
  const resultFn = () => cleanNumbers(stringNumbers);

  expect(resultFn).toThrow();
});
