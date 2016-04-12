var assert = require('assert');
var calc_chain = require("../calc_chain");

describe("calc_chain", function() {

  it("should take two numbers and calculate the outcome according to the functions called", function() {
    var Calc = new calc_chain();
    var result = Calc.multiply(14, 2).add(4).value();
    assert.equal(result, 32);
  })

  it("should take two numbers and calculate the outcome according to the functions called", function() {
    var Calc = new calc_chain();
    var result = Calc.divide(14, 2).subtract(4).value();
    assert.equal(result, 3);
  })

  it("should take two numbers and calculate the outcome according to the functions called", function() {
    var Calc = new calc_chain();
    var result = Calc.multiply(3, 5).add(5).subtract(2).divide(3).value();
    assert.equal(result, 6);
  })

});
