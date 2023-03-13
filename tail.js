// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`\u2705\u2705\u2705 Assertion Passed: ${actual} === ${expected}`);

//   } else {
//     console.log(`\u{1F6D1}\u{1F6D1}\u{1F6D1} Assertion Failed: ${actual} !== ${expected}`);
//   }
// };
const assertEqual = require('./assertEqual');

const tail = function(array) {

  const newArray = array.slice(1);
  console.log(newArray);
  return newArray;

};

module.exports = tail;



