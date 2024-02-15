# Day 9 - statements and expressions and conditional operators


//in case of taking quick decision we can use ternary operator

const age = 18;

age > 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 🚰');

//to add smiley on windows use windows sign button + ; button
//the conditional operator is an expression which always produces value

//one line of code
const drink = age >= 18 ? 'wine 🍷' : 'water 🚰';
console.log(drink);


//more line of code
let drink2;
if (age >= 18) {
    drink2 = 'wine 🍷';
} else {
    drink2 = 'water 🚰';
}

console.log(drink2);

console.log(`I like to drink ${drink2}`);
console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 🚰'}`); // we can pass expression and not statement in ${} template literal in placeholder

