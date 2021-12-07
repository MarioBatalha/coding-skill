var numbers = [12,34,56,7,12,90];
const destroyer = arr => {
    let valsToRemove = Array.from(arguments).slice(1);

    return arr.filter(function(val) {
        return !valsToRemove.includes(val)
    })
}

console.log(destroyer(numbers));

const noRepeatNumbers = [...new Set(numbers)];
console.log(noRepeatNumbers);