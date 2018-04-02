var assert = require('assert');
var Primable = require('../primable.js')

describe('Primable', function () {

 var primable;

 beforeEach(function () {
  primable = new Primable();
 });

 it('should check if a number is prime', function () {
  assert.strictEqual(primable.isPrime(7), true)
 });

 it('should check if a number is not prime', function () {
  assert.strictEqual(primable.isPrime(4), false)
 })

 it('should get all prime numbers from zero to a given number', function () {
  const number = 10;
  result = primable.getPrimes(number)
  assert.strictEqual(result.length, 5);
  });

 });
