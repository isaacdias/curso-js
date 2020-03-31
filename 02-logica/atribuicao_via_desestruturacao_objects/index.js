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

/* Na atribuição por desestruturação com objeto, a variavel  
tem o mesmo nome do atributo e logo já busca o valor desse atributo.
*/
const { nome, idade, endereco } = pessoa;
console.log(nome, idade, endereco);    

/*
Exemplo para fazer o mesmo mas mudando o nome das variaveis
*/

const { nome: nomeUsuario, idade: idadeUsuario, endereco: enderecoUsuario } = pessoa;
console.log(nomeUsuario, idadeUsuario, enderecoUsuario);    