function sing(callback) {
  console.log("la la la");
  if (callback) {
    callback();
  }
}

function meow() {
  console.log("meow meow");
}

console.log(sing(meow));
