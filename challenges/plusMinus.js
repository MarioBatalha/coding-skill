function plusMinus(arr) {
   let positive = arr.filter(number => number > 0).length / arr.length;
   let  negative = arr.filter(number => number < 0).length / arr.length;
   let zeroNums = arr.filter(number => number == 0).length / arr.length;
   return console.log(positive.toFixed(6) + '\n' + negative.toFixed(6) + '\n' + zeroNums.toFixed(6))
}

console.log(plusMinus([-4, 3, -9, 0, 4, 1]));