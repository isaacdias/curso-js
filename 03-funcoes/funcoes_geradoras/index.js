function* geradora1() {
    // codigo qualquer...
    yield 'Valor 1';
    // codigo qualquer...
    yield 'Valor 2';
    // codigo qualquer...
    yield 'Valor 3';
}

const g1 = geradora1();
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);

function* geradora2() {
    yield 1;
    yield 2;
    yield 3;
}

function* geradora3() {
    yield* geradora2();
    yield 4;
    yield 5;
    yield 6;
}

const g3 = geradora3();
for (let valor of g3) {
    console.log(valor);
}