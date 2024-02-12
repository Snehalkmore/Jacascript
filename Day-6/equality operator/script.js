
const num = 18;

//Strict
console.log(num === 18); //true
console.log(num === '18'); //false
console.log(num !== 18); //false
console.log(num !== '18'); //true

//loose
console.log(num == 18); //true
console.log(num == '18'); // true
console.log(num != 18); //false
console.log(num != '18'); //false


const age = 18;
if (age === 18) console.log("you are now adult : strict"); //print result

if (age === '18') console.log("you are now adult : strict"); //result not printed since comparing number with string

if (age == 18) console.log("you are now adult  : loose");//print result
if (age == '18') console.log("you are now adult : loose");//print result


//use of prompt
const favouriteNumber = prompt('whats yuor favorite number ?');
console.log(favouriteNumber);
console.log(typeof favouriteNumber);

if (favouriteNumber === 3) {
    console.log('my fav number is 3 !!!');
} else if (favouriteNumber === 2) {
    console.log('my fav number is 2 !!!');
} else if (favouriteNumber === 9) {
    console.log('my fav number is 9 !!!');
} else {
    console.log('my fav number is anything !!!');  //always return this result
}



//convert to number function ->Number()
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
