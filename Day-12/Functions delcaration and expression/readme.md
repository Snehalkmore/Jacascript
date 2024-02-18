# Day 12 - Functions declarations vs expressions


## Function delcaration - accessing before declaration will NOT give an error
```
'use strict';

const currentYear = 2024;

//function delcaration
// const age22 = calculateAge(1993); ..... accessing before declaration wont give an error

function calculateAge(birthYear) {
    return 2024 - birthYear;
}
const age = calculateAge(1993);
console.log(`my age is ${age}`);
```


## Function expression -
1. this gives error if we try to access it before expression Uncaught ReferenceError: Cannot access 'currAge' before initialization
2. this is fuction without name

```
//expression
//const age2 = currAge(1994); ...........this gives error if we try to access it before expression

const currAge = function (birthYr) {  ................function without name
    return currentYear - birthYr;
}

const age2 = currAge(1994); .............invokation will be with variable assigned with expression
console.log(`my age is ${age2}`);
```

