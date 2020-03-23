// Não podemos criar variaveis com palavras constantes
// constantes precisam ter nomes significativos 
// não pode começar o nome da constante com numero
// Não pode conter espacos ou tracos
// Utilizamos camelCase
// Case-sensitive
// Nao pode modificar o valor de uma constante

const nome = 'João';
console.log(nome);

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
console.log(resultado);
const resultadoDuplicado = resultado * 2;
console.log(resultadoDuplicado);
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
console.log(resultadoTriplicado);


console.log(typeof primeiroNumero); // como saber o tipo da variavel
