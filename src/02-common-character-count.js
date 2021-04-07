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
  let length1 = s1.length;
  let length2 = s2.length;
  let maxS = '';
  let minS = '';
  if (length1 > length2) {
    maxS = s1;
    minS = s2;}
  else{
    maxS = s2;
    minS=s1;
  }
  for (let  i = 0; i < Math.max(length1, length2); i++) {

  }
}

s1 = "aabcc";
s2 = "adcaa";
s1.split('').sort();
s2.split('').sort();



module.exports = getCommonCharacterCount;
