'use strict';

const currentYear = 2024;

//function delcaration
// const age22 = calculateAge(1993); ..... accessing before declaration wont give an error
function calculateAge(birthYear) {
    return 2024 - birthYear;
}
const age = calculateAge(1993);
console.log(`my age is ${age}`);




//expression
//const age2 = currAge(1994); ...........this gives error if we try to access it before expression Uncaught ReferenceError: Cannot access 'currAge' before initialization
const currAge = function (birthYr) {
    return currentYear - birthYr;
}

const age2 = currAge(1994);
console.log(`my age is ${age2}`);
