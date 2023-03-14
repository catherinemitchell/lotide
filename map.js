const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {

const results = [];
for(let item of array) {
  results.push(callback(item));
}
return results;
};
const firstCharacter = function(word) {
  return word[0];
}


console.log(map(words, firstCharacter));
assertArraysEqual(map(words, firstCharacter), ['g', 'c', 't', 'm', 't']);