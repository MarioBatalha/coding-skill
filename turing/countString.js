var countElements = function (arr) {
	return new Set(arr).size;
};

var arr = "1 1 2 2 9 8 10 12 30".split(" ").map((num) => parseInt(num));

console.log(countElements(arr));
