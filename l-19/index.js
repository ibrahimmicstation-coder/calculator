const button = document.getElementById("click-btn");
const username = document.getElementById("username");
const showname = document.getElementById("showname");

const getLocation = document.getElementById("get-location");
const myLocation = document.getElementById("my-location");

// Local Storage - Save Name
button.addEventListener("click", () => {
    const value = username.value;
    localStorage.setItem("name", value);
    location.reload();
});

// Local Storage - Get Name
window.addEventListener("load", () => {
    const value = localStorage.getItem("name");
    showname.innerText = value || "";
});

// Get User Location
getLocation.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            myLocation.innerText = `Latitude: ${latitude}, Longitude: ${longitude}`;
        },
        (error) => {
            myLocation.innerText = error.message;
        }
    );
});