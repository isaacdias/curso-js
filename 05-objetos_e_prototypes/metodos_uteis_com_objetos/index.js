const produto = {
    nome: 'Caneca',
    preco: 1.8,
};

// Copiar um objeto utilizando o spred

const produto2 = {
    ...produto,
    marca: 'Desconhecida' // também posso criar outras elementos no objeto copiado
};
produto2.nome = 'Grampeador';
produto2.preco = 5.5;

console.log(produto);
console.log(produto2);


// Copiar utilizabndo o assign()
const produto3 = Object.assign({}, produto, {marca: 'Bic'});
produto3.nome = 'Caneta';
produto3.preco = '0.5';
console.log(produto3);

// Object.keys() retorna as chaves do objeto
console.log(Object.keys(produto));

// Object.freeze() congela o objeto

// Object.getOwnPropertyDescriptor() retorna as propriedades da chave do objeto
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

// Object.values retorna os valores do objeto
console.log(Object.values(produto));

// Object.entries retorna os valores do obketo dentro de um array
console.log(Object.entries(produto));

