const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns 'Labs' for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });

  it("return [1, 2, 3] for [1, 2, 3]", () => {
    const originalArray = [1, 2, 3];
    const result = tail(originalArray);
    assert.deepEqual(originalArray, originalArray);
  });

  it("return [2, 3] when passed [1, 2, 3]", () => {
    const originalArray = [1, 2, 3];
    const result = tail(originalArray);
    assert.deepEqual(result, [2, 3]);
  })

});


