# Day 11 - Functions

function are good for implementing dry code which mean the code resusable

function can take parameter and return value as per requirement.

existing function example 
```
const number = Number('23'); // converting string to number where Number() is a function
```

Implement function
```
'use strict';

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
```