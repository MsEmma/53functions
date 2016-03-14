module.exports = function(sentence) {

  var wordLengths = [];
  var totalLength = 0;
  var avgArray = [];
  var words = sentence.split(' ');

  words.forEach(function(word) {
    wordLengths.push(word.length);
  })

  wordLengths.forEach(function(length) {
    totalLength += length;
  })

  var avgWordLength = (totalLength / words.length);
  var upAvgWordLength = Math.ceil(avgWordLength)
  var downAvgWordLength = Math.floor(avgWordLength)

  avgArray.push(upAvgWordLength);
  avgArray.push(downAvgWordLength);

  return avgArray;

}
