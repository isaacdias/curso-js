// Construtora
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
//    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}
Pessoa.prototype.nomeCompleto = function () {
    return this.nome + ' ' + this.sobrenome;
};

// Instância
const pessoa1 = new Pessoa('Luiz', 'Miranda');
const data = new Date();

console.log(pessoa1);
console.log(pessoa1.nomeCompleto());

const pessoa2 = new Pessoa('Maria', 'Pereira');
console.log(pessoa2);
console.log(pessoa2.nomeCompleto());




