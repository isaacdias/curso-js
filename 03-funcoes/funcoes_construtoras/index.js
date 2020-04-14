// funcoes construtoras -> objetos 
// Crontutoras -> Pessoa (new)
// funcções contrutoras iniciam com letra maiuculas

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': sou um método.')
    };
}

const p1 = new Pessoa('Isaac', 'Dias');
const p2 = new Pessoa('Luiz', 'Miranda');

p1.metodo();
