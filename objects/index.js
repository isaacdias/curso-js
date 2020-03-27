// Primeira forma de criar um obejto no JS 
const pessoa1 = {     // usamos as chaves para criar um objeto 
    nome: 'Isaac',    // nos atributos usamos o sinal :
    sobrenome: 'Dias',
    idade: 32,

// Criando um metodo dentro do objeto
    fala() {
        console.log(`A minha idade atual é ${this.idade} anos.`);
    }, // metodos precisam ser separados por virgula

    incrementaIdade() {
        this.idade++
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();

console.log(pessoa1.nome); // acessando um atributo do objeto (nome)
console.log(pessoa1.sobrenome); // acessando um atributo do objeto (sobrenome)
console.log(pessoa1.idade); // acessando um atributo do objeto (idade)
 
// Utilizando funções para criar objetos

function criarPessoa(nome, sobrenome, idade) {
    return {nome, sobrenome, idade};
}

const pessoa2 = criarPessoa('Rafael', 'Araujo', 35)
console.log(pessoa2.nome, pessoa2.sobrenome, pessoa2.idade);