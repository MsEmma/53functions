module.exports = function(char, l, w) {

  var draw = require("./draw");

  var stringList = [];
  var str = " ";

  for (j = 0; j < l; j++) {
    for (i = 0; i < w; i++) {
      str += (" " + char);
    }
    str += "\n ";
  }

  stringList.push(str);

  return draw(stringList);

};
