// Map altera os valores do array, porém não altera o array original

// Dobre os valores do array
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(obj => obj * 2);
console.log(numerosEmDobro);


const pessoas = [
    { nome:'Luiz', idade: 62 },
    { nome:'Maria', idade: 23 },
    { nome:'Eduardo', idade: 55 },
    { nome:'Leticia', idade: 19 },
    { nome:'Rosana', idade: 32 },
    { nome:'Wallace', idade: 47 },
];

// Retornar apenas os nomes dos objetos do array
const nomes = pessoas.map(obj => obj.nome);
console.log(nomes);

// Retornar apenas as idades dos objetos
const idades = pessoas.map(obj => obj.idade);
console.log(idades);

// Adicionar um indice nos objetos
const id = pessoas.map(function(obj, indice) {
     const newObj = {...obj};
     newObj.id = indice + 1;
    return newObj;
 });
 console.log(id);