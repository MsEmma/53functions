var count_words = require('../count_words');
var assert = require('assert');

describe("count_words", function() {

  it("should return 6 for the string 'I am learning how to code'", function() {
    assert.equal(count_words('I am learning how to code'), 6)
  });
});
