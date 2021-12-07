const bonAppeit = (bill, k, b) => {
    const sum = bill.reduce((r,v) => r + v, 0);
    const result = (sum - bill[k] ) / 2;

    if(b - result === 0) console.log('Bon Appetit');
    else console.log(b - result);
}