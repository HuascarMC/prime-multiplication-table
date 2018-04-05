var assert = require('assert');
var ArrayChanger = require('../array_changer');

describe('ArrayChanger', function () {

 var arrayChanger;

 beforeEach(function () {
  arrayChanger = new ArrayChanger();
 });

 it('should increase an array by a given value between 1-10', function () {
  const array = [2, 3, 5, 7, 9];
  const actualResult = arrayChanger.increaseArray(array, 2);
  const expectedResult = [4, 6, 10, 14, 18]
  assert.deepEqual(actualResult, expectedResult)
 });

 it('should increase an array by a given value between 11-20', function () {
  const array = [6, 9, 15, 21, 27];
  const actualResult = arrayChanger.increaseArray(array, 20);
  const expectedResult = [120, 180, 300, 420, 540]
  assert.deepEqual(actualResult, expectedResult)
 })

 it('should increase an array by a given value between 60-67', function () {
  const array = [2, 3, 5, 7, 9];
  const actualResult = arrayChanger.increaseArray(array, 66);
  const expectedResult = [132, 198, 330, 462, 594]
  assert.deepEqual(actualResult, expectedResult)
 })

});
