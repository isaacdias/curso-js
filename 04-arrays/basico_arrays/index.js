const nomes = ['Eduardo', 'Maria', 'Joana', 'Carlos'];
nomes[2] = 'João'; // reatribuindo um valor ao indice do array

const novo = [...nomes]; // copiando os valores de um array para outro sem que as as alterão de reflitam no outro
delete nomes[2]; // deletando um valor sem alterar os indices do array
console.log(nomes);
console.log(novo);
// novo.pop();
const removidos = novo.pop();
console.log(novo);
console.log(nomes.length); // pegar o tamanho do array
console.log(removidos); // retorna o valor salvo do atributo pop
novo.push('Ana'); // coloca um novo elemento no final do array
console.log(novo);
novo.unshift('Rafael') // adiciona um elemento no indice zero
console.log(novo);
const fatiamentoArray = novo.slice(0, -1); // fatiamento do array
console.log(fatiamentoArray);
const nomes2 = ['Isaac', 'Dias'];
const nome = nomes2.join(' ');
console.log(nome); // tornando um array em string 
