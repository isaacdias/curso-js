// criado um array com objetos 
const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'section', texto: 'Frase 3'},
    {tag: 'footer', texto: 'Frase 4'},
];

const container = document.querySelector('.container'); // capituradp container do html
const div = document.createElement('div'); // criada um elemento div pelpo JS   

// iniciado um laço for para percorrer o array 
for (let i = 0; i < elementos.length; i++) { 
    let { tag, texto} = elementos[i]; // atribuido os valores em tag e texto através da desestruturaçao
    let tagCriada = document.createElement(tag); // cria os elementos pelo JS de acordo com o valor atribuido a tag
    tagCriada.innerHTML = texto; // inserindo o valor atribuido a texto no html
    div.appendChild(tagCriada); // adicionando a tag a div criada
}

container.appendChild(div); // adiciona a div crianda ao container 




// O laço poderia ter sido feito assim tbm 

// for (let i = 0; i < elementos.length; i++) { 
//     let { tag, texto} = elementos[i]; // atribuido os valores em tag e texto através da desestruturaçao
//     let tagCriada = document.createElement(tag); // cria os elementos pelo JS de acordo com o valor atribuido a tag
//     let textoCriado = document.createTextNode(texto); // cria um elemento de texto com o valor da variavel texto
//     tagCriada.appendChild(textoCriado); // adiciona atag criada o texto criado
//     div.appendChild(tagCriada); // adicionando a tag a div criada
// }