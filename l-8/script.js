// arrow functions

// 1. syntax
const sayhello = (name)=>{
    console.log("hello "+name);
    
}
sayhello("maaz")

const add = (a,b)=>{
    return a+b;
}
console.log("the addition result is "+add(2,4));

// one linear
const addV2 = (a,b) => a+b;
console.log("the addition result is "+addV2(5,10));

// 2. arguments
// arguments is not for arrow function
// if you wanted to use it use with spread opearator
const addNumbers = (...nums) => {
    console.log(nums);
}
addNumbers(10,22,10,33);

// 3. hoisting
// you can call function before declare it
sayhey("maaz");
function sayhey(name) {
    console.log("hey " + name);
}
// but hoisting not work on arrow function

// 4. This keyword
let obj = {
    value: 20,
    myfunction: function() {
        console.log("value is" + this.value);
    }
    // if you use normal function it refer to his parent function
    // if you use arrow function it shows undefined because it refer to window
}
obj.myfunction();