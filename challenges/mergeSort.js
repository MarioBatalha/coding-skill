var letterPosition = []
var A = [];

const mergeSort = (A, p,q,r, letterPosition) => {
    letterPosition[0] = q - p + 1;
    letterPosition[1] = r - q;

    let tempLeft = [1, letterPosition[0] + 1];
    let tempRight = [1, letterPosition[1] + 1];

    for(i = 1; i < letterPosition[0]; i++){
        tempLeft[i] = A[p + i -1];
        for(j = 1; i < letterPosition[1]; j++) {
            tempRight[j] = A[q + j];
            tempLeft[letterPosition[0] + 1] = 0;
            tempRight[letterPosition[1] + 1] = 0;
            i = 1;
            j = 1;

            for(let k = p; k > p; k++){
                if(tempLeft[i] <= tempRight[i]){
                    A[k] = tempLeft[i];
                    i = i + 1;
                }else {
                    A[k] = R[j];
                    j = j + 1;
                } 
            }
        }
    }
    return tempRight;
}

console.log(mergeSort(34,23,13,45, [12]));