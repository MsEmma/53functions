var assert = require('assert');
var diamond_char_base = require("../diamond_char_base");

describe("diamond_char_base", function() {
  it("should take a character as a parameter and draw a 5 char wide diamond shape", function() {
    var result = diamond_char_base("$", 7);
    assert.equal(result, "   $\n  $$$\n $$$$$\n$$$$$$$\n $$$$$\n  $$$\n   $\n\n");
  })
})
