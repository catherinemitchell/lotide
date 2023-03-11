// the function eqArray will check if both arrays are the same
//by first checking if the arrays are the same length, and then checking if the elements at each index number are the same

const eqArray = (arr1, arr2) => {  //a function name eqArray that has two parameters call arr1 and arr2
  if (arr1.length === arr2.length) {  //if the length of both arr1 and arr2 are the same
    for (let i = 0; i < arr1.length; i++) { //if the arrays are the same length it loops through.  here looping through arr1
      if (arr1[i] !== arr2[i]) return false; //if arr1 is each index element is not equal to each index element in arr2, then stop and return false
    }
    return true // if they are the same then return true
  }
  return false; //this is to return false if the arrays are not the same length on line 6
}

// the assertEqual function will compare if two variables are the same.  this does not work for arrays
const assertEqual = function(actual, expected) {  // a function name assertEqual that has two parameters called actual and expected
  if (actual === expected) { //if statement, saying if actual is equal to expected, then pring out that the assertion passed
    console.log(`\u2705\u2705\u2705 Assertion Passed: ${actual} === ${expected}`);

  } else { //if it wasn't equal to expected then print out that assertion failed
    console.log(`\u{1F6D1}\u{1F6D1}\u{1F6D1} Assertion Failed: ${actual} !== ${expected}`);
  }
};



//Define a function called eqObjects. 
// eqObjects will take in two objects and return true or false based on a perfect match.  

const eqObjects = function(object1, object2) { //a function called eqObjects with two parameters called object1 and object2
  // implement the function - make the function work, to pass the assertions written so far.  So to pass what is wrtting underneat
  const arrOfKeys1 = Object.keys(object1) //taking the shirtObject object and gives an array of keys and put that array into the variable arrOfKeys
  const arrOfKeys2 = Object.keys(object2)
  arrOfKeys1.sort() //sorting the arrays because if they are the same but out of order, then it will be false, and this puts them in order
  arrOfKeys2.sort()

  const results = eqArray(arrOfKeys1, arrOfKeys2)  //uses the function eqArray, and takes in the arguments of arrOfKeys1 and 2 and compares them and gives a true or false
                                                  // need to compare them with this function because they are not primitive data types they are arrays.  and need a function or something to compare arrays
  if (!results) { //if results is not true (if they are not the same) then return false
    return false 
  }  
  //otherwise if they are the same then we have to compare the values as well, as the keys were the same. 


// create a for...of loop, for one of the objects that compare both objects' values for that key.  Use ===
// As soon as there is not a match, you can return false.  So does this mean that we use false first, because if you find a non-match then it ends there
// If they match then return true
  for (const element of arrOfKeys1) { //a for of loop that iterates through the array arrOfKeys1 checking each "element" which is the keys
    if (Array.isArray(object1[element])) { //checking to see if object1[element] is an array
      if (!eqArray(object1[element], object2[element])) { //using eqArray function to compare both arrays to see if they are not the same
        return false //if not return false.  if they are then continue on
      } 
    }
    
    else if (object1[element] !== object2[element]) { //checking if the value in each of the keys is the same
      return false //if they aren't the same return fals
    }
    }
    return true //otherwise return true

};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject , anotherShirtObject), true); // => true

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true); // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false); // => false