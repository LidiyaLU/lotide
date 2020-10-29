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

const takeUntil = function(data, filter) {
  let result = [];

  for (let item of data) {
    if (filter(item)){
      return result;
    } else {
      result.push(item);
    }
  }

  return result;
}

//TEST
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1,[1,2,5,7,2]);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2,["I've", "been", "to", "Hollywood"]);