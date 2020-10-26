const tail = function(array) {
  let newAr = array.slice(1);
  return newAr;
}

console.log(tail([6,5,7]));
console.log(tail([]));

const testAr = [1,2,3];
console.log(tail(testAr), testAr);