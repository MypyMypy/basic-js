const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 1052, the output should be 52
 * For n = 452, the output shold be 95 
 */
function deleteDigit(n) {
  let arrayN = String(n).split('');
  for (let i = 1; i < arrayN.length; i++) {
    if (Number(arrayN[i]) === 0) {
      arrayN.splice(i, 1)
      return Number(arrayN.join(''))
    }

    if (arrayN[i] > arrayN[i - 1]) {
      arrayN.splice(i - 1, 1)
      return Number(arrayN.join(''))
    }
  }
}

module.exports = {
  deleteDigit
};
