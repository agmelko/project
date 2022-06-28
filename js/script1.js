'use strict';
const numberOfFilms = +prompt('Сколько фильмов вы просмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

}
const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
//______________________________________________________________________________
//Циклы (23д)
let result = '';
const lenght = 7;

for ( let i = 1; i < lenght; i++){
    for(let j = 0; j < i; j++){
       result += '*';
    }
   
    result +='\n';
    
}
console.log(result);
first: for ( let i = 0; i < 3; i++){
    console.log(`1st level: ${i}`);
    for(let j = 0; j < 3; j++){
        console.log(`2nd level: ${j}`);
        for(let k = 0; k < 3; k++){
            if ( k === 2) continue first;
            console.log(`3d level: ${k}`);
    
        }
    }    
}
//Задачи 4
//1
for ( let i = 5; i <= 10; i++){
    console.log(i);
}
//2
for ( let i = 20; i >= 10; i--){
    if ( i === 13) break;
    console.log(i);
}
//3
for ( let i = 2; i <= 10; i++){
    if ( !(i % 2) ) console.log(i);
}
//4
let i = 2;
while ( i <= 16 ){
    if (i % 2) console.log(i);
    i++;  
 }
 //5
 let arr = [];
 for ( let i = 5, j = 0; i <= 10; i++,j++){
    arr[j] = i;
 //   console.log(arr[j]);
 }
 console.log(arr);
 //-----------------------------------------------------------------
 //Продвинутые задачи (23(д) - 4)
 //1
 const arr = [3, 5, 8, 16, 20, 23, 50];
 const result = [];
 for ( let i = 0; i < arr.length; i++){
    result[i] = arr[i];
    
}
console.log(result);

//2
const data = [5, 10, 'Shopping', 20, 'Homework'];
for ( let i = 0; i < data.length; i++){
   if (typeof(data[i]) == 'string' ) {
    data[i] = data[i] + ' - done';
   } else {
    data[i] = data[i] * 2;
   }
    
}
console.log(data); 

//3
const data = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];
for ( let i = data.length - 1,j = 0; i >= 0; i--,j++){
   result[j] = data[i]; 
}
console.log(result); 

//Задача на формирование фигуры
const lines = 5;
let result = '';
let space,star;
let i = 0;
while ( i <= lines) {
    space  = '';
    star = '';   
for ( let j = 0; j < lines - i; j++) space += ' ' ; 
for( let  j = 0; j <= 2 * i; j++) star += '*';
result += space + star + '\n'; 
i++;
}
console.log(result);




