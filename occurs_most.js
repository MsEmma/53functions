module.exports = function(sentence) {

  var sentence = "Can you calculate and add and subtract the product of the sum";
  var words = sentence.split(' ');
  var string = '';

  words.forEach(function(word) {
    string += word;
  });

  var letterFreqMap = {};
  for (var i = 0; i < string.length; i++) {
    var letter = string.charAt(i);
    if (letterFreqMap[letter]) {
      letterFreqMap[letter]++;
    } else {
      letterFreqMap[letter] = 1;
    }
  }

  var freqArray = [];

  for (var char in letterFreqMap) {
    freqArray.push(letterFreqMap[char]);
  }

  var most = Math.max.apply(null, freqArray);
  var frequentLetters = [];

  for (var char in letterFreqMap) {
    if (letterFreqMap[char] === most) {
      frequentLetters.push(char);
    }
  }

  return (frequentLetters);
}
