//Задача 9 Числа Фибоначчи в строку
//9.1 без рекурсии
'use strict';
function fib(n) {
    if (typeof n != 'number' || !Number.isInteger(n) || n <= 0 ) return "";
    if (n === 1) return '0';
    let a = 1;
    let b = 1;
    let result = '0 1';
    for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
      result += ' ' + a;
    }
    return result; 
  }
  
  console.log(fib(4));