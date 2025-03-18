const btn = document.getElementById("searchBtn");
const input = document.getElementById("city-input");

const cityName = document.getElementById("city-name")
const cityTime = document.getElementById("city-time")
const cityTemp = document.getElementById("city-temp")

async function getData(cityInfo){
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=c2f88823e8654f3197d81522251703&q=${cityInfo}&aqi=yes`);
    return await promise.json()
}

btn.addEventListener("click", async () => {
    const value = input.value;
    const result = await getData(value);
    cityName.innerText =   `${result.location.name}, ${result.location.region} - ${result.location.country}`
    cityTime.innerText =   result.location.localtime;
    cityTemp.innerText =   result.current.temp_c;
});