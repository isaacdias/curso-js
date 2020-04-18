const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 =  a1.concat(a2); // utilizando a função concat
console.log(a3);

const a4 = a1.concat(a2, [7, 8, 9], 'Luiz'); // utilizando o concat
console.log(a4); 

const a5 = [...a1, ...a2] // utilizando o spread operator com arrays
console.log(a5);

const a6 = [...a1, ...a2, ...[7, 8, 9], 'Luiz'] // utilizando o spread com array literal e string
console.log(a6);


