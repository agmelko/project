// Упражнение 10
// Задачи на работу с массивами

'use strict';
const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
             js: '20%',
             php: '10%'
        },
        exp: '1 month'
    },
showAgeAndLangs: function(plan) {
    let {age, skills:{languages}} = plan;
    let lang = languages.join(' ').toUpperCase();
    return "Мне "+age+" и я владею языками: "+lang;
}   
};
console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));
//1
function forExperience(plan) {
 const {exp} = plan.skills;   
    return exp;
}
console.log(forExperience(personalPlanPeter));

//2
function showProgrammingLangs(plan) {
    let str = "";
    const {programmingLangs} = plan.skills;
    if (Object.keys(programmingLangs).length === 0) return str;
    for (let key in programmingLangs) {
     str += "Язык "+key+" изучен на "+programmingLangs[key]+"\n";
    }
return str;
  

}

console.log(showProgrammingLangs(personalPlanPeter));