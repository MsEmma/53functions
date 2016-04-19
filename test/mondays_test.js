var assert = require("assert");
var mondays = require("../mondays")

describe("mondays", function() {

  it("should take a year as an input, and find the number of Mondays in that year", function() {
    var result = mondays("1990");
    assert.equal(result, 53);
  })
})
