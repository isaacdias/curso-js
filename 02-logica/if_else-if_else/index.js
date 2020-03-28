
// if
const hora = 10;

if (hora < 12) {
    console.log('Bom dia!');
}

/*
Entre 0 - 11 Bom dia
Entre 12 - 17 Boa tarde
Entre 18 - 23 Boa noite 
fora do range entre 0 - 23 retorna 'Fora do padrão'
*/

const hora2 = 30;

if (hora2 >= 0 && hora2 <= 11) {
    console.log('Bom dia!');
} else if (hora2 >= 12 && hora2 <= 17) {
    console.log('Boa tarde!');
} else if (hora2 >= 18 && hora2 <= 23) {
    console.log('Boa noite');
} else {
    console.log('Fora do padrão');
}

// Condição para ir ao bar (utilizando apenas if e else)

const tenhoDinheiro = 50;

if (tenhoDinheiro >= 100) {
    console.log('Posso ir ao bar!');
} else {
    console.log('Ficar em casa!')
}
