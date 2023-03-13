/*
const eqArrays = (arr1, arr2) => {
  if (arr1.length === arr2.length) {
      for (let i = 0; i < arr1.length; i++) {
          if (arr1[i] !== arr2[i]) return false;
      }
      return true;
  }
  return false;
} 

const assertArraysEqual = function (arr1, arr2) {

if (eqArrays(arr1, arr2)) {
console.log("Assertion passed");
} else {
console.log("Assertion failed");
}

}

assertArraysEqual([1, 2, 3], [3, 4, 5]); */

// create a function called middle
// function code should take in an array and return the middle elements of that array
// have an empty array - buffer - called something, to store the selected elements
// return 

const middle = function(array) {

  const middleElements = [];
  if(array.length <= 1) {
    return [];
  }
  if (array.length % 2 === 0) {
  middleElements.push(array[Math.floor((array.length - 1) / 2)]);
  } 
  const midArray = (array[Math.floor(array.length / 2)]);
  middleElements.push(midArray);
  return middleElements;
}

console.log(middle([1, 2, 3, 4, 5, 6]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1]));