const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual,expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`😃 Arrays are equal: [${actual}] === [${expected}]`);
  } else {
    console.log(`😡 Arrays are NOT equal: [${actual}] !== [${expected}]`);
  }
}

module.exports = assertArraysEqual;

assertArraysEqual(['hi','how','are','you'],['hi','how', 'are','you']);
assertArraysEqual([1,2,3,4],[1,2,3]);