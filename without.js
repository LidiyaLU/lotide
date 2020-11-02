const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const without = function(source, itemsToRemove) {
 let newSource = source.filter(item => !itemsToRemove.includes(item));
 return newSource;
};

module.exports = without;
const words = ["hello", "world", "lighthouse"];
const newWords = without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(words, newWords);
assertArraysEqual(newWords,['hello','world']);