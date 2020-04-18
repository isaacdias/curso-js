// Filter

// retornar os numeros maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosFiltrados = numeros.filter(valor => valor > 10); // filter utilizando arrow function como callback
console.log(numerosFiltrados);


const pessoas = [
    { nome:'Luiz', idade: 62 },
    { nome:'Maria', idade: 23 },
    { nome:'Eduardo', idade: 55 },
    { nome:'Leticia', idade: 19 },
    { nome:'Rosana', idade: 32 },
    { nome:'Wallace', idade: 47 },
];

// Retornar as pessoas com nomes que tenham mais de 5 letras
const pessoasComNomeGrandes = pessoas.filter(obj => obj.nome.length >= 5);
console.log(pessoasComNomeGrandes);

// Retornar as pessoas com mais de 50 anos 
const pessoasMaioresDeCinquentaAnos = pessoas.filter(obj => obj.idade > 50);
console.log(pessoasMaioresDeCinquentaAnos);

// Retornar as pessoas que os nomes terminam com a letra 'a'
const nomeTerminamComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
// endWith('a') serve para verificar as palavras que terminam com a letra a 
console.log(nomeTerminamComA);