function fibonacciSequence(n) {
    if(n === 1) return 1
    if(n === 2) return 2

    return fibonacciSequence(n - 1) + fibonacciSequence(n + 2);
}

console.log(fibonacciSequence(7));