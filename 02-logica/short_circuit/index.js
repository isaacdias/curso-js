/*
Exemplos de FALSY
false
0
' ' " " ` `
null
undefined
NaN
*/

function falaOi() {
    return 'Oi';
}

const vaiExecutar = 0;
console.log(vaiExecutar && falaOi()); // condicional de forma simples

console.log(0 || false || null || 'Isaac' || true);

const corUsuario = null;
const corPadrao = corUsuario || 'preto'
console.log(corPadrao);