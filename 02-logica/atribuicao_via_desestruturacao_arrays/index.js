let a = 'A';
let b = 'B';
let c = 'C';

/*
o que está do lado esquerdo é a desestruturação das variaveis 
sedo reatribuidas com o valor array ao lado.
*/
const letras = [b, c ,a];
[a, b, c] = letras; 

/*
Após o codigo acima as variaveis receberão os valores de acordo com os valores anteriores.
a = valor de b
b = valor de c
c recebe valor de a
*/

console.log(a, b , c);

// Outro exemplo

const numeros = [1, 2, 3, 4, 5, 6,];
let [primeiroNumero, segundoNumero, terceiroNumero, 
    quartoNumero, quintoNumero, sextoNumero] = numeros; // aqui atribui os valores do array em variaveis separadas deuma vez só.

console.log(primeiroNumero, segundoNumero, terceiroNumero, 
    quartoNumero, quintoNumero, sextoNumero);

// Atribuindo array em variaveis distintas + o resto em uma só variavel usando o operador ...(rest)
const numeros2 = [1000, 2000, 3000, 4000, 5000, 6000,];
let [primeiroNumero2, segundoNumero2, ...resto] = numeros2; // aqui atribui os valores do array em variaveis separadas deuma vez só.
console.log(primeiroNumero2, segundoNumero2, resto);


// Atribuindo os valores saltando um numero a cada atribuição
const numeros3 = [1000, 2000, 3000, 4000, 5000, 6000,];
let [primeiroNumero3, , terceiroNumero3, , quintoNumero3] = numeros2; // aqui atribui os valores do array em variaveis separadas deuma vez só.
console.log(primeiroNumero3, terceiroNumero3, quintoNumero3);

// Acessando indics de uma array dentro de outro array

numeros4 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]; // um array com outros arrays dentro dele
console.log(numeros4[2][0]); // acessando o numero 7 

// desestruturação com array dentro de array

let [lista1, lista2, lista3] = numeros4;
console.log(lista2[1]);

