// functions
// a block of coce that performs a particular task

function sayhello(name) {
    console.log("hey, "+name);
}
// call
sayhello("ibrahim") // calling a function

// parameters in function
//           arguments
function add(a,b,c) {
    console.log(a+b+c);
}
add(5,10,15); // they are paramnetes
add(2,4,8);

// multiply
function multiply(a,b) {
    console.log(a*b);
}
multiply(10,90)

// use return in function
function divide(a,b) {
    return a/b;
}
let divideResult = divide(10,9)
console.log("the answer is " + divideResult);

// unlimted arguments accept
function addNumbers() {
    let ans = 0;
    for (let i = 0; i < arguments.length; i++) {
        ans = ans + arguments[i]
    }
    // first: 0+10=10
    // second 10+10=20
    // third 20+10=30
    // four 30+10=40
    return ans;
}
let result = addNumbers(1,2,3)
console.log(result);

// spread operator
function addNumbersV2(...numbers) { // spread operator
    let ans = 0;
    for (let i = 0; i < numbers.length; i++) {
        ans = ans + numbers[i]   ;     
    };
    return ans;
}
let addNumbersV2Result = addNumbersV2(1,2,3);
console.log(addNumbersV2Result);