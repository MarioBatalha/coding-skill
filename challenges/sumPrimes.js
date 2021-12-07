const sumPrimes = num => {
    var val = Array.from({length: num}, (_, i) => i + 1)

    val = val.filter((number) => {
        for(var i = 2; i < number; i ++) {
            if(number % i === 0) {
                return false;
            }
        }
        return number > 1 
    }).reduce(function(a, b){
        return a + b
    })
    return val
}

console.log(sumPrimes(10));