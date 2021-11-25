const AP = [];
const term = [];

const arithmeticalProgression = (AP, term) => {
  var rationality = AP[1] + 1 - AP[0] - 1;

  for (let i = 0; i <= term.length; i++) {
    globalTerm = AP[0] + (term[i] - 1) * rationality;
    return globalTerm;
  }
};

console.log(arithmeticalProgression([20, 40, 60, 80], [8,6,7]));
