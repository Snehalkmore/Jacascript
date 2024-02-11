
console.log(Boolean(0)); //result -> false
console.log(Boolean('')); //result -> false
console.log(Boolean(NaN)); //result -> false
console.log(Boolean(undefined)); //result -> false
console.log(Boolean(null)); //result -> false
console.log(Boolean({}));// result ->true
console.log(Boolean('Snehal'));// result -> true

const money = 0;

if (money) {                      // internally converts zero to false since it is zero
    console.log('priyanka');
} else {
    console.log('Snehal');   // final result
}


let height;
if (height) {
    console.log('priyanka');
} else {
    console.log('Snehal'); // since hight is undefined
}


let size = 123;
if (size) {
    console.log('priyanka');  // since size is defined
} else {
    console.log('Snehal');
}