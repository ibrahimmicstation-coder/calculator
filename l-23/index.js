// composition
function add(a,b) {
    return a+b;
}
function square(val) {
    return val*val;
}
function composeTwoFunction(fn1, fn2) {
    return function(a,b) {
       return fn2(fn1(a,b)) 
    }
}

const task = composeTwoFunction(add, square);
console.log(task(10,2));

// modern way to do composition
const modernComposeTwoFunction = (fn1,fn2)=>(a,b)=>fn2(fn1(a,b));
const moderntask = modernComposeTwoFunction(add, square);
console.log(moderntask(20,2));
