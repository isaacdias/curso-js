console.log('-----------------------------------------------------------------');


const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(indice_que_inicia, quantidade_deletados, adiciona1, adiciona2, adciona3...);

console.log(nomes);
console.log('-----------------------------------------------------------------');

// remover o ultimo elemento
const exemplo = [...nomes];
exemplo.splice(4, 1);
console.log(exemplo);
console.log('-----------------------------------------------------------------');

// Retornando o elemento removido

/* splice retorna um array dos removidos
porque podemos remover mais de um elemento de uma vez.
*/

const exemplo2 = [...nomes];
const removidos = exemplo2.splice(3, 2);
console.log(removidos);
console.log('-----------------------------------------------------------------');

// Inserindo elementos no array

/*
Podemos utilizar o Number.MAX.VALUE para encontrar o 
ultimo indice do array.
*/
const exemplo3 = [...nomes];
exemplo3.splice(Number.MAX_VALUE, 0, 'Isaac');
console.log(exemplo3);
console.log('-----------------------------------------------------------------');

// remove o indice 3 e adiciona o elemento novo nesse mesmo indice
const exemplo4 = [...nomes];
exemplo4.splice(3, 1, 'Isaac');
console.log(exemplo4);
console.log('-----------------------------------------------------------------');

// adiciona um elemento e remove outros dois
const exemplo5 = [...nomes];
const removidos2 = exemplo5.splice(3, 2, 'Isaac');
console.log(exemplo5, removidos2);
console.log('-----------------------------------------------------------------');

// simulando a função pop();

const exemplo6 = [...nomes];
exemplo6.splice(-1, 1);
console.log(exemplo6);
console.log('-----------------------------------------------------------------');

// simulando a função shift();

const exemplo7 = [...nomes];
exemplo7.splice(0, 1);
console.log(exemplo7);
console.log('-----------------------------------------------------------------');
