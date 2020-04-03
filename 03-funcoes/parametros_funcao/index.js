function funcao() {
    console.log('Oi');
}
funcao('Valor');

// ####
// mesmo sme declarar os parametros, o js armazena em arguments se enviarmos algum argumento na função
function soma() {
    let total = 0;
    for (let argument of arguments) {
        total += argument;
    }
    console.log(total);
}
soma(1, 2, 3, 4, 5, 6, 7);

// ####

// setando um valor default no parametro

function somaDoisNumeros(a, b = 2) { // se o valor de b não for enviado na função, b recebe o valor de 2
    console.log(a + b)
}
somaDoisNumeros(2); // a saída será 4 

// ###

// Utilizando o rest operator

function conta(operador, acumulador, ...numeros) { // o parametro rest precisa sempre ser o ultimo da função
    for (numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;
    }
    console.log(acumulador);
}   
conta('+', 0, 10, 20, 30, 40, 50);
conta('-', 0, 10, 20, 30, 40, 50);
conta('/', 200, 10, 20, 30, 40, 50);
conta('*', 1, 10, 20, 30, 40, 50);

