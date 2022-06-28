'use strict'
let num = 20;
function showFirstMessage(text) {
    console.log(text);
   
    console.log(num);
}

showFirstMessage('Hello World!');
console.log(num);

function calc (a,b) {
    return (a + b);
}
console.log(calc(3,6));

function ret () {
    let num = 50;
    return num;
}

const logger = function() {
    console.log("Hello!");
};
logger();


const calc = (a, b) => {return a + b;};
console.log(calc(3, 8));
//Упражнение 6(функции)
//1
function sayHello(name) {
    return (`"Привет, ${name}!"`)
    }
const names = 'Антон';
console.log(sayHello(names));

//2
function returnNeighboringNumbers(num) {
const arr = [];
arr[0] = num - 1;
arr[1] = num;
arr[2] = num + 1;
return arr;
}

let num = 5;
console.log(returnNeighboringNumbers(num));

//3
function getMathResult(baza, i) {
let result = '', num = 0;
const text = '---';    
if (typeof(baza) === "number" && typeof(i) === "number" && i > 0){
   while (i > 0){
    num = num + baza;
    result += num;
    if (i != 1) result += text;
    i--;
   }
} else if(i <= 0 || typeof(i) != "number" ) {
  result = baza;
}
return result;
}

console.log(getMathResult(5, 3));

//Работа со строками
const logg = "Hello World!";
console.log(logg.slice(6, 11));
console.log(logg.substr(6, 2));
// Математика
let num = 12.5;
console.log(Math.round(num));
