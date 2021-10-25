
let number = [12,5,4,6,8,9,76];

/*for(let i = 0; i < number.length; i++) {
    let sum += number[i];
}*/

const sum = number.reduce((value, valueArr) => {
    return value + valueArr;
}); 

console.log(sum);
