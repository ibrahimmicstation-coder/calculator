// login operators
// AND OR NOT

// AND - &&
// do both works
// all coditons should be true
const age = 20;
const gender = 'female';
const favcar = 'porsche 911'
if(age >= 18 && gender == 'male' && favcar == 'porsche 911'){
    console.log('you are adult male and fav car is  porsche 911');
}

// OR - ||
// do one work
// one coditons should be true
if(age >= 18 || gender == 'male' || favcar == 'porsche 911'){
    console.log('you are adult');
}

// == equal is use for check the value of variable that is equal or not and it is bollean
let ismale = gender == 'male'; // it is bollean
// = equal is use for assign variable

// Not -> !
// means turn true false and false true
// true to false
// false to true
const number = 2;
// it find reminder %
// ex:
if (number%2 != 0) {
    console.log('odd');
    
}