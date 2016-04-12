module.exports = function(x, y, symbol) {

  switch (symbol) {
    
    case "+":
      return x + y;
      break;

    case "-":
      return x - y;
      break;

    case "*":
      return x * y;
      break;

    case "/" :
    return x / y;
    break;

    default:
      return "Not a mathematical symbol, try again";

  }
}
