const objA = {
    chaveA: 'A'
};

const objB = {
    chaveB: 'B'
};

Object.setPrototypeOf(objB, objA);
console.log(objB.chaveA);

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

// metodo para dar desconto  
Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};

const produto1 = new Produto('camiseta', 50); // instância do objeto
produto1.desconto(10); // utilizando o metodo para dar 10% de desconto
console.log(produto1); // valor com desconto

// fazendo um objeto literal
const produto2 = {
    nome: 'Caneca',
    preco: 30
};

Object.setPrototypeOf(produto2, Produto.prototype); // seteando o prototype do objeto Produto no objeto literal
produto2.desconto(10); // utilizando o metodo do prototype do objeto Produto
console.log(produto2); // valor com desconto

// setando o prototupe direto no objeto
const produto3 = Object.create(Produto.prototype);
produto3.nome = 'Celular';
produto3.preco = 100;
produto3.desconto(10);
console.log(produto3);