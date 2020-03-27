let varA = 'A';
let varB = 'B';
let varC = 'C';

console.log(varA, varB, varC);

varATemp = varA
varA = varB
varB = varC
varC = varATemp

console.log(varA, varB, varC);

// Forma mais moderna de resolver isso no JS

[varA, varB, varC] = [varB, varC, varA] 
console.log(varA, varB, varC);


