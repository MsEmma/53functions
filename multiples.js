module.exports = function(n) {

  var list = [];
  var total = 0;

  var count = function(n) {
    total += n;
    return total;
  }

  this.count = function(){
    this.total = count(n);
    list.push(this.total);
    console.log(list);
    return this
  }  
}
