const arithmeticalProgression = (AP, term) => {
    var rationality = AP[1] + 1 - AP[0] - 1;

    globalTerm = AP[0] + (term - 1) * rationality;
    return globalTerm; 
};

console.log(arithmeticalProgression([20, 40, 60, 80], 8));
