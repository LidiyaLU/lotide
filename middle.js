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

const middle = function(array) {
  let final = [];
if (array.length < 3) {
  final = [];
}

else if (array.length >= 3)  {
  if (array.length % 2 === 0) {
    final.push(array[array.length / 2 - 1], array[array.length / 2]);
  }
  else if (array.length % 2 !== 0) {
    final.push(array[Math.trunc(array.length / 2)]);
  }
}
return final;
}

assertArraysEqual(middle([1, 2, 3, 4]), [2,3]);
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]);
assertArraysEqual(middle([1,2]), []);
assertArraysEqual(middle([1]),[]);