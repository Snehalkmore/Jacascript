const age = 13;



if (age > 18) {
    console.log(`you can drive the 🚗 cause your age ${age} is above 18....`);
} else {
    const yearsLeftToGetLicence = 18 - age;
    console.log(`you CANNOT drive the 🚗 .wait for another ${yearsLeftToGetLicence} years....`);
}

let century;
const birthYear = 1993;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);