import "./style.css";
//import req from "./request";

let pais = "";
const propertiesSection = document.createElement("section");
const propertiesSectionShow = document.createElement("section");
const showCountry = document.createElement("h1");
const showDate = document.createElement("h2");
const showTemperature = document.createElement("h2");
const showFeelsLike = document.createElement("h2");
const showHumidity = document.createElement("h2");
const showWindSpeed = document.createElement("h2");

function req() {
  const requester = document.createElement("section");
  const title = document.createElement("h1");
  const input = document.createElement("input");
  const button = document.createElement("button");

  requester.className = "requester";
  title.className = "title";

  button.textContent = "PRESS";
  title.textContent = "WEATHER";

  requester.appendChild(title);
  requester.appendChild(input);
  requester.appendChild(button);

  button.addEventListener("click", function () {
    pais = input.value;
    weather();
    //console.log(inputValue);
  });

  document.body.appendChild(requester);
}

function weather() {
  fetch(
    `http://api.openweathermap.org/data/2.5/forecast?q=${pais}&appid=8bf3b134cf452c96267a7b835e2dbf2d`,
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      todayTemperature(response);
      weekTemperature(response);
    });

  propertiesSectionShow.appendChild(showCountry);
  propertiesSectionShow.appendChild(showDate);
  propertiesSectionShow.appendChild(showTemperature);
  propertiesSectionShow.appendChild(showFeelsLike);
  propertiesSectionShow.appendChild(showHumidity);
  propertiesSectionShow.appendChild(showWindSpeed);

  countryClases();
}

function todayTemperature(response) {
  console.log(response);
  console.log(response.list[0]);

  showCountry.textContent = response.city.name;

  showDate.textContent = "Date: " + response.list[0].dt_txt;

  showTemperature.textContent = `Temperature: ${Math.trunc(
    response.list[0].main.temp - 273.15
  )}°C`;

  showFeelsLike.textContent = `Feels Like: ${Math.trunc(
    response.list[0].main.feels_like - 273.15
  )}°C`;

  showHumidity.textContent =
    "Humidity: " + response.list[0].main.humidity + "%";

  showWindSpeed.textContent =
    "Wind Speed: " + response.list[0].wind.speed + "Km/h";
}

function weekTemperature(response) {
  for (let i = 0; i < 7; i++) {
    showTemperature.textContent = `Temperature: ${Math.trunc(
      response.list[i].main.temp - 273.15
    )}°C`;

    showFeelsLike.textContent = `Feels Like: ${Math.trunc(
      response.list[i].main.feels_like - 273.15
    )}°C`;
  }
}

function countryClases() {
  document.body.appendChild(propertiesSection);
  propertiesSection.appendChild(propertiesSectionShow);

  propertiesSection.className = "propertiesSection";
  propertiesSectionShow.className = "propertiesSectionShow";
  showCountry.className = "showCountry";
}
req();
//weather();
