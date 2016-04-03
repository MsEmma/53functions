module.exports = function() {

  var draw = require("./draw");

  var stringList = [];
  var str = "";

  // top
  for (i = 1; i <= 5; i += 2) {
    for (k = 0; k < ((5 - i) / 2); k++) {
      str += (" ");
    }

    for (j = 1; j <= i; j++) {
      str += ("*");
    }
    str += "\n";
  }

  // bottom
  for (i = 5 - 2; i >= 0; i = i - 2) {
    for (k = 0; k < ((5 - i) / 2); k++) {
      str += (" ");
    }
    for (j = 1; j <= i; j++) {
      str += ("*");
    }
    str += "\n";
  }

  stringList.push(str);

  return draw(stringList);
}
