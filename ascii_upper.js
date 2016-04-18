module.exports = function() {

  var asciiUpperTotal = 0;

  var str = "A";

  for (var i = str.charCodeAt(); i < (str.charCodeAt() + 26); i++) {
    asciiUpperTotal += i;
  }

  return asciiUpperTotal;

}
