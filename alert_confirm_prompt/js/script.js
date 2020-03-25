alert('Com a nossa mensagem.'); // Não existe alert dentro do node, visualizamos apenas no navegador.

confirm('Deseja realmente apagar?'); // Funcão utilizada para solicitar confirmação do usuario

prompt('Digite seu nome:'); // SErve para solicitar imput do usuário

// salvando retornos de usuario numa variavel

const confirma = confirm('Deseja continuar');
console.log(confirma);

const nome = prompt('Digite seu nome:');
console.log(nome);