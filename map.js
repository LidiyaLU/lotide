const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const map = function(array, callback) {
  let mapped = [];
  for (let item of array) {
    mapped.push(callback(item));
  } 
  return mapped;
};

module.exports = map;

//TEST
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);
const results2 = map(words, word => words.indexOf(word));

assertArraysEqual(results1,['g','c','t','m','t']);
assertArraysEqual(results2,[0,1,2,3,4]);