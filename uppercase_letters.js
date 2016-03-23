module.exports = function(string) {

  var uppercase_letters = [];

  for (i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      uppercase_letters.push(string[i]);
    }
  }

  return (uppercase_letters);
}
