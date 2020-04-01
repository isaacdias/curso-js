const paragrafos = document.querySelector('.paragrafos'); // capturando a div 'paragrafos' do html
const ps = paragrafos.querySelectorAll('p'); // capturando todas a tags p dentro da div 'paragrafos'

const estilosBody = getComputedStyle(document.body); // capturando todo stylo de body
const backgroundColorBody = estilosBody.backgroundColor; // atribuindo a variavel o valor de backgroudColor do body


for (let p of ps){
    p.style.backgroundColor = backgroundColorBody; // adcionando estilo pelo JS
    p.style.color =  '#FFF'; // adcionando estilo pelo JS
};