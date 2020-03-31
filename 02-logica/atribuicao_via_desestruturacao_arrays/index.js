let a = 'A';
let b = 'B';
let c = 'C';

/*
o que está do lado esquerdo é a desestruturação das variaveis 
sedo reatribuidas com o valor array ao lado.
*/
const letras = [b, c ,a];
[a, b, c] = numeros; 

/*
Após o codigo acima as variaveis receberão os valores de acordo com os valores anteriores.
a = valor de b
b = valor de c
c recebe valor de a
*/

console.log(a, b , c);