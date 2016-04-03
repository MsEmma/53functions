var assert = require('assert');
var tri_char = require("../tri_char");

describe("tri_char", function() {
  it("should take a character as a parameter and draw a triangle with a base of 4 using it", function() {
    var result = tri_char("@ ");
    assert.equal(result, "@ \n@ @ \n@ @ @ \n@ @ @ @ \n\n");
  })
})
