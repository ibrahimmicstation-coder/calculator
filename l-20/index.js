const stopBtn = document.getElementById("stop-btn");

function showTime() {
    const currentTime = new Date();
    const time = `${currentTime}`
    let h1 = document.getElementsById("h1")
}

let interval = setInterval(showTime, 1000); // call function after 1 second everytime

stopBtn.addEventListener("click",()=>{
    clearInterval(interval)
})

// clearinterval
// setinterval