let totalAmount = 0;
let values = [12.5, 9.9, 10.7, 22.29];

for(let value in values) {
 totalAmount += values[value]; 
};

console.log(Math.floor(totalAmount));