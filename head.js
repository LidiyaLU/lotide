const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😃😃Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`👿👿Assertion failed: ${actual} !== ${expected}`);
  }
};

const head = function(array) {
  return array[0];
};

console.log(head([5, 2, 1]));

assertEqual(head(['h','e','l','l','o']), 'h');
assertEqual(head([]), undefined);
assertEqual(head([1]), 1);