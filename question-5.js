// Question: Implement a function reverseArray that reverses the order of elements in an array
// without using the built-in reverse() method.
// Input: [1, 2, 3, 4, 5]
// Output: [5, 4, 3, 2, 1] (the reversed array)

function reverseArray(arr) {
   const reversedArray = [];

   for (let i = arr.length - 1; i >= 0; i--) {
      reversedArray.push(arr[i]);
   }

   return reversedArray;
}

const input = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(input);
console.log(reversedArray);