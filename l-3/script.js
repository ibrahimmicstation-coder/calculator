// data types

// numbers
let num = 3;
let num2 = 3.4; // it is also treated number
console.log(num + num2);

// strings
const firstName = "ibrahim";
console.log(firstName);
// you can also do in single qoute
const lastName = "ahmad";
console.log(lastName);
// you can also add both string
console.log(firstName + ' ' + lastName);

//  booleans
// true or false
let isLoggedIn = true;
console.log(isLoggedIn);
// in js means 1 means true or 0 means true
if(1){
    console.log(true); // it print true but if you add 0 on the place of one it not print anything
}
// another proof
console.log(false + 10); // it print 10 because in js false consider 0 so if you write this false + 10 it show you 10
console.log(true + 10); // it print 11 because in js true consider 1

// null - now i don't wanted to add nothing, i can assign value in future
let date = null;
date = 1+'/'+11+'/'+'26';
console.log(date);

// undefined - it is not there now
let nothing = undefined
console.log(nothing);

// objects - {}
const person = {
    firstName: "Ibrahim",
    lastName: "Ahmad",
    age: "35",
    isLoggedIn: false,
}
console.log(person); // print all value of object
console.log(person.age); // you can acces single property also

// operators
console.log(num + num2);
console.log(num - num2);
console.log(num + num2 + 100);
console.log(num - num2 + 0);
console.log(num * num2);
console.log(num / num2); // divide

// string '1' + '1' show you 11 
// because they are string because of qoute
// string + string = string
console.log('1'+'1');
// string + num = string
console.log('1'+11); // show you 111
// string * num = number
console.log('11'*1); // it show you 11 becuase in js string * num is conver to num

// nan strand for not a number
console.log('a'*1); // nan

// TypeOf operator
console.log(typeof person); // object
console.log(typeof num); // number
console.log(typeof isLoggedIn); // boolean