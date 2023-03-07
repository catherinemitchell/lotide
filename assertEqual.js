const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("\u2705" + "\u2705" + "\u2705" + " Assertion Passed: " + actual + " === " + expected);

  } else {
    console.log("\u{1F6D1}" + "\u{1F6D1}" + "\u{1F6D1}" + " Assertion Failed: " + actual + "!== "  + expected);
  }
};
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(1, 2);




