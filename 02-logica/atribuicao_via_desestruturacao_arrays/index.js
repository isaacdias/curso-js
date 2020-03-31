let a = 'A';
let b = 'B';
let c = 'C';

/*
o que está do lado esquerdo é a desestruturação das variaveis 
sedo reatribuidas com o valor array ao lado.
*/
const numeros = [1, 2, 3];
[a, b, c] = numeros; 

console.log(a, b , c);