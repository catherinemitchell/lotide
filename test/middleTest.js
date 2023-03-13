const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

const actual = middle([1, 2, 3, 4, 5, 6]);
const expected = [3,4];
assertArraysEqual(actual, expected);

console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1]));