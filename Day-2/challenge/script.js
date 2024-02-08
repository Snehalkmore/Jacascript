/* Write your code below. Good luck! 🙂 */

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark);
console.log(BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);