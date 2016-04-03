var assert = require('assert');
var diamond_base = require("../diamond_base");

describe("diamond_base", function() {
  it("should take a character as a parameter and draw a 5 char wide diamond shape", function() {
    var result = diamond_base("$");
    assert.equal(result, "  $\n $$$\n$$$$$\n $$$\n  $\n\n");
  })
})
