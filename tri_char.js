module.exports = function(char) {

  var draw = require("./draw");

  var stringList = [];
  var str = "";

  for (var i = 1; i < 5; i++) {
    for (var j = 0; j < i; j++) {
      str += ('' + char);
    }
    str += "\n";
  }

  stringList.push(str);

  return draw(stringList);

}
