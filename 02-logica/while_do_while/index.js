let contador = 0;

while (contador <= 10) {
    console.log(contador);
    contador++;
};

console.log('---------------------------------------------');

// Exemplo com while numa função

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
};

const min = 1;
const max = 50;
let rand = random(min, max);

while (rand !== 10) {
    rand = random(min, max);
    console.log(rand);
} 

console.log('--------------EXEMPLO DO WHILE-----------------');

let rand2 = 10 

do {
    rand2 = random(min, max);
    console.log(rand2);
} while (rand2 !== 10);