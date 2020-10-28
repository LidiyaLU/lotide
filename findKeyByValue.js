const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😃😃Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`👿👿Assertion failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(itemForSearch, val){

  for (let item in itemForSearch) {
    if (itemForSearch[item] === val) {
      return item;
    }
  }
};


//TEST
const obj = {greet: 'hello', day: 'tomorrow', year: 'current'};
console.log(findKeyByValue(obj,'hello'));

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);