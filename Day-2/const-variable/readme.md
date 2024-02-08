# Day 2 - Const variable

it is used for creating constants.

1. Re-assigning the value to const declared variable gives error
```
const yr = 1993;
yr=1994; //error

Uncaught TypeError: Assignment to constant variable.
    at script.js:3:6
```

2. we cannot create empty const variable
```
const birthyr;

Uncaught SyntaxError: Missing initializer in const declaration (at script.js:7:7)
```

