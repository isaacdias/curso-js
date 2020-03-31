const pessoa = {
    nome: 'Isaac',
    sobrenome: 'Dias',
    idade: 32,
    endereco: {
        rua: 'Boa Ventura',
        numero: 65,
        cidade: 'Recife'
    }
}

/* Na atribuição por desestruturação com objeto, a variavel precisa 
ter o mesmo nome do atributo
*/
const { nome, idade, endereco } = pessoa;
console.log(nome, idade, endereco);    