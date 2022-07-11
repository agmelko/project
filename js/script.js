//Упражнение 13 работа с массивами и объектами

'use strict';
const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {
    let shopVolume = 0;
    const shops = data.shops;
    shops.forEach(element => {
        shopVolume += element.width * element.length * data.height;    
    });
 let str = shopVolume * data.moneyPer1m3 <= data.budget ? "Бюджета достаточно" : "Бюджета недостаточно";
 return str;
}

console.log(isBudgetEnough(shoppingMallData));

//Упражнение 14 работа с массивами и объектами

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) { 
 const arrEnd = [];   
 arr.sort();
 for (let i = 0; i < Math.floor(arr.length); i++) arrEnd.push(arr.splice(0, 3));
 arrEnd.push(`Оставшиеся студенты: ${!arr.length ? "-" : arr.join(", ")}`);
 return arrEnd;
 
}
console.log(sortStudentsByGroups(students));