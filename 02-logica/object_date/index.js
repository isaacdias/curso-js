const data = new Date();
console.log(data.toString());

// ano, mês, dia, hora, minutos, segundos, milesimos de segundo (tudo com number)

const data2 = new Date('2019-04-15 20:53:16'); // Outro formato tuilizado
console.log(data2.toString());
console.log('Dia', data2.getDate());
console.log('Mês', data2.getMonth() + 1); // para obter o mês real precisa somar 1
console.log('Ano', data2.getFullYear());
console.log('Hora', data2.getHours());
console.log('Minutos', data2.getMinutes());
console.log('Segundos', data2.getSeconds());
console.log('MS', data2.getMilliseconds());
console.log('Dia da semana', data2.getDay()); // 0 - domingo até 6 - sábado

// Exemplo com function

// função que adicona um zero à esquerda na data, hora, min e seg quando necessário
function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}` // usando a operação ternária
}

// função que retorna a data atual no formato BR
function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1); 
    const ano = zeroAEsquerda(data.getFullYear()); 
    const hora = zeroAEsquerda(data.getHours()); 
    const minutos = zeroAEsquerda(data.getMinutes()); 
    const segundos = zeroAEsquerda(data.getSeconds());
    return `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}`;
}

const data3 = new Date();
const dataBrasil = formataData(data3);
console.log(dataBrasil);







