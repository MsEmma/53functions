var assert = require ('assert');
var letter_map = require ('../letter_map');

describe ('letter_map', function (){

  it ('should return a map of the letters in a sentence', function(){
    var result = letter_map("Lets do this today");
    assert.deepEqual(result, { "L" : ["Lets"], "d" : ["do"], "t" : ["this", "today"]});
  })

})
