let vals = [5,4,1,2,9];



/* let biggest = vals.reduce((acc, val) => {
    if(val > acc) {
        acc = val
    }
    return acc
}); */
 let biggest = vals.reduce((a, b) => b > a ? b : a);
console.log(biggest);
