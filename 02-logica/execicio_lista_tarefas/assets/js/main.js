const inputTarefa = document.querySelector('.input-tarefa');
const btnAddTarefa = document.querySelector('.btn-add-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() { // função parar criar um elemento li
    const li = document.createElement('li');
    return li;
}

function criaBotaoApagar(li) {
    li.innerText += '  '; 
    const botaoApagar = document.createElement('button'); // cria elemento button
    botaoApagar.innerText = 'Apagar'; // adidicona um texto ao botão
    botaoApagar.setAttribute('class', 'apagar')
    li.appendChild(botaoApagar); // add o botão ao li
}

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput; // li recebe o valor do input
    tarefas.appendChild(li); // adiciono o li na lista de tarefas através do appendChild()
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

inputTarefa.addEventListener('keypress', function(event) { // capturando a tecla enter
    if (event.keyCode === 13) {
        if (!inputTarefa.value) return; // se diferente de valor, return
        criaTarefa(inputTarefa.value); // pega o valor de input e joga numa outra função    
    }
});

function limpaInput() {
    inputTarefa.value = ''; // limpa o valor na caixa do imput
    inputTarefa.focus(); // adiciona o cursor dentro do input
}

btnAddTarefa.addEventListener('click', function(event){ // capturando o click do botão
    if (!inputTarefa.value) return; // se diferente de valor, return
    criaTarefa(inputTarefa.value); // pega o valor de input e joga numa outra função
});

document.addEventListener('click', function(event) { // pegando click do botão APAGAR
    const elemento = event.target;

    if (elemento.classList.contains('apagar')) { // checando se o botão clicado é o de classe apagar
        const confirma = confirm('Deseja apagar esta tarefa?')
        if (confirma === true) { // confirma se deseja mesmo apagar
            elemento.parentElement.remove(); // apagano o li pai do botão apagar
            salvarTarefas(); // salva a alteração no localSorage
        }
    limpaInput();
    }     

});

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li'); // busca todos os li da 'ul tarefas'
    const listaDeTarefas = []; // criado um array vazio 

    for (let tarefa of liTarefas) { // itera as li dentro de liTarefas
        let tarefaTexto = tarefa.innerText; // pego o texto da li
        tarefaTexto = tarefaTexto.replace('Apagar', ''). trim(); // reatribuo o valor substituindo o texto apagar por nada
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas); // coverte o array listaDeTarefas para um string no formato JSON 
    localStorage.setItem('tarefas', tarefasJSON); // salavando lo localStorage  
}

function adicionarTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas'); // obtem as tarefas salvas no localStorage
    const listaDeTarefas = JSON.parse(tarefas); // convertendo as tarefas de volta para array

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}

adicionarTarefasSalvas()