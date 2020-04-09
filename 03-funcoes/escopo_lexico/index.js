 // a função conhece o local onde foi declarada, tudo que está dentro dela e os vizinhos ela

 const nome = 'Luiz';

 function falaNome() {
 	console.log(nome);
 }

function usaFalaNome() { 
	// esta função continuará lembrando onde está declarado 'nome' no escopo lexico 
	const nome = 'Isaac';
	falaNome();
}

usaFalaNome(); 

