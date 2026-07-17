// HTML Elements

const cityInput = document.getElementById("city");
const searchBtn = document.getElementById("searchBtn");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");


// Search Button Event

searchBtn.addEventListener("click", function () {

    let city = cityInput.value.trim();

    if (city === "") {
        alert("Please enter a city name!");
        return;
    }

    getWeather(city);

});


// Function to Fetch Weather Data

function getWeather(city) {

    let url = `https://p2pclouds.up.railway.app/v1/learn/weather?city=${city}`;

    fetch(url)

        .then(function (response) {

            return response.json();

        })

        .then(function (data) {

            if (data.error) {

                alert(data.error.message);
                return;

            }

            displayWeather(data);

        })

        .catch(function () {

            alert("Something Went Wrong!");

        });

}


// Function to Display Weather

function displayWeather(data) {

    cityName.innerHTML = "📍 " + data.location.name;

    temperature.innerHTML =
        "🌡️ Temperature : " + data.current.temp_c + " °C";

    humidity.innerHTML =
        "💧 Humidity : " + data.current.humidity + " %";

    windSpeed.innerHTML =
        "🌬️ Wind Speed : " + data.current.wind_kph + " km/h";

}