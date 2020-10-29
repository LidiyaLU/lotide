const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😃😃Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`👿👿Assertion failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, filter) {
  for (let item in object) {
    if(filter(object[item])) {
      return item;
    }
  }
}

let movieStars = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

let movieNoStar = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 0); // => undefined

let cityTourist = findKey({
  "London": {tourist: 100, local: 95},
  "NY": {local: 110, tourist: 90},
  "Berlin": {tourist: 77, local: 78}
}, x => x.tourist === 90); //=> "NY"

let cityLocal = findKey({
  "London": {tourist: 100, local: 95},
  "NY": {tourist: 90, local: 110},
  "Berlin": {tourist: 77, local: 78}
}, x => x.local === 95); //=> "London"


assertEqual(movieStars, 'noma');
assertEqual(cityTourist,"NY");
assertEqual(cityLocal,"London");
assertEqual(movieNoStar,undefined);