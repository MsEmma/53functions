module.exports = function(str){

  var lowerAsciiSum = 0;

  for (var i = 0; i < str.length; i++){

    if( str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123){
      lowerAsciiSum += str.charCodeAt(i);
    }
  }

  return  lowerAsciiSum;
}
