//Estilo de código Imperativo
//Cálculo de factorial usando iteração

var result = 1;
function factorial(n) {
    for(let i = n; i > 1; i--) {
      result *= i;
    }
    return result;
}


//Estilo de código Declarativo
//Cálculo de factorial usando Recursão

 const factorialRecursive = n => {
    if(n === 0) return 1;
    if(n === 1) return 1;
    return n * factorialRecursive(n - 1);
}