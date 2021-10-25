let divisibleByThreeAndFive = Array(100)
  .fill(0)
  .map((e, i) => i + 1)
  .filter((e) => e % 3 === 0 && e % 5 === 0);

//Output: [ 15, 30, 45, 60, 75, 90 ]