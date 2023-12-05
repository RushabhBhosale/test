// Question: Write a function removeDuplicates that removes duplicate elements from an array
// while maintaining the original order.
// Input: [1, 2, 2, 3, 4, 4, 5]
// Output: [1, 2, 3, 4, 5] (array without duplicates)

function removeDuplicates(arr) {
   return arr.filter((value, index, array) => array.indexOf(value) === index);
}
 
 // Example usage:
 const inputArray = [1, 2, 2, 3, 4, 4, 5];
 const resultArray = removeDuplicates(inputArray);
 console.log(resultArray);
 // Output: [1, 2, 3, 4, 5]
 
