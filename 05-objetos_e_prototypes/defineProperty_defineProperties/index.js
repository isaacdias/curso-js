function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // mostra o valor da chave
        writable: false, // o valor pode ser alterado?
        configurable: false// pode recofigurar/apagar a chave
    });

// defineProperties é usado para mais de uma chave

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: false
        },
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);

console.log(Object.keys(p1)); // ostra as chaves do objeto

