// Продвинутые задания на использование функций, упражнения 7-8

//Exercise-7

//7.1 Создать функцию для вычисления объёма и площади поверхности куба

function calculateVolumeAndArea(lenSideCube) {
    let v = 0;
    let s = 0;
 if (typeof lenSideCube != 'number' || lenSideCube <= 0 || !Number.isInteger(lenSideCube)){
    return "При вычислении произошла ошибка";
 } else {
    v = lenSideCube**3;
    s = lenSideCube**2 * 6;
 }
    return (`Объём куба: ${v}, Площадь куба: ${s}`);
}

console.log(calculateVolumeAndArea(2));

//7.2 Определяем номер купе по переданному месту
function getCoupeNumber(placeNumber) { 
     if (!Number.isInteger(placeNumber) || placeNumber < 0){
        return "Ошибка. Проверьте правильность введённого номера места";
    }else if (placeNumber === 0 || placeNumber > 36) {
        return "Таких мест в вагоне не существует";
        } else {
        return  Math.ceil(placeNumber / 4);
       }
    
    }   
console.log(getCoupeNumber(-7.7));

//8.1 Функция принимает целое число минут и выводит время в часах минутах
function getTimeFromMinutes(min) {
    let h = '';
    let m = '';
    if (!Number.isInteger(min) || min < 0){
        return "Ошибка, проверьте данные";
    } else {
         if (Math.trunc(min / 60) === 1){
            h = 'час';   
         }else if (Math.trunc(min / 60) > 1 && Math.trunc(min / 60) < 5){
            h = 'часа';  
         }else{ h = 'часов';  }
         if (min%60 ===1){
            m = 'минута';
         }else if (min%60 > 1 && min%60 < 5){
            m = 'минуты';
         }else{ m = 'минут'; }
        return `Это ${Math.trunc(min / 60)} ${h} и ${min%60} минут`;
    }
}
console.log(getTimeFromMinutes(-130));

//8.2 Найти наибольшее число
const arrMy = [1, 5, 6.6, 11, 's'];
function findMaxNumber(arr) {
if (arr.length < 4) {
  return 0;
} else{
    for (let i = 0; i < arr.length; i++){
     if (typeof arr[i] !== 'number'){
        return 0; 
      } 
 }
 return   Math.max.apply(null,arr);
 }
}
 console.log(findMaxNumber(arrMy));

function findMaxNumber(a, b ,c, d) {
   
   if (typeof(a) !== 'number' ||
       typeof(b) !== 'number' ||
       typeof(c) !== 'number' ||
       typeof(d) !== 'number') {
       return 0;
   } else {
       return Math.max(a, b ,c, d);
   }
}

console.log(findMaxNumber('d',5, 6.6, 10.5));