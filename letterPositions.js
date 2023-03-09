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

const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ') continue; 
    results[sentence[i]] = results[sentence[i]] ? results[sentence[i]].concat(i) : [i];

  }
  return results;
};

console.log(letterPositions("lighthouse in the house"));

assertArraysEqual(letterPositions("hello").e, [1]);


