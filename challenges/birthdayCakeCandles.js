const birthdayCakeCandles = arr => {
    const candles = arr.filter(value =>  Math.max(...arr) === value);
    return candles.length;
}


/* function birthdayCakeCandles(ar) {
    var maxHeight = Math.max(...ar);
    var maxHeightCount = 0;  
    for(var i = 0; i < ar.length; i++){
        if (ar[i] == maxHeight){
            maxHeightCount = maxHeightCount + 1;
        }
    }
    console.log(maxHeightCount);
     return maxHeightCount;
} */
console.log(birthdayCakeCandles([120,23,2,40]));