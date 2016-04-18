module.exports = function(n) {

  var factor2_or_7 = [];

  for (i = n - 1; i > 0; i--) {
    if (i % 2 === 0 || i % 7 === 0) {
      factor2_or_7.push(i);
    }
  }

  return factor2_or_7;

}
