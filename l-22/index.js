// currying in js

// normal function without currying
function add(a, b, c) {
    console.log(a + b + c);
}

add(2, 3, 4);

// if 3 paremeteres arrived with 3 differnet ways
// to solve this problem currying mahatma comes
function curryadd(a) {
    return function(b) {
        return function(c) {
            return a+b+c;
        }
    }
}
console.log(curryadd(2)(3)(5)); // if you remove any paremeter it not execute

// example
function sendautoemail(to) {
    return function(subject) {
        return function(body) {
            console.log(`sending email to ${to} with subject ${subject}: ${body}`);
            
        }
    }
}
let step1 = sendautoemail("ibu@gmail.com")
let step2 = step1("new order conformation") // use the element where you send first paremeter to function
step2("hello ibu aka ibrahim ahmad there is something for you") // call in last

// modern way to currying
const modernadd = (a) => (b) => (c) => a+b+c;
console.log(modernadd(1)(2)(3));