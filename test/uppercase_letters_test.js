var assert = require('assert');
var uppercase_letters = require("../uppercase_letters");

describe ("uppercase_letters",function(){
  it ("should return all the uppercase letters in a string", function(){
    var result = uppercase_letters("EggCeptIonaL");
    assert.deepEqual(result,["E","C","I","L"] )
  })
})
