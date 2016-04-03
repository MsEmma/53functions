var assert = require('assert');
var diamond = require("../diamond");

describe("diamond", function() {
  it("should draw a diamond shape using *. The center of the diamond should be 5 characters wide.", function() {
    var result = diamond();
    assert.equal(result, "  *\n ***\n*****\n ***\n  *\n\n");
  })
})
