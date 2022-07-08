//Задачи на работу с массивами 11
//1
const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
let str = '';    
if (arr.length === 0) {
    str = 'Семья пуста';
} else {
     str = `Семья состоит из: ${arr.join(' ')} `;
}
 return str;
}

console.log(showFamily(family));

//2
const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
     arr.forEach(cities => {
         console.log(cities.toLowerCase());
    });
    
}
standardizeStrings(favoriteCities);

//Задачи на работу с массивами 12
//Написать функцию reverse возвращ строку в обратном порядке(с собеседований)
//3
const someString = 'This is some strange string';

function reverse(str) {
 if (typeof str !== 'string') return 'Ошибка!';
 return str.split('').reverse().join('');
}
console.log(reverse(someString));

//4
const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
const arr = baseCurrencies.concat(additionalCurrencies);

function availableCurr(arr, missingCurr) {    
 if(arr.length === 0) return 'Нет доступных валют';
 if (arr.indexOf(missingCurr) !== -1) arr.splice(arr.indexOf(missingCurr),1);
 return `Доступные валюты:\n${arr.join('\n')}`;
}
console.log(availableCurr(arr, 'USD'));