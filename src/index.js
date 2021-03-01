module.exports = function towelSort(matrix) {

    let newMatrix = [];

    if (matrix === undefined || matrix.length == 0) {
        return newMatrix;
    }

    for (let i = 0; i < matrix.length; i++) {
        if ((i + 1) % 2 !== 0) {
            for (let j = 0; j < matrix[i].length; j++) {
                newMatrix.push(matrix[i][j]);
            }

        } else {
            for (let j = matrix[i].length - 1; j >= 0; j--) {
                newMatrix.push(matrix[i][j]);
            }
        }
    }
    return newMatrix;
}
