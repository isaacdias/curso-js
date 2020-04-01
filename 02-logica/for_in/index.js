// for in com arrays 

const frutas = ['Pêra', 'Maçã', 'Uva'];

for (let indice in frutas) {
    console.log(frutas[indice]);
};

// for in utilizado em objetos

const pessoa = {
    nome: 'Isaac',
    sobrenome: 'Dias',
    Idade: 32,
};

for (let chave  in pessoa) {
    console.log(chave, pessoa[chave]);
};