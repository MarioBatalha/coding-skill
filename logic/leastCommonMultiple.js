function leastCommonMultiple(x, y) {
    if((typeof x !== 'number') || (typeof y !== 'number'))
    return false;
    return (!x || !y) ? 0 : Math.abs((x * y) / greatestCommon(x, y) )
};

function greatestCommon(x, y) {
    x = Math.abs(x);
    y = Math.abs(y);

    while(y) {
        var t = y;
        y = x % y;
        x = t;
    }
    return x; 
};

console.log(leastCommonMultiple(3,15));