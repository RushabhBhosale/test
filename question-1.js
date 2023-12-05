// Question: Write a function sumPositiveNumbers that takes an array of numbers as input and
// returns the sum of all positive numbers.
// Input: [1, -2, 3, 4, -5]
// Output: 8 (sum of positive numbers: 1 + 3 + 4)

const inputArray = [1, -2, 3, 4, -5];

function sumPositiveNumbers(inputArray) {

   let sum = 0;

   for (var i = 0; i < inputArray.length; i++) {
      if (inputArray[i] > 0) {
         sum += inputArray[i];
      }
   }
   return sum;
}

const output = sumPositiveNumbers(inputArray);
console.log(output)