module.exports = function(n) {

  var total = 1;

  for (i = n; i > 0; i--) {
    total *= i;
  }

  return total;
}
