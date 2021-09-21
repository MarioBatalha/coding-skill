/*var result = 1;
function factorial(n) {
    for(var i = n; i > 1; i--) {
      result = result * i;
    }
    return result;
}*/

const factorialRecursive = (n) => {
    if(n === 0) return 1;
    if(n === 1) return 1;
    return n * factorialRecursive(n - 1);
}

console.log(factorialRecursive(5));