const assertEqual = require('./assertEqual');

const tail = function(array) {
  let newAr = array.slice(1);
  return newAr;
}

module.exports = tail;