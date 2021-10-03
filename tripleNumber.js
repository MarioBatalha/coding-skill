/*let arr = [10,20,30,4,68];
let newArr = []; 

for(let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 3);
}*/

let arr = [10,20,30,4,68];

const newArr = arr.map(number => {
    return number * 3;
})

console.log(newArr);