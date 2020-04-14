function criaPessoa(nome, sobrenome, a, p) {
	return {
		nome,

		sobrenome,

		get nomeCompleto() {
			return `${this.nome} ${this.sobrenome}`;
		},

		set nomeCompleto(valor) {
			valor = valor.split(' ');
			this.nome = valor.shift();
			this.sobrenome = valor.join(' ');
			console.log(valor);
		},

		fala(assunto) { // método para assunto
			return `${this.nome} está ${assunto}.`;
		},

		altura: a,

		peso: p,

		get imc() { // método para calcular imc **get faz o método fingir ser um atributo**
			const indice = this.peso / (this.altura ** 2);
			return indice.toFixed(2);
		}
	};
}

const p1 = criaPessoa('Isaac', 'Dias', 1.75, 69);
console.log(p1.fala('falando sobre JS'));
console.log(p1.imc) ;
p1.nomeCompleto = 'isaac Dias';
console.log(p1.nomeCompleto);