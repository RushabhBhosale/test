// Question: Implement a function findMaxValue that finds and returns the maximum value in an
// array of integers.
// Input: [2, 8, 5, 1, 9]
// Output: 9 (the maximum value in the array)

const input = [2, 8, 5, 1, 9, 91];
let firstNumber = input[0];

function findMaxValue (input) {
   for (var i = 0; i < input.length; i++) {
      if (input[i] > 0) {
         firstNumber = input[i]
      }
   }
   return firstNumber
}

const maxValue = findMaxValue(input);
console.log(maxValue)