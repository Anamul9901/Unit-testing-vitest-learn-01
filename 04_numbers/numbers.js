import { transformToNumber, validateStringNotEmpty } from "./validation";

export function cleanNumbers(inputNumbers) {
  const numbers = [];
  for (const numberInput of inputNumbers) {
    validateStringNotEmpty(numberInput);
    const number = transformToNumber(numberInput);
    numbers.push(number);
  }
  return numbers;
}