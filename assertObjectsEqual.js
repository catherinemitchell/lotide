const eqArrays = (arr1, arr2) => {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true
  } 
  return false;
}

const eqObjects = function(object1, object2) {

  const arrOfKeys1 = Object.keys(object1)
  const arrOfKeys2 = Object.keys(object2)
  arrOfKeys1.sort()
  arrOfKeys2.sort()

  if (!eqArrays(arrOfKeys1, arrOfKeys2)) {
  return false
}

for (const element of arrOfKeys1) {
  if (Array.isArray(object1[element])) {
    if (!eqArrays(object1[element], object2[element])) {
      return false
    }
  }

  else if (object1[element] !== object2[element]) {
    return false
  }
}
return true
}

//this function will take in two objects and compare them, and then print if they are true they passed, if they are false or not the same, they fail
const assertObjectsEqual = function(actual, expected) { //assertObjectsEqual function takes in two parameters which are objects - can't give it anything else
  const inspect = require('util').inspect; //require the library of pre-written js functions
  if (eqObjects(actual, expected)) { //calling upon eqObjects function to see if they are the same
    console.log(`\u2705\u2705\u2705 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`); //if they are pass it
  } else {
    console.log(`\u{1F6D1}\u{1F6D1}\u{1F6D1} Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`); //if they aren't then fail
  }
}

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };

assertObjectsEqual(shirtObject, anotherShirtObject)