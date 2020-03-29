const data = new Date();

// função para adicionar um zero à esquerda nas datas, horas e minutos menores que 10
function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function day(data) {
    const dia = zeroAEsquerda(data.getDate());
    return dia;
}

function month(data) {
    const mes = data.getMonth();
    let nomeMes;
    switch (mes) {
        case 0:
            nomeMes = 'Janeiro';
            return nomeMes;
        case 1:
            nomeMes = 'Fevereiro';
            return nomeMes;
        case 2:
            nomeMes = 'Março';
            return nomeMes;
        case 3:
            nomeMes = 'Abril';
            return nomeMes;
        case 4:
            nomeMes = 'Maio';
            return nomeMes;
        case 5:
            nomeMes = 'Junho';
            return nomeMes;
        case 6:
            nomeMes = 'Julho';
            return nomeMes;
        case 7:
            nomeMes = 'Agosto';
            return nomeMes;
        case 8:
            nomeMes = 'Setembo';
            return nomeMes;
        case 9:
            nomeMes = 'Outubro';
            return nomeMes;
        case 10:
            nomeMes = 'Novembro';
            return nomeMes;
        case 11:
            nomeMes = 'Dezembro';
            return nomeMes;
    }

}

function year(data) {
    const ano = data.getFullYear();
    return ano;
}

function hour(data) {
    const hora = zeroAEsquerda(data.getHours());
    const minutes = zeroAEsquerda(data.getMinutes());
    return `${hora}:${minutes}`;
}

function dayOfTheWeek(data) {
    const day = data.getDay();
    let dayOfTheWeek;

    switch (day) {
        case 0:
            dayOfTheWeek = 'Domingo';
            return dayOfTheWeek;
        case 1:
            dayOfTheWeek = 'Segunda-feira';
            return dayOfTheWeek;
        case 2:
            dayOfTheWeek = 'Terça-feira';
            return dayOfTheWeek;
        case 3:
            dayOfTheWeek = 'Quarta-feira';
            return dayOfTheWeek;
        case 4:
            dayOfTheWeek = 'Quina-feira';
            return dayOfTheWeek;
        case 5:
            dayOfTheWeek = 'Sexta-feira';
            return dayOfTheWeek;
        case 6:
            dayOfTheWeek = 'Sábado';
            return dayOfTheWeek;
        default:
            return dayOfTheWeek = '';

    }
}

const diaDaSemana = dayOfTheWeek(data);
const dia = day(data);
const mes = month(data);
const ano = year(data);
const hora = hour(data);

const date = document.querySelector('#date'); // seleciona a div de resultado
date.innerHTML = `${diaDaSemana}, ${dia} de ${mes} de ${ano}`;
const hourMinutes = document.querySelector('#hour-minutes');
hourMinutes.innerHTML += `${hora}`;


// const h1 = document.querySelector('#date');
// const data = new Date();
// h1.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full'});
// const hora = document.querySelector('#hour-minutes');
// hora.innerHTML = data.toLocaleDateString('pt-BR', { timeStyle: 'short'});
