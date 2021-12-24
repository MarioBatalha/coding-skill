const covidData = [
    [
        123,
        45,
        23,
        900,
        712,
        712,
        712,
        712,
        712,
        712,
        712,
        712,
        712,
        712,
        712,
        712,
        342,
        23,
        45,
        645,
        789
    ],
    [
        123,
        456,
        789,
        987,
        654,
        321,
        246,
        135,
        456,
        789,
        789,
        543,
        1244,
        7789,
        900,
        654,
        2344,
        5533,
        234,
        2234,
        577,
    ], 
    [
        456,
        345,
        6798,
        21,
        333,
        456,
        786,
        234,
        432,
        123,
        45,
        444,
    ]
]

const compressCovidData = covidData.reduce((acc,cur) => ([...acc, ...cur]), [])

const casePredict = term => {
    var rationality = compressCovidData[1] + 1 - compressCovidData[0] - 1;

    globalTerm = compressCovidData[0] + (term - 1) * rationality; 
    return Math.abs(globalTerm);
}

console.log(casePredict(12));