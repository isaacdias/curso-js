function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        configurable: false,// pode recofigurar/apagar a chave
        get: function() { // um método que retorna o estoque
            return estoque;
        },
        set: function(valor) {
            if (typeof valor !== 'number') { // validar se é um numero
                throw new TypeError('Mensagem de erro'); // mensagem de erro caso seja umastring
                return;
            }
            estoque = valor
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 500;
console.log(p1.estoque);
