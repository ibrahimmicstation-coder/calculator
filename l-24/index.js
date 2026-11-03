// IIFE - Immediately Invoked Function Expression
(function add(a,b) {
    console.log(a+b);
})(2,3);

(function sayHello(a,b) {
    const name = "ibrahim";
    console.log("hello ",name);
})();

// modern way to IIFE
( () => console.log("i am es6") )();

// IIFE
// jaise hi funciton defined hoga run ho jayega

// use case
// 1. not pollute your global function
// jaise hi function run hoga fir ap iife funciton ke varibales ko aur kahi use nhi kr sakte
// 2
const data = (async ()=> await fetch("https://jsonplaceholder.typicode.com/posts/1"))
console.log(data);

// example:
const atm = (function(initialBalance) {
    let balance = initialBalance;
    function withdraw(amount) {
        if (amount>balance) {
            console.log("are you kidding");
        } else {
            balance -= atm;
            console.log(balance);
        }
    }
    return {withdraw};
})
const ibrahim = atm(1000)
console.log(ibrahim.withdraw(100));