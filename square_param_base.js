module.exports = function(char, base) {

  var draw = require("./draw");

  var stringList = [];
  var str = " ";

  for (j = 0; j < base; j++) {
    for (i = 0; i < base; i++) {
      str += (" " + char);
    }
    str += "\n ";
  }

  stringList.push(str);

  return draw(stringList);

}
