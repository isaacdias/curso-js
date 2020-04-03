// function hoisting
// A função é elevada ao topo do javasript, podendo ser chamada antes ou depois da função

falaOi();

function falaOi() {
    console.log('Oi');
}

// first-class object (Objeto de orimeira classe)
// function express
const souUmDado = function() {
    console.log('Sou um dado.');
}
souUmDado(); // possso executar essa váriavel como se fosse uma função

// exemplo
function executaFuncao(funcao) { // uma função para executar outra função
    funcao();
}
executaFuncao(souUmDado);

// arrow function
const funcaoArrow = () => {
    console.log('Sou uma Arrow Function');
}
funcaoArrow();

// função como um método de um objeto

const obj = {
    falar () {
        console.log('Estou falando...');
    }
};
obj.falar();