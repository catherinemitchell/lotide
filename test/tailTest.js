const assertEqual = require('../assertEqual');
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];
const removeHead = tail(words);

assertEqual(words.length, 3);
assertEqual(removeHead[0], "Lighthouse");