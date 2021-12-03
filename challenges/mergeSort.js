let arr = [];

function sortItems(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
         }
    }

    return arr;
}

console.log(sortItems([12,2,3,467,90, 0, 6,10]));