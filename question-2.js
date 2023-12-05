// Question: Create a function doesKeyExist(obj, key) that checks if a given key exists in the
// provided object (obj).
// Input: {name: 'John', age: 25, city: 'New York'}, 'age'
// Output: true (the key 'age' exists in the object)


const input = { name: 'John', age: 25, city: 'New York' };
const checkKey = 'age';

function doesKeyExist(obj, key) {
   return key in obj;
}

const output = doesKeyExist(input, checkKey);

console.log(output)