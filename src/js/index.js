import "../style/styles.scss";
import weatherAPI from "./weatherAPI";
import ui from "./ui";

console.log("hello");

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
  const weatherData = await weatherAPI.getWeatherData(
    searchLocationInput.value
  );
  console.log(weatherData);
  ui.updateMainDisplay(weatherData);
});
