module.exports = function(x, y) {

  this.result = 0;

  this.value = function() {
    return this.result;
  }

  this.multiply = function(x, y) {
    if (y !== undefined) {
      this.result = x * y;
    } else {
      this.result = this.result * x;
    }
    return this;
  }

  this.divide = function(x, y) {
    if (y !== undefined) {
      this.result = x / y;
    } else {
      this.result = this.result / x;
    }
    return this;
  }

  this.add = function(x, y) {
    if (y !== undefined) {
      this.result = x + y;
    } else {
      this.result = this.result + x;
    }
    return this;
  }

  this.subtract = function(x, y) {
    if (y !== undefined) {
      this.result = x - y;
    } else {
      this.result = this.result - x;
    }
    return this;
  }

}
