/* */
function minMaxArray(array) {
  if (!isNaN(array)) {
    return [array, array];
  }

  if (typeof (array) === typeof ("string")) {
    return null;
  }
  for (let i of array) {
    if (isNaN(i)) {
      return false;
    }
  }
  array.sort((a, b) => a - b);
  return [array[0], array[array.length - 1]];
}

module.exports = minMaxArray;
