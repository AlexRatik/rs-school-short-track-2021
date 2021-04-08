/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arrOFindex = [];
  arr.forEach((el, i) => {
    if (el === -1) arrOFindex.push(i);
  });
  let endArr = arr.filter((element) => element !== -1).sort((a, b) => a - b);
  arrOFindex.forEach((ind) => {
    endArr = endArr.slice(0, ind).concat(-1).concat(endArr.slice(ind));
  });
  return endArr;
}
// arr = [-1, 150, 190, 170, -1, -1, 160, 180];
// console.log(sortByHeight(arr));
module.exports = sortByHeight;
