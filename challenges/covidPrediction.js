const covid19Data = [2,8,14,20,26];

const covidPrediction = predictNumber => {
    var rationality = covid19Data[1] + 1  - covid19Data[0] - 1;
    
    var globalTerm = covid19Data[0] + ( predictNumber - 1) * rationality;
    return globalTerm;
}

console.log(covidPrediction(10));
