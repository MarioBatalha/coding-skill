const AP = [];

const arithmeticalProgression = (AP,term) => {
    var rationality = AP[1] + 1  - AP[0] - 1;
    
    var globalTerm = AP[0] + ( term - 1) * rationality;
    return globalTerm;
}

console.log(arithmeticalProgression([20,40,60,80], 12));
//outuput: 240


console.log(arithmeticalProgression([34,12,68,89,100], 7));
//outuput: -98

