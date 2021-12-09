const squareMatrix = (A, B) => {
    let n = A;
    let C = [n][n];

    for(let i = 1; i < n; i ++) {
        for(let j = 1; j < n; j++) {
            C = 0;
            for(let k = 1; k < n; k++) {
                C += (A * B)
            }
        }
    }
    return C;
}

console.log(squareMatrix(3,3));