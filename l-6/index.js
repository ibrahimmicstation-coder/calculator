// loops
// ek kaam bar bar krna hai but short way mai krna hai

// for loop -> if you know how many times to loop
for (let i = 1; i <= 10; i++) {
    console.log('ibrahim'+i);
}

// i++ and i = i + 1 is same

// while loop -> jab tuhme condtion pata hu but tuhme pta na ho kitne time lgne wala aur chije lgne wali hai
/*
you wanted to go to your time but not know the timing when you arrive home so you walk and check and stop when you arrive at your home
*/
let footstep = 1;
// house need 100 footstep
let house = 100;
while (footstep != house) {
    footstep++;
    console.log('step taken for arriving home ' + footstep);
}

// do while - pahle code ko run krta hai fir condtion check krta hai
do {
    footstep++;
    console.log('step taken for arriving home ' + footstep);
} while (footstep != house);
// if footstep is 100 and house is 100 then this do while loop print 111 and stop becuase first it run code then check condtion
// example:
let number = 40;
let guess = 0;
do {
    guess = parseInt(prompt("guess a number? "))
    if (guess == number) {
        alert("Winner")
        break;
    }
} while (guess != 0);