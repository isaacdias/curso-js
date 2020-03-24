/* 
Luiz otavio miranda tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é de 25.925925925924
Luiz otavio nasceu em 1988 
*/

const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const altura = 1.80;
let imc;
let anoNascimento;

imc = peso / (altura * altura);
anoNascimento = 2020 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`); // concatenando string e variaveis
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`); // template strings
console.log(`${nome} nasceu em ${anoNascimento}.`); // tamplate strings 