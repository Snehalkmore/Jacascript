# Day 4 - Type conversion



## Number function
```
const input = '1995';            //string input
console.log(Number(input));    //converted to number
```


## convertible format not exist
NaN -> Not a Number -> means not valid number
```
console.log(Number('Jonas')); //result ->NaN -> Not a number
console.log(typeof Number('Jonas')); // result is number but its invalid
```


## Type coercion - internally - or * or / operation converts string to number and return number except for + operator.
```
console.log('I am ' + 4 + " days old experienced in javascript"); //automatically converts the number 4 to string
console.log('23' - '10' - 3); //10 type number
console.log('23' - '10' + 3); //16 type number
console.log('23' + '10' - 3); //2307 type number
console.log('23' + '10' + 3); //23103 -> type string

console.log('23' * '2');//46 type number
console.log('23' / '2');//11.5 type number

let n = '1' + 1;//11 string since + operator
n = n - 1;
console.log(n); //10 type number

console.log(2 + 3 + 4 + '5');
console.log('10' - '4' - '3' - 2 + 5);//15 
```