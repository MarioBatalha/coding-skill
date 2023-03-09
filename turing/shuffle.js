let arr = ["a", "b", "c", "d", "e"];

arr.forEach((value, key) => {
	let randomIndex = Math.ceil(Math.random() * (key + 1));
	arr[key] = arr[randomIndex];
	console.log(randomIndex);
	arr[randomIndex] = value;
});

console.log("shuffled array: " + arr);
