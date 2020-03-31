/* estrutura do for
for (variavel de controle; condição; incremento ou decremento){

}
*/

for (let i = 0; i <= 5; i++) {
    console.log(i);
}


// verificando se é par
for (let i2 = 0; i2 <= 5; i2++) {
    const par = i2 % 2 === 0? 'Par': 'Ímpar';
    console.log(i2, par);
}


// percorrendo o array com o laço for
const frutas = ['Maçã', 'Pêra', 'Uva'];
for (let i3 = 0; i3 < frutas.length; i3++) {
    console.log(frutas[i3]);
}
