// IIFE => Imediately invoked function expression

(function () {
	console.log('teste'); 
})();

// exemplo

(function() {
	
	const sobrenome = 'Dias';
	function criaNome(nome) {
		return nome + ' ' + sobrenome 
	}

	function falaNome() {
		console.log(criaNome('Isaac'));
	}

	falaNome();

})();