let num1 = 15;
let num2 = 2.5569858;
let num3 = 0.7
let num4 = 0.1

console.log(num1.toString() + num2); // convertendo temporariamente o num1 para string
console.log(num1.toString(2)); // representação da forma binaria
console.log(num2.toFixed(2)); // arrendodamento para apenas duas casas decimais
console.log(Number.isInteger(num1)); // retorna se o numero é inteiro ou não 
console.log(Number.isNaN(num2)); // retorna se o numero é um NaN

num3 += num4;
num3 += num4;
num3 += num4;
num3 =Number(num3.toFixed(2)); // transformar um numero decimal em inteiro (corrigindo a impresião)
console.log(num3);
console.log(Number.isInteger(num3));



