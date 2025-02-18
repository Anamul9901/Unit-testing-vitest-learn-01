export function add(numbers) {
  let sum = 0;

  // throw new Error('somthing went wrong')

  for (const number of numbers) {
    //  number er age + duar karone( +number ) srgin k number e convert kore felbe
    sum += +number;
  }
  return sum;
}
