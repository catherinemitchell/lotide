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

const without = function (source, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) newArray.push(source[i]);
  }
  return newArray;
}

console.log(without([3, "hi", true], [true, "hi"]));
console.log(without([5, 7, 3, 4, 6], [7, 6]));

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);