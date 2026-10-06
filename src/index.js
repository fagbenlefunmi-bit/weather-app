function showTemperature(response) {
    let temperatureElement=document.querySelector(".current-temperature-value");
    let temperature=Math.round(response.data.temperature.current);
    temperatureElement.innerHTML=temperature;
}

function searchCity(city) {
    let apiKey="o5t6f56b82d0fb3f07f494e803db14aa";
    let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
}

function result(event) {
    event.preventDefault();
    let searchInput=document.querySelector("#search-input");
    let capitalCity=document.querySelector("#current-city");
    capitalCity.innerHTML=searchInput.value;
    searchCity(searchInput.value);
}

let searchValue=document.querySelector("#search-value");
searchValue.addEventListener("submit", result);

function date(date) {
    let days=[
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    let day=days[date.getDay()];
    let hours=date.getHours();
    let minutes=date.getMinutes();

    if(minutes<10){
      minutes=`0${minutes}`;
    }
    if(hours<10){
      hours=`0${hours}`;
    }
    return `${day} ${hours}:${minutes}`;
} 
let currentDate=document.querySelector("#current-date");
currentDate.innerHTML=date(new Date());
document.getElementById("wind-speed").textContent=
`Wind speed:${current.wind_speed_10m} km/h`;