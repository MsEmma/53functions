var assert = require('assert');
var tri = require("../tri");

describe("tri", function() {
  it("should draw a triangle with a base of 4 using * ", function() {
    var result = tri();
    assert.equal(result, "* \n* * \n* * * \n* * * * \n");
  })
})
