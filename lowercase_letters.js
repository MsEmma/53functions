module.exports = function(string) {

  var lowercase_letters = [];

  for (i = 0; i < string.length; i++) {
    if (string[i] === string[i].toLowerCase()) {
      lowercase_letters.push(string[i]);
    }
  }

  return (lowercase_letters);
}
