module.exports = function(char) {

  var draw = require("./draw");

  var stringList = [];
  var str = "";

  for (j = 0; j < 4; j++) {
    for (i = 0; i < 4; i++) {
      str += (" " + char);
    }
    str += "\n";
  }
  stringList.push(str);

  return draw(stringList);

};
