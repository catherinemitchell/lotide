const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {

  if (eqArrays(arr1, arr2)) {
    console.log("Assertion passed");
  } else {
    console.log("Assertion failed");
  }

};

module.exports = assertArraysEqual;


