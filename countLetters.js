// const assertEqual = require('./assertEqual');

const countLetters = function(string) {
  let letterCount = {};

  for (let letter of string) {
    if (letter === ' ') {
      continue;
    }
  
    if (letterCount[letter]) {
      letterCount[letter]++;
    } else {
      letterCount[letter] = 1;
    }
  }
  return letterCount;
};
console.log(countLetters('hello world'));