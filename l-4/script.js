const age = 90;

// normal if-else
if (age >= 80) {
    console.log('no you cant vote we want young minds to vote');
} else if (age >= 18) {
    console.log('yes you can vote');
} else {
    console.log('bacha, no you cant vote');
}
// if one condtion match then it print it value and all condtions are ignore no matter they are true

// ternary operator - short form of if else but not write that if you have else if condtion
// you can assign it also
let result = age >= 18 ? console.log('yes you can vote ') : console.log('no you cant vote')
console.log(result);

// switch case 
const option = 1;
switch (option) {
    case 1: {
        console.log('assalamualaikum');
    }
    break; // if it match then not go futher
    case 2: {
        console.log('assalamualaikum warahmatullahi wabarakatuh');
    }
    break;
    // if nothing match it run default
    default: {
        console.log('lal salam');
    }
}

// example
let a = 30;
let opt = "+";
let b = 40;
switch (opt) {
    case '+': {
        console.log(a+b);
    }
    break;
    case '-': {
        console.log(a-b);
    }
    break;
    case '*': {
        console.log(a*b);
    }
    break;
    case '/': {
        console.log(a/b);
    }
}