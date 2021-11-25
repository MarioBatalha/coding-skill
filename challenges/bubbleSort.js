const A = [];

const bubbleSort = function(A) {
    for(let i = 1; i < A.length; i++) {
        for(let j = 1; j < A.length; j++) {
            if(A[j] < A[j - 1]);
            var temp = A[j];
            A[j] = A[j - 1];
            A[j - 1] = temp;
        }
        return A;
    }
};

console.log(bubbleSort([1, 3, 0, 10,24, 12]));