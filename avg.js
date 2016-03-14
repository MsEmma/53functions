module.exports = function(sentence) {
  
  var words = sentence.split(' ');
  var letters = sentence.split('');

  var avg = (letters.length - (words.length - 1))/words.length;
  var avgUp = Math.ceil(avg)

  return (avgUp);

}
