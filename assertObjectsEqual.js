const eqArrays = require('./eqArrays');


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


const assertObjectsEqual = function(actual, expected) { 
  const inspect = require('util').inspect; 
  if (eqObjects(actual, expected)) { 
    console.log(`\u2705\u2705\u2705 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`); 
  } else {
    console.log(`\u{1F6D1}\u{1F6D1}\u{1F6D1} Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`); 
  }
}

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
assertObjectsEqual(shirtObject, anotherShirtObject)