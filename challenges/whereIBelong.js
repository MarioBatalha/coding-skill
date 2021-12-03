let arr = [];
const getIndexToIns = (arr, num) => {
    arr.sort((a, b) => a - b);

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] >= num)
        return i;
    }

    return arr.length;
}

console.log(getIndexToIns([12,34,6,8,90], 13));