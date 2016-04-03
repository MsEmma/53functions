var assert = require('assert');
var divide = require("../divide");

describe("divide", function() {
  it("should take two numbers as parameters and divide them", function() {
    var result = divide(14, 7);
    assert.equal(result, 2);
  })
})
