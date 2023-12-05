// Question: Write a function countProperties that takes an object as input and returns the total
// number of properties (keys) it contains.
// Input: {a: 1, b: 2, c: 3}
// Output: 3 (the object has three properties: a, b, c)

const input = { a: 1, b: 2, c: 3, d: 6 }

function countProperties(input) {
   return Object.keys(input).length;
}

const output = countProperties(input);

