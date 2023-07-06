function solve(sizeOfMatrix) {
  const printMatrix = function (size) {
    for (let row = 0; row < size; row++) {
      let matrix = ``;
      for (let col = 0; col < size; col++) {
        matrix += size + ` `;
      }
      console.log(matrix.trimEnd());
    }
  };
  printMatrix(sizeOfMatrix);
}
