module.exports = function(char, base) {

  var draw = require("./draw");

  var stringList = [];
  var str = "";

  // top
  for (i = 1; i <= base; i += 2) {
    for (k = 0; k < ((base - i) / 2); k++) {
      str += (" ");
    }

    for (j = 1; j <= i; j++) {
      str += (char);
    }
    str += "\n";
  }

  // bottom
  for (i = base - 2; i >= 0; i = i - 2) {
    for (k = 0; k < ((base - i) / 2); k++) {
      str += (" ");
    }
    for (j = 1; j <= i; j++) {
      str += (char);
    }
    str += "\n";
  }

  stringList.push(str);

  return draw(stringList);

}
