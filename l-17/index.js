// async, await

// made function to add async
async function getData() {
    let result = await fetch('https://jsonplaceholder.typicode.com/posts/')
    console.log(await result.json());
}
getData();
let add = 2+2;
console.log(add);
// it print first than getData becuase getdata code is in asynchronous nature

fetch('https://jsonplaceholder.typicode.com/posts/')
.then((data)=>{
    // .then run when it resolve i mean it run completely no error so .then run
    console.log(data);
})
.catch((error)=>{
    // .catch shows when error shows
    console.log(error);
})
.finally(()=>{
    // .finnaly always run no matter the function resolve or error come
    console.log("this is finnaly, it always runs");
})