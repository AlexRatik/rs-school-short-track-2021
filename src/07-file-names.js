/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const arrNames = [...names];
  for (let i = 0; i < arrNames.length; i++) {
    let k = 1;
    for (let j = i + 1; j < arrNames.length; j++) {
      if (arrNames[i] === arrNames[j]) {
        arrNames[j] = `${arrNames[j]}(${k})`;
        k++;
      }
    }
  }
  return arrNames;
}
// let n =["file", "file", "image", "file(1)", "file"];
// console.log(renameFiles(n));
module.exports = renameFiles;
