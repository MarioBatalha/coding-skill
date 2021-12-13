const diagonalDiference = (matrix) => {
    const length = matrix.length;
    let diagonal1 = 0, diagonal2 = 0;

    for(let i = 0; i < length; i++) {
        diagonal1 += matrix[i][i];
        diagonal2 += matrix[length - 1 - i][i]
    }

    return Math.abs(diagonal1 - diagonal2);
} 