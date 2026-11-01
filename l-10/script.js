// arrays
const students = ["ibrahim","maaz","shafan"]
console.log(students);
// know the length of array
console.log(students.length);
// access the particular element
console.log(students[1]);
// change the value
students[0] = "abrahm"
console.log(students[0]);

// add the value in array in last
students.push('shanib');
console.log(students);

// Homog. | Hetro
// you can add multiple datatypes in one array it called Homog | Hetro
const profile = ["ibrahim","14","male","writing"]
console.log(profile);

// indexOf
console.log(profile.indexOf("14"));

// delete the last value of array
profile.pop();
console.log(profile);

// reverse the array it mean last value to first value
profile.reverse();
console.log(students);

// foreach
students.forEach((val)=>{
    console.log(val);
})