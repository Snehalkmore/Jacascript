# Day 6 - Equality operators

## === comparision operator -> strict equality operator
```
18 === 18 // result -> true
18 === 19 // result -> false
```

## == comparison -> loose equality operator
```
18 == '18'   // result true
18 == 18    //result true
```

### convert to number function ->Number()
```
const favouriteNumberWithNumberFunction = Number(prompt('whats yuor favorite number ?'));
console.log(favouriteNumberWithNumberFunction);
console.log(typeof favouriteNumberWithNumberFunction);

if (favouriteNumberWithNumberFunction === 3) {
    console.log('my fav number is 3 !!!');
} else if (favouriteNumberWithNumberFunction === 2) {
    console.log('my fav number is 2 !!!');
} else if (favouriteNumberWithNumberFunction === 9) {
    console.log('my fav number is 9 !!!');
} else {
    console.log('my fav number is anything !!!');  //always return this result
}
```

## !== not equal to (strictly equality checked)
```
strict compares value and if not equals then return true

console.log(num !== 18); //false
console.log(num !== '18'); //true
```

## != not equal to but loosly equality checked
```
loosely compares value and if not equals then return true

console.log(num != 18); //false
console.log(num != '18'); //false
```

