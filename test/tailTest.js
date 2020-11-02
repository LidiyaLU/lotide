//const assertEqual = require('../assertEqual');
const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
    it("returns [4,18,9] for [2,4,18,9]", () => {
      assert.deepEqual(tail([2,4,18,9]), [4,18,9]);
    });
  
    it("returns [3] for [2, 3])", () => {
    assert.deepEqual(tail([2, 3]),[3]); 
    });
  
    it("returns ['house','lab'] for ['light','house','lab']", () => {
    assert.deepEqual(tail(['light','house','lab']), ['house','lab']);
    });

  });