// API Key
const apiKey = "YOUR_API_KEY";

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

        alert("Please Enter City Name");
        return;

    }

    getWeather(city);

});


// Weather Function
function getWeather(city) {

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)

        .then(function (response) {

            return response.json();

        })

        .then(function (data) {

            if (data.cod == "404") {

                alert("City Not Found");
                return;

            }

            displayWeather(data);

        })

        .catch(function (error) {

            console.log(error);
            alert("Something Went Wrong");

        });

}


// Display Weather Function
function displayWeather(data) {

    cityName.innerHTML =
        "📍 " + data.name;

    temperature.innerHTML =
        "🌡️ Temperature : " + data.main.temp + " °C";

    humidity.innerHTML =
        "💧 Humidity : " + data.main.humidity + " %";

    windSpeed.innerHTML =
        "🌬️ Wind Speed : " + data.wind.speed + " m/s";

}