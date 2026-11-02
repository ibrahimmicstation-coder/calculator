// we are creating weather app
const button = document.getElementById("search-button");
const input = document.getElementById("city-input");
const cityName = document.getElementById("city-name");
const cityTime = document.getElementById("city-time");
const cityTemp = document.getElementById("city-temp");
async function getData(cityname) {
    const promise = await fetch(`https://api.weatherapi.com/v1/current.json?key=52fca33ca1cd4d5fb0c225728260111&q=${cityname}&aqi=yes`)
    return await promise.json()
}

// https://api.weatherapi.com/v1/current.json?key=52fca33ca1cd4d5fb0c225728260111&q=Delhi&aqi=yes

button.addEventListener("click", async()=>{
    const value = input.value;
    const result = await getData(value)
    cityName.innerText = `${result.location.name}, ${result.location.region}, ${result.location.country}`;
    cityTime.innerText = result.location.localtime;
    cityTemp.innerText = result.location.temp_c;
})