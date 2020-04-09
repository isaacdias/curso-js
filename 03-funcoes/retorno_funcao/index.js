// return
// retorna um valor 
// termina a função

function soma(a, b) {
	return a + b; 
}

let s1 = soma(2, 5);
// s1 contém o valor da função soma de 2 + 5

// funçãoparar criar um objeto 
function criaPessoa(nome, sobrenome) {
	return {nome, sobrenome};
}

const p1 = criaPessoa('Isaac', 'Dias');

// ####

function falaFrase(comeco) {
	function falaResto(resto) {
		return comeco + ' ' + resto;
	}
	return falaResto;
}

const fala = falaFrase('Olá');
const resto = fala('mundo!');
console.log(resto);

// exemplo real 

function criaMultipliacador(multiplicador) {
	return function(numero) {
		return numero * multiplicador
	};
}

const duplica = criaMultipliacador(2);
const triplica = criaMultipliacador(3);
const quadriplica = criaMultipliacador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));



