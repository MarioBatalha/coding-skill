var sort = [];

const insertionSort = sort => {
    for(var i = 1; i < sort.length; i++) {
        var current = sort[i];
        var j = i - 1;
        while(j >= 0 &&  sort[j] > current) {
            sort[j + 1] = sort[j];
            j--;
            console.log(sort[j])
        }
        return sort[j + 1] = current;
    }
}
console.log(insertionSort([0,1,23,2,-1,22,3]));
