const assertEqual = require('../assertEqual');
const head = require('../head');

assertEqual(head(['h','e','l','l','o']), 'h');
assertEqual(head([]), undefined);
assertEqual(head([1]), 1);