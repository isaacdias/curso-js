const data = new Date();
let diaSemana = data.getDay();
let diaSemanaTexto;

// switch = a variavél a ser checada
// case a condição 

switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo';
        break; // se o brazk não for utilizado ele passa para proxima condição até chegar no break
    case 1:
        diaSemanaTexto = 'Segunda';
        break;
    case 2:
        diaSemanaTexto = 'Terça';
        break;
    case 3:
        diaSemanaTexto = 'Quarta';
        break;
    case 4:
        diaSemanaTexto = 'Quinta';
        break;
    case 5:
        diaSemanaTexto = 'Sexta';
        break;
    case 6:
        diaSemanaTexto = 'Sábado';
        break;
    default:
        diaSemanaTexto = ''; 
}

// O código acima faz o mesmo que o o código comentado abaixo.

// if (diaSemana === 0) {
//     diaSemanaTexto = 'Domingo';
// } else if (diaSemana === 1){
//     diaSemanaTexto = 'Segunda';
// } else if (diaSemana == 2) {
//     diaSemanaTexto = 'Terça';
// } else if (diaSemana === 3) {
//     diaSemanaTexto = 'Quarta';
// } else if (diaSemana === 4) {
//     diaSemanaTexto = 'Quinta';
// } else if (diaSemana === 5) {
//     diaSemanaTexto = 'Sexta';
// } else if (diaSemana === 3) {
//     diaSemanaTexto = 'Sábado';
// } else {
//     diaSemanaTexto = '';
// }

console.log(diaSemana, diaSemanaTexto);
