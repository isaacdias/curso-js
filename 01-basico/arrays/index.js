const alunos = ['Luiz', 'Maria', 'João', 'Carlos', 'Marcos', 'Ana', 'Henrique', 'Camila'];
console.log(alunos); // retornando o array completo
console.log(alunos[1]); // retornando apenas umindice do array

alunos[0] = 'Eduardo'; // alterando um indice do array
console.log(alunos);

alunos[3] = 'Isaac'; // inserindo algo no indice 3 (indice que ainda não existe)
console.log(alunos);

console.log(alunos.length); // para saber a quantidades de elementos no array

alunos.push('Rafael'); // adiciona um novo elemento no final no array
console.log(alunos);

alunos.unshift('Gabriel'); // adiciona o elemento no inicio do array
console.log(alunos);

alunos.pop(); // remove o ultimo elemento do array
console.log(alunos);

const removido = alunos.pop(); // Podemos salvar numa variavel o elemento que foi removido com a função pop
console.log(alunos);
console.log(removido);

alunos.shift(); // remove o primeiro elemento do array
console.log(alunos);

const removido2 = alunos.shift(); // Podemos salvar numa variavel o elemento que foi removido com a função shift
console.log(alunos);
console.log(removido2)

console.log(alunos.slice(0, 3)); // fatiando os elementos do array do indice 0 até o 3


/*
apagando elementos sem alterar os indices do array

delete alunos[1]; 

*/

