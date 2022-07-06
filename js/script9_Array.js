'use strict';
//Массивы,псевдомассивы
const arr = [1, 22, 3, 69, 8];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}
// arr.forEach(function(item, i, arr) {
//       console.log(`${i}: ${item} Внутри массива ${arr}`);
// });



//arr.pop();

//arr.push(10);
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// const str = prompt("","");
// const products = str.split(",");
// console.log(products.join(";"));