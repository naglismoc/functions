
helloWorld();

let pirmas = 16167;
let antras = 165;

multiply(pirmas, antras);

sayHelloTo("Jonas");
let vardas = "Darius";
sayHelloTo(vardas);
sayHelloTo();
console.log(Math.PI);

let piKvadratu = PISq();
console.log(piKvadratu);
console.log(PISq());

let rndNum = randomNumber(716, 724);
console.log(rndNum);
console.log(randomNumber(4, 8));
console.log(randomNumber(20, 60));
console.log(randomNumber(1000, 1010));

function helloWorld() { //nieko nepriema, nieko negrazina
    console.log("Ar skaniai pavalget?");
}

function multiply(a, b) {//priima du kintamuosius, nieko negrazina
    console.log(a * b);
}

function sayHelloTo(name) {
    console.log("Labas " + name);
}

function PISq() {//nieko nepriema, grazina reiksmę
    return Math.PI * Math.PI;
}

function randomNumber(from, to) { //priima kintamuosius, grazina reiksmę
    //5 + Math.round( Math.random() * (25 - 5));
    return from + Math.round(Math.random() * (to - from));
}


console.log( rndNumsArray(10, 3, 9) );

/**
 * Summary. Makes an array filled with random numbers.
 * @param {type}   int length of array you want to create.
 * @param {type}   int min value of random numbers in array.
 * @param {type}   int max value of random numbers in array.
 *@return {type} int[] newly created array
*/
function rndNumsArray(arrlength, from, to) {
    let arr = [];
    for (let i = 0; i <arrlength; i++) {
       arr.push(randomNumber(from,to));
    }
    return arr;
}
