const first = [8, 6, 8, 6, 7, 4, 7];

const second = [4, 5, 5, 7, 5, 5, 9];

const third = [3, 3, 2, 8, 7, 6, 5];

const count = data => {
    return data.reduce((total, item, index) => {
        const match = item === data[index + 2] && item !== data[index + 1];
        if(match) return total + 1
        return total
    }, 0);
} 

console.log(count(first));