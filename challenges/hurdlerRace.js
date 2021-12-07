let height = [1,2,3,3,2];
let k = 2;

const hurdlerRace = (k, height) => {
    let heightSort = height.sort(function (a, b) {
        return a - b;
    });

    if(heightSort[heightSort.length - 1] > k) {
        return heightSort[heightSort.length - 1] - k;
    } else {
        return 0;
    }
}
//console.log(hurdlerRace(k, height));