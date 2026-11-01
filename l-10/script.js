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
// foreach for double number
const numbers = [1,2,3,4,5];
const newArr = [];
numbers.forEach((num)=>{
    newArr.push(num*2)
});
console.log(newArr);


// map
// map return new array
const map = numbers.map((num) => {
    return num * 2;
});
console.log(map);
// double number
const numbersbymap = [1, 2, 3, 4, 5];
const newArrbymap = numbersbymap.map((num) => {
    return num * 2;
});
console.log(newArrbymap);

// find
let find = numbers.find((num)=>{
    return num === 4;
})
console.log(find); // print the value
console.log(numbers[find]); // find the index

// includes
console.log(numbers.includes(3) ); // write true or false

// filter
// example filter the even number
const filter = numbers.filter((num)=>{
    return num%2==0;
})
console.log(filter);

// slice
// it use index
let slice = numbers.slice(1,5); // start 1 to 5
// if i not give first value
let sliceV2 = numbers.slice(2); // it start with 2 and run till end
// if i not enter anything
let sliveV3 = numbers.slice(); // print whole array
console.log(slice);
console.log(sliceV2);
console.log(sliveV3);

// // splice
let splice = numbers.splice(1,4); // it remove 1 index to 4 index
console.log(numbers);
// if i give only one value
let spliceV2 = numbers.splice(2); // it remove from 2 index to end
console.log(numbers);
// if i give nothing it remove nothing
let spliceV3 = numbers.splice();
console.log(numbers);