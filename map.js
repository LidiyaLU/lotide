const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
    return false
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false
    }
  }
  return true;
};

const assertArraysEqual = function(actual,expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`😃 Arrays are equal: [${actual}] === [${expected}]`);
  } else {
    console.log(`😡 Arrays are NOT equal: [${actual}] !== [${expected}]`);
  }
}

const map = function(array, callback) {
  let mapped = [];
  for (let item of array) {
    mapped.push(callback(item));
  } 
  return mapped;
}

//TEST
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);
const results2 = map(words, word => words.indexOf(word));

assertArraysEqual(results1,['g','c','t','m','t']);
assertArraysEqual(results2,[0,1,2,3,4]);