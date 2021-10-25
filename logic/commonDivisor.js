function commonDivisor(a, b) {
  let min = Math.min(a, b);
  let max = min === a ? b : a;

  if (max % min === 0) {
    return min;
  } else {
    let mid = Math.floor(max / 2);
    let divisor = [];
    for (let i = mid; i > 0; i--) {
      if (max % i === 0 && min % i === 0) {
        return i;
      }
    }
    return divisor;
  }
}

console.log(commonDivisor(5, 15));
