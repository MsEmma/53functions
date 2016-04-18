module.exports = function(n) {

  var factor2 = [];

  for (i = n - 1; i > 0; i--) {
    if (i % 2 === 0) {
      factor2.push(i);
    }
  }

  return factor2;

}
