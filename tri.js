module.exports = function() {

  var draw = require("./draw");

  var stringList = [];

  for (var string = "* "; string.length < 10; string += "* ")

    stringList.push(string)

  return draw(stringList);

}
