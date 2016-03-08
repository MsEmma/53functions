module.exports = function (array){
  this.highest = function (){
    return Math.max.apply(null,array);
  }
  this.lowest = function (){
    return Math.min.apply(null,array);
  }
};
