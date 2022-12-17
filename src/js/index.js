import "../style/styles.scss";
import weatherAPI from "./weatherAPI";

console.log("hello");

const searchLocationInput = document.getElementById("search-location-input");
const searchForm = document.getElementById("search-form");
const searchButton = document.getElementById("search-btn");

searchButton.addEventListener("click", async () => {
  if (searchLocationInput.value == "") return;
  const weatherData = await weatherAPI.getWeatherData(
    searchLocationInput.value
  );
});
