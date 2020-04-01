// for of já retorna o valor e não o indice.

// Só funciona com valor iterável

const nomes = ['Isaac', 'Rafael', 'Luiz'];

for (let valor of nomes){
    console.log(valor);
};

// for -> geralmente funciona com iteráveis (arrays, strings)
// for in -> retorna indice ou chave (string, array ou objeto)
// for of -> retorna o valor (iteráveis)