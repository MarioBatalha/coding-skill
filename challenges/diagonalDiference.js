const diagonalDifference = (arr) => {
    var n = arr.length;
    var diag1 = 0;
    var diag2 = 0;
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            // an element from the main diagonal
            if(i === j) { 
                diag1 += arr[i][j];
            }
            // an element from the counterdiagonal
            if(i + j === n - 1){
                diag2 += arr[i][j];
            }
        }
    }
    return Math.abs(diag1 - diag2);
} 

console.log(diagonalDifference([[1,2,3], [4,5,6], [9,8,9]]))