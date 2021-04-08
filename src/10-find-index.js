/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let first = 0;
  let last = array.length - 1;
  let between = Math.round(last / 2);
  while (array[between] !== value && first < last) {
    if (array[between] < value) {
      first = between + 1;
    } else if (array[between] > value) {
      last = between - 1;
    }
    between = Math.round((first + last) / 2);
  }
  return Math.abs(between);
}

// console.log(findIndex([1,2,3,4,8], 8 ))

module.exports = findIndex;
