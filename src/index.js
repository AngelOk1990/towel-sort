
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = []
  for (let i = 0; i < matrix.length; i++) {
    for(j = 0; j < matrix[i].length; j++) {
          let k = i;
          result[k] = matrix[i];
      k++;
      }
      return result;
  }
}
