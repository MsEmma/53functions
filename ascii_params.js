module.exports = function(str) {

  var asciiSum = 0;

  for (var i = 0; i < str.length; i++) {

    asciiSum += str.charCodeAt(i);
  }

  return asciiSum;

}
