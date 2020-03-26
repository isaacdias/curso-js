// uma das maneiras de criar uma função é utilizar o function

function saudacao(nome){
    return `Bom dia ${nome}!`;
}

const variavel = saudacao('Isaac');
console.log(variavel); 

// função para somar dois números 

function soma(num1, num2){
    return Number(num1 + num2);
}

console.log(soma(5, 10));

// Outra forma de criar uma função

const raiz = numero => numero ** 0.5; 
// posso criar uma função dentro de uma variavel 

console.log(raiz(9));