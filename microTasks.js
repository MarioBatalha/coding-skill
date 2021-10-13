const promise = new Promise(resolve => {
    resolve(1);
    Promise.resolve().then(() => console.log(2));
}).then(t => console.log(t));

console.log(3);