// high order functions and callback
// a function that takes a function as an argument
function add(a,b,cb) {
    let result = a+b;
    cb(result);

    return ()=>{
        console.log(result);
    }
}
add(2,4, function(val) {
    console.log("the addition is "+val);
})
// you can also do this by arrow function
add(10,4, (val) => {
    console.log("the addition is "+val);
})