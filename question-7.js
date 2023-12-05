// Question: Implement a function sumObjectValues that calculates the sum of all numeric values
// in an object.
// Input: {a: 10, b: 20, c: 30}
// Output: 60 (sum of all numeric values in the object)
// Array Element Frequency:

const input = {a: 10, b: 20, c: 30};

const initialValue = 0;
const sumWithInitial = Object.values(input).reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);

