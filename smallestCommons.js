function smallestCommons(arr) {
    var max = Math.max(...arr);
    var min = Math.min(...arr);
    var candidate = max;
  
    var smallestCommon = function(low, high) {
      // inner function to use 'high' variable
      function scm(l, h) {
        if (h % l === 0) {
          return h;
        } else {
          return scm(l, h + high);
        }
      }
      return scm(low, high);
    };
  
    for (var i = min; i <= max; i += 1) {
      candidate = smallestCommon(i, candidate);
      return Math.floor(candidate);
    }
  
    return candidate;
  }

console.log(smallestCommons([15,100]));