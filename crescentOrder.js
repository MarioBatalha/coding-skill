let arr = [10,100,500,20,35];

arr.forEach(item => {
    setTimeout(() => console.log(item), item)
});