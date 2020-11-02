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

const letterPositions = function(string) {
  let letters = {};

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      if(letters[string[i]]) {
        letters[string[i]].push(i);     
      } else {
      letters[string[i]] = [i];
      }
    }
  }
  return letters;
};

module.exports = letterPositions;

//TEST
console.log(letterPositions('lighthouse in the house'));
const greet = letterPositions('hello');
assertArraysEqual(greet['e'], [1]);
assertArraysEqual(greet['l'],[2,3]);