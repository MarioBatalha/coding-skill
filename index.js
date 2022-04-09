function process(item) {
    return item * 2;
}
const a = [1,2,3,4,5];
const result = [];
for(const item of a) {
    result.push(process(item))
}

console.log(result)