/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = n.toString().split('');
  let min = 10;
  arr.forEach((el) => {
    if (el < min) min = el;
  });
  const ind = arr.indexOf(min);
  arr.splice(ind, 1);
  const s = arr.join('');
  return Number.parseInt(s, 10);
}
// console.log(deleteDigit(145126371));
module.exports = deleteDigit;
