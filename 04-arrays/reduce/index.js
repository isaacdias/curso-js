// Reduce

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Soma dos valores do array
const total = numeros.reduce(function(acumulador, valor) {
    acumulador += valor
    return acumulador;
}, 0);
console.log(total);


const pessoas = [
    { nome:'Luiz', idade: 62 },
    { nome:'Maria', idade: 23 },
    { nome:'Eduardo', idade: 55 },
    { nome:'Leticia', idade: 19 },
    { nome:'Rosana', idade: 32 },
    { nome:'Wallace', idade: 47 },
];

// Retornar a pessoa mais velha do array
const pessoaMaisVelha = pessoas.reduce(function(acumulador, obj) {
    if (acumulador.idade > obj.idade) return acumulador;
    return obj;
});
console.log(pessoaMaisVelha);