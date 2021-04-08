/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let sum = 10;
  let cur = n;
  while (sum.toString().length !== 1) {
    sum = 0;
    const nArr = cur.toString().split('');
    for (let i = 0; i < nArr.length; i++) {
      sum += Number.parseInt(nArr[i], 10);
    }
    cur = sum;
  }
  return sum;
}

// console.log(getSumOfDigits(1980));

module.exports = getSumOfDigits;
