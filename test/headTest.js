// const assertEqual = require('../assertEqual'); Do not need to import this because it is imported into the head file
const assertEqual = require('../assertEqual');
const head = require('../head');

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");