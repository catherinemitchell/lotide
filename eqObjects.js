const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');


const eqObjects = function(object1, object2) {
 
  const arrOfKeys1 = Object.keys(object1);
  const arrOfKeys2 = Object.keys(object2);
  arrOfKeys1.sort();
  arrOfKeys2.sort();

  const results = eqArrays(arrOfKeys1, arrOfKeys2);
                                                
  if (!results) {
    return false;
  }
  
  for (const element of arrOfKeys1) {
    if (Array.isArray(object1[element])) {
      if (!eqArrays(object1[element], object2[element])) {
        return false;
      }
    } else if (object1[element] !== object2[element]) {
      return false;
    }
  }
  return true;

};

module.exports = eqObjects;

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject , anotherShirtObject), true); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true); // => true

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false); // => false