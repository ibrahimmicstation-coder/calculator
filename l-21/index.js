// clousures

// lexical scoping
function main(name) {
    function saymyname() {
        // saymyname() is the inner function, a closure
        console.log(name);
    };

    return saymyname;
}
let output = main("Ibrahim Ahmad");
output();

// practicle use
function adder(num) {
    function add(b) {
        console.log(num+b);    
    }
    return add;
}
const addto5 = adder(5);
const addto10 = adder(10);
addto5(2);
addto10(10);

// practical clousure