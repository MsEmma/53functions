var assert = require('assert');
var lowercase_letters = require("../lowercase_letters");

describe ("lowercase_letters",function(){
  it ("should return all the lowercase letters in a string", function(){
    var result = lowercase_letters("EggCeptIonaL");
    assert.deepEqual(result,["g","g","e","p","t","o","n","a"] )
  })
})
