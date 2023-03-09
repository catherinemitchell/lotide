const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705\u2705\u2705 Assertion Passed: ${actual} === ${expected}`);

  } else {
    console.log(`\u{1F6D1}\u{1F6D1}\u{1F6D1} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
 let letterCount = {};

for (let letter of string) {
  
if (letterCount[letter]) {
letterCount[letter]++;
} else {
  letterCount[letter] = 1
} 
}
  return letterCount;
}
console.log(countLetters('hello'));