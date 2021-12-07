const aVeryBigSum = arr => {
    let sum = (accumulator, currentValue) => accumulator + currentValue;
    return arr.reduce(sum);
}

console.log(aVeryBigSum([12,34,5,2021,8,9]));