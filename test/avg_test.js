var assert = require ('assert');
var avg = require ('../avg');

describe ('avg', function(){
  it ('should return the average word length rounded up', function(){
    assert.equal(avg('This has been a very interesting day'), 5 )
  })
})
