var assert = require('assert');
var add = require("../add");

describe("add", function() {
  it("should take two numbers as parameters and add them", function() {
    var result = add(5, 7);
    assert.equal(result, 12);
  })
})
