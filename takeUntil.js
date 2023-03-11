//implement a function called takeUntil that will take in two parameters
// the parameters will be called array, callback
//the function takeUntil will return a slice of the array with elements taken from the beginning.  
//It should keep going until the callback returns a truthy value

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

const takeUntil = function(array, callback) { 

const outcome = []; 

for (const item of array) {  
  if (callback(item)) { 
    return outcome;
  }
  outcome.push(item)
}
return outcome
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);