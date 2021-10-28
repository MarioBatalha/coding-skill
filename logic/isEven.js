const pairOrUnpair = number => {
    return number % 2 === 0 ?? number % 3 === 0;
}

console.log(pairOrUnpair(7))