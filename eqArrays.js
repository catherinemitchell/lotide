// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`\u2705\u2705\u2705 Assertion Passed: ${actual} === ${expected}`);

//   } else {
//     console.log(`\u{1F6D1}\u{1F6D1}\u{1F6D1} Assertion Failed: ${actual} !== ${expected}`);
//   }
// };
// const assertEqual = require('./assertEqual');
  
const eqArrays = (arr1, arr2) => {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  }
  return false;
};

module.exports = eqArrays;





