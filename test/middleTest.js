const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("return [3, 4] when given [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

  it("returns [2] when passed an array [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  })
});


