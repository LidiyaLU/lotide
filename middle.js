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
module.exports = middle;