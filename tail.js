const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705\u2705\u2705 Assertion Passed: ${actual} === ${expected}`);

  } else {
    console.log(`\u{1F6D1}\u{1F6D1}\u{1F6D1} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {

  const newArray = array.slice(1);
  return newArray;

};
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);

assertEqual(words.length, 3);
console.log(words);

