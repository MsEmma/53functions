var assert = require('assert');
var calc_all = require("../calc_all");

describe("calc_all", function() {

  it("should take two numbers and a minus as a parameter, then subtract the numbers", function() {
    var result = calc_all(14, 7, "-");
    assert.equal(result, 7);
  })

  it("should take two numbers and a plus as a parameter, then add the numbers", function() {
    var result = calc_all(2, 3, "+");
    assert.equal(result, 5);
  })

  it("should take two numbers and a times as a parameter, then multiply the numbers", function() {
    var result = calc_all(3, 4, "*");
    assert.equal(result, 12);
  })

  it("should take two numbers and a divide as a parameter, then divide the numbers", function() {
    var result = calc_all(16, 8, "/");
    assert.equal(result, 2);
  })

  it("should take two numbers and a non-mathematical symbol as parameters, then return the default message", function() {
    var result = calc_all(16, 8, "%");
    assert.equal(result, "Not a mathematical symbol, try again");
  })


})
