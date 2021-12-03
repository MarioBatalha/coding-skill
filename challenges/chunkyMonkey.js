var arr = [];
const chunkArrayInGroups = (arr, size) => {
    let newArr = [];
    for(let i = 0; i < arr.length; i += size) {
        newArr.push(arr.slice(i, i + size));
    }

    return newArr;
}
console.log(chunkArrayInGroups([12,45,2,6,7], 2));