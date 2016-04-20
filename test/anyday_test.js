var assert = require("assert");
var anyday = require("../anyday");

describe("anyday", function() {

  it("should take a year and Friday as a parameter, and find the number Fridays in that year", function() {
    var result = anyday("2016", "Friday");
    assert.equal(result, 53);
  });

  it("should take a year and Wednesday as a parameter, and find the number Wednesdays in that year", function() {
    var result = anyday("2013", "Wednesday");
    assert.equal(result, 52);
  });

  it("should take a year and Monday as a parameter, and find the number Mondays in that year", function() {
    var result = anyday("1990", "Monday");
    assert.equal(result, 53);
  });

});
