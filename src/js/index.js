import "../style/styles.scss";
import Weather from "./weatherAPI";
import UI from "./ui";

console.log("Index Loaded");

const searchLocationInput = document.getElementById("search-location-input");
const searchForm = document.getElementById("search-form");
const searchButton = document.getElementById("search-btn");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

searchButton.addEventListener("click", async () => {
  if (searchLocationInput.value == "") {
    return;
  }
  const weatherData = await Weather.getWeatherData(searchLocationInput.value);
  UI.updateMainDisplay(weatherData);
});
