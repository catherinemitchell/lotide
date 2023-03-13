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

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {

// console.log('array: ', array);
// console.log('callback: ', callback);

const results = [];
for(let item of array) {
  // console.log('item BEFORE: ', item);
  // console.log('item AFTER: ', callback(item));
  // console.log('---');
  results.push(callback(item));
}
return results;
};
const firstCharacter = function(word) {
  return word[0];
}
console.log(map(words, firstCharacter));

assertArraysEqual(map(words, firstCharacter), ['g', 'c', 't', 'm', 't']);