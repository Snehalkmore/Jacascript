'use strict';


const number = Number('23');
console.log(number);

function logger() {
    console.log("Logging here...");
}

logger(23); // calling function or invoking or running function
logger();
logger();
logger();

//function example with input parameter and return type

function fruitProcessor(numberOfApples, numberOfOranges) {
    console.log(numberOfApples, numberOfOranges);
    const juice = `we can make juice of ${numberOfApples} apples and ${numberOfOranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

//directly pass function as parameter to log function
console.log(fruitProcessor(5, 0));


const appleOrangeJuice = fruitProcessor(3, 2);
console.log(appleOrangeJuice);