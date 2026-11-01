// varibale is a name of container where you add your data
// 3 types of variable
// var, let and const

// var
var age = 22;
console.log(age);
// it is allowed(but can create bugs):
age = "ibrahim";
console.log(age);
// you can also do addition subtraction multiplication division using variable
var num1 = 10;
var num2 = 20;
console.log(num1 + num2);
// naming conditions
// firstname - allowed
// first_name - allowed
// FirstName - allowed - use for classes
// firstName - allowed
// first1name - allowed
// 1firstname - not allowed
// @firstname - not allowed
// firstname! - not allowed
// first*name - not allowed
// most prefer way of variable is:
// firstName (pref) cammel casing
// var scope is global scope
// so it is accesible anywhere like example:
if (true) {
    var ageofme = 23;
}
console.log(ageofme); // it print 23
// it is also allowed
console.log(ageofmybro); // it print undefined
var ageofmybro = 100;

// let
// let is a local scope
let name = "ibrahim";
console.log(name);
// it is not allowed in let
// if (true) {
//     let ageofme = 23;
// }
// console.log(ageofme); // it print 23
// it is allowed in let
if (true) {
    let ageofme = 23;
    console.log(ageofme); // print 23
}

// const
// const scope is local
// const ki value re-assign nhi ho sakti
// if you assign const value then you can't change it again like example:
// const namebyconst = "maaz";
// namebyconst = "moaz";
// console.log(namebyconst); // not allowed
// it is also not allowed
// const agebyconst;
// agebyconst = 99;
// console.log(agebyconst); // throw error
const simple = "it is simple"
console.log(simple);

// var | let | const

// var - global scope
// var re-assign
// access anywhere

// let - local scope
// let - re-assign
// access only on his own block

// const - local scope
// const - not re-assign
// access only on his own block