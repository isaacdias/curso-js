let exemplo1 = 'Um \\texto'; // para exibir uma barra invertida no texto
console.log(exemplo1);

//              01234567
let exemplo2 = 'Um texto';
console.log(exemplo2[4]) // solicitando exibir apenas o caractere de um indice especifico (indice 4 no exemplo),
console.log(exemplo2.charAt(6)); //Outra maneira de fazer a mesma coisa

let exemplo3 = 'Um texto';
console.log(exemplo3.indexOf('texto')); // decobrir em qual indice começa a palavra 'texto'.

let exemplo4 = 'Um texto'; 
console.log(exemplo4.length); // vemos o tamanho da string

let exemplo5 = 'Um texto'; 
console.log(exemplo5.slice(3, 8)); // fatiar um trecho da string 

let exemplo6 = 'Um texto'; 
console.log(exemplo6.split(' ')); // dividir as palavras de uma string sem espaços num array. 

let exemplo7 = 'Um texto'; 
console.log(exemplo7.toUpperCase()); // deixar tudo maiusculo

let exemplo8 = 'Um texto'; 
console.log(exemplo8.toLowerCase()); // deixar minuscula