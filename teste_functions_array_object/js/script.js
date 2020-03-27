function meuEscopo() {
    const form = document.querySelector('.formulario'); // aqui selecionamos o formulario dentro de document
    const resultado = document.querySelector('.resultado');

    const pessoas = []; // array que receberá os objetos

    function recebeEventoForm(evento) {
        evento.preventDefault(); // aqui definimos para não acontecer o evento padrão que deveria acontecer

        const nome = form.querySelector('.nome'); // aqui eu pego o elemento dentro da variavel form que criei
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({ // objeto que será enviado para o array
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`; // mostrando o resultado no html
    }

    form.addEventListener('submit', recebeEventoForm); // método para escultar um evento
}
meuEscopo();
