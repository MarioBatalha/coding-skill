const max = (...args) => {
    return Math.max.apply(Math, ...args);
};

console.log(max([345.1, 345.01, 345.009, 345]));