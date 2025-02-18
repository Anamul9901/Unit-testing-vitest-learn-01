import { expect, it } from "vitest";
import { transformToNumber } from "./transformToNumber";

it("should return a number if a numeric string is provided", () => {
  const stringNumber = "5";
  const result = transformToNumber(stringNumber);

  // multiple assertions (mane onkgula expect ekta test e lekha)
  //! konu ekta expect fail krle full test ta fail krbe
  expect(result).toBeTypeOf("number");
  expect(result).not.toBeTypeOf('string')
  expect(isNaN(result)).not.toBe(true)
});
