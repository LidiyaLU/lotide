const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😃😃Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`👿👿Assertion failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  let letters = {};
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      if(letters[string[i]]) {
        letters[string[i]] += 1;     
      } else {
      letters[string[i]] = 1;
      }
    }
  }
  return letters;
}

//TEST

console.log(countLetters('hello lu'));
const lhl = 'lighthouse in the house';
console.log(countLetters(lhl));
assertEqual(countLetters(lhl)['i'],2);

const b = 'LHL'
const ob = countLetters(b);
assertEqual(ob['L'], 2);
assertEqual(ob['H'],1)