var assert = require ('assert');
var word_length = require ('../word_length');

describe ('word_length', function (){
  it ('should return the average word length rounded up and rounded down', function() {
    var result = word_length("Today has been a very interesting day");
    assert.deepEqual (result, [5, 4]);
  })
})
