/*
    TERNERY (supaprastintas if'as)
    (if) klausimas ? ka daryti kai true : ka daryti kai false;
    */

// IF variantas
const laimejo = false;
let pinigine = 10;

if (laimejo) {
    pinigine += 20;
} else {
    pinigine -= 1;
}

console.log(pinigine);

// IF supaprastintas variantas
const pergale = false;
let zinute = 'Sveikinu, tu laimejai!';

if (!pergale) {
    zinute = 'Ups.. Bandykite kita karta!';
}

console.log(zinute);

// TERNARY
const lotteryWin = false;
const wallet = 10 + (lotteryWin ? 20 : -1);
console.log(wallet);

const msgWin = false;
const msg = msgWin ? 'Sveikinu!' : 'Ups...';
console.log(msg);