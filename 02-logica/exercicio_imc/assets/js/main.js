
const formulario = document.querySelector('#form-imc'); // Capturar o formulário

formulario.addEventListener('submit', function (event) { // adicionamos um evento para o submit
    event.preventDefault(); // previnimos o default
    const inputPeso = event.target.querySelector('#peso') // pegando input de peso
    const inputAltura = event.target.querySelector('#altura') // pegando o input de altura

    const peso = Number(inputPeso.value); // aqui eu pego o velor de peso 
    const altura = Number(inputAltura.value); // aqui eu pego o valor de altura
    
    if (!peso) { // verificando se peso é um valor válido, caso não seja informa que é inválido
        setResultado('Peso inválido', false);
        return;
    }

    if (!altura) { // verificando se altura é um valor válido, saco não seja informa que é inválido
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura); // salvamos o valor de imc através de uma função que foi criada com essa finalidade
    const nivelImc = getNivelImc(imc); // salvamos o nivel de imc através de uma função que foi criada com essa finalidade

    const msg = `Seu IMC é ${imc} (${nivelImc}).`; // aqui vai a mensagem com os valores

    setResultado(msg, true); // setamos o resultado com a flag true

});


// função para verificar o nivel do IMC
function getNivelImc(imc){
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 
    'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

// função para calcular o imc
function getImc (peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

// função que cria um paragravo no JS
function criarParagrafo() {
    const p = document.createElement('p'); // criando um paragrafo com js
    return p;

}

// função para setar o resultado
function setResultado(msg, isValid){
    const resultado = document.querySelector('#resultado'); // seleciona a div de resultado
    resultado.innerHTML = ''; // aqui xera o html do resultado
    
    const p = criarParagrafo(); // cria o paragrafo através da funcão criada para isso
    
    if (isValid) { // verifica se a flag isValid é verdaderia
        p.classList.add('paragrafo-resultado'); // sendo verdadeira adiciona uma classe
    } else{
        p.classList.add('paragrafo-resultado-ruim'); // sendo falso adiciona uma classe diferente
    }
    
    p.innerHTML = msg; // seta o paragrafo com a mensagem que estamos recebendo na flag msg
    resultado.appendChild(p); // adiciona o paragrafo ao resultado
}   