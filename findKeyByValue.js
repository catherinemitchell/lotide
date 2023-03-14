const assertEqual = require('./assertEqual');

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const findKeyByValue = function(object, value) {

const genreOfShow = Object.keys(bestTVShowsByGenre);

for (const genre of genreOfShow) {
   if (bestTVShowsByGenre[genre] === value)

return genre
}
}

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

