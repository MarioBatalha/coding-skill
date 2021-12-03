const fat = n => {
    if(n === 0) return 1;
    if(n === 1) return 1;
    return n * fat(n - 1);
}
console.log(fat(5));