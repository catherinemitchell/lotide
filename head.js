// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`\u2705\u2705\u2705 Assertion Passed: ${actual} === ${expected}`);

//   } else {
//     console.log(`\u{1F6D1}\u{1F6D1}\u{1F6D1} Assertion Failed: ${actual} !== ${expected}`);
//   }
// };
const assertEqual = require('./assertEqual');

const head = function(array) {
  
  const firstElement = array[0];
  return firstElement;

};

module.exports = head;
//Tests that were moved into headTest.js
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

