/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const Set1 = {};
  const Set2 = {};
  const Set3 = {};
  s1.split('').sort().forEach((q) => {
    if (q in Set1) {
      Set1[q]++;
    } else {
      Set1[q] = 1;
    }
  });

  // console.log(Set1)

  s2.split('').sort().forEach((q) => {
    if (q in Set2) {
      Set2[q]++;
    } else {
      Set2[q] = 1;
    }
  });

  // console.log(Set2);

  Object.keys(Set1).forEach((key) => {
    if (key in Set2) {
      Set3[key] = Math.min(Set1[key], Set2[key]);
    }
  });
  let count = 0;

  // console.log(Object.keys(Set3));
  Object.keys(Set3).forEach((key) => {
    count += Set3[key];
  });

  return count;
}

module.exports = getCommonCharacterCount;
