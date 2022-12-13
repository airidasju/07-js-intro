/*
    IF - reiksmiu palyginimas; salyga tenkina/netenkina?
    Palyginimo operatoriai:
    visi: >, <, >=, <=, ==, !=, ===, !==
    naudotini: >, <, >=, <=, ===, !==
    NEnaudotini: ==, !=
    Sablonai:
    if () {}
    if () {} else {}
    if () {} else if () {}
    if () {} else if () {} else {}
    if () {} else if () {} ...  else if () {}
    if () {} else if () {} ...  else if () {} else {}
*/

const a = 7;
const b = 7;

// jeigu A daugiau B, tai spausdiname 'A daugiau uz B'
// jeigu A nera daugiau B, tai spausdiname 'A nera daugiau uz B'

console.log('start');

if (a > b) {
    console.log(`${a} daugiau uz ${b}`);
} else {
    console.log(`${a} nera daugiau uz ${b}`);
    console.log(`${a} maziau arba lygu uz ${b}`);
}

if (a == b) {
    console.log(`${a} yra lygu ${b}`);
} else {
    console.log(`${a} nera lygu ${b}`);
}

if (a <= b) {
    console.log(`${a} maziau arba lygu uz ${b}`);
} else {
    console.log(`${a} nera maziau arba lygu uz ${b}`);
}

if (a != b) {
    console.log(`${a} ne lygu ${b}`);
} else {
    console.log(`${a} lygu ${b}`);
}

console.log('------');
const c = 11;
const d = 13;
if (c > d) {
    console.log('C daugiau uz D');
} else if (c < d) {
    console.log('C maziau uz D');
} else if (c == d) {
    console.log('C lygu D');
} else {
    console.log('kazkas neaiskaus su C ir D');
}

console.log('------');
if (c > d) {
    console.log('C daugiau uz D');
} else {
    console.log('C ne daugiau uz D');
}
if (c < d) {
    console.log('C maziau uz D');
} else {
    console.log('C ne maziau uz D');
}
if (c == d) {
    console.log('C lygu D');
} else {
    console.log('C ne lygu D');
}

console.log('end');

const petras = [10, 2, 8, 4];
const maryte = [8, 4, 6];

if (petras.length >= maryte.length) {
    console.log('Petras turi daugiau ar vienodai su Maryte pazymiu');
} else {
    console.log('Maryte turi daugiau pazymiu uz Petra');
}

console.log('--- griezai ---');

if (5 === 5) {
    console.log('taip');
}

if (5 !== 3) {
    console.log('taip');
}

console.log('-----------------');

if (false == '') {
    console.log('vienodi');
} else {
    console.log('skirtingi');
}

const suma = Infinity;

if (typeof suma === 'number') {
    console.log('Darau pavedima ;)');
} else {
    console.log('Jokio pavedimo nebus!!!!');
}

console.log('aaaaa' / 5);