export function getWeather(location: string) {
  // We store the fetched API data in weatherData variable. Resolved state
  return new Promise((resolve, reject) => {
    // Make a request to the API and returns a promise. Pending state
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=733ac34f981d37338adc9bcd9ffb88cb`,
      {
        mode: "cors",
      }
    )
      .then((response) => response.json())
      .then((weatherData) => resolve(weatherData))
      .catch((error) => {
        // Rejected state, API data was unable to be retrieved.
        console.error("There was a problem with the request:", error);
        reject(error);
      });
  });
}
