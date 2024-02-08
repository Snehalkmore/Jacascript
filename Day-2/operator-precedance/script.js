
const now = 2024;
const ageOfSuppi = now - 1994;
const AgeOfAnuja = now - 1995;
console.log(ageOfSuppi, AgeOfAnuja);
console.log(ageOfSuppi * 2, AgeOfAnuja / 10, 2 ** 3); //2 to the power of 3 ->2*2*2


// String concatination
const firstName = 'Snehal';
const lastName = 'More';
console.log(firstName + lastName);
console.log(firstName + ' ' + lastName); //with space


//Math operators
let x = 3 + 5;  //8
x += 2;         //x=x+2; ->10
x *= 4;         //x=x*4 ->40
x++;            //x=x+1 ->41
x--;            //x=x-1 ->40
x--;            //x=x-1 ->39
console.log(x);


//Comparision Operator
console.log(ageOfSuppi > AgeOfAnuja); //true ->30>29
console.log(ageOfSuppi < AgeOfAnuja); //false ->30<29
console.log(ageOfSuppi >= 30);  //>= ->true
console.log(ageOfSuppi <= 60);  //<= ->true

const ageIfThirty = ageOfSuppi >= 30; //save to variable
console.log(ageIfThirty); //true

console.log(now - 1991 > now - 1994); //true



