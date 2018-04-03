var Primable = function () {

}

Primable.prototype.isPrime = function(number) {
 if(number % 2 === 0 && number !== 2) {
  return false
 }
 return true
}

Primable.prototype.getPrimes = function(number) {
 var result = [];
 for(var i = 2; i < number; i++) {
   if(this.isPrime(i)) {
    result.push(i);
   }
  }
  if (this.isPrime(number)) {
   result.push(number)
  }
 return result;
}

Primable.prototype.increaseArray = function(array, value) {
 return array.map(function(number) {
  return(number*value)
 })
}


module.exports = Primable;
