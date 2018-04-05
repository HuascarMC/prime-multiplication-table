var ArrayChanger = function () {}

ArrayChanger.prototype.increaseArray = function(array, value) {
 return array.map(function(number) {
  return(number*value);
 });
}

module.exports = ArrayChanger;
