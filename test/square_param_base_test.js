var assert = require('assert');
var square_param_base = require("../square_param_base");

describe("square_param_base", function() {
  it("should take a character and a base size as parameters, and can draw a square using them", function() {
    var result = square_param_base("#", 5);
    assert.equal(result, "  # # # # #\n  # # # # #\n  # # # # #\n  # # # # #\n  # # # # #\n \n");
  })
})
