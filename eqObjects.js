const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😃😃Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`👿👿Assertion failed: ${actual} !== ${expected}`);
  }
};

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

}

const eqObjects = function(object1, object2) {

  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (!object2[key]) {
      return false;
    }
    
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};


//TEST
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); //pass

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); //pass

assertEqual(eqObjects(ab,abc),true); // fail

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => pass

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => pass