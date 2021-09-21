/*function returnThreeTimes(a,b) {
    return function(c,d) {
        return function(e,f) {
            return a * c * e + b * d * f
        }
    }
}*/

//Refactor
const returnThreeTimes = (a,b) => (c,d) => (e,f) => a * c * e + b * d * f;

console.log(returnThreeTimes(1,2)(3,4)(5,6));