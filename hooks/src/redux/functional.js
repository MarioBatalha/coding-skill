/* function greet(fn) {
 console.log(fn());
}

function sayHello() {
    return function() {
        return "Hello world";
    }
}

let fn = sayHello; */               

//Currying
const sum = a => b => a + b;
console.log(sum(23)(7));

const books = {title: 'Black and White', author: 'Mário Batalha', year: 2022}

console.log(book);
book.author = 'Amilton Silva';
console.log(book);