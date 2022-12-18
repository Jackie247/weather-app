// Create the weather constructor function
const Weather = (() => {
  // Convert raw data from API and get the fields we want.
  function parseData(data) {
    {
      const returnData = {
        name: data.name,
        main: {
          temp: Math.round(data.main.temp),
          feelsLike: Math.round(data.main.feels_like),
          maxTemp: Math.round(data.main.temp_max),
          minTemp: Math.round(data.main.temp_min),
        },
        weather: {
          currWeather: data.weather[0]["main"],
          description: data.weather[0]["description"],
        },
      };
      return returnData;
    }
  }
  function getWeatherData(location) {
    return new Promise((resolve, reject) => {
      const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=733ac34f981d37338adc9bcd9ffb88cb`;
      // Make a request to the API and returns a promise. Pending state
      fetch(apiURL, {
        mode: "cors",
      })
        .then((response) => response.json())
        .then((data) => parseData(data))
        .then((weatherData) => {
          resolve(weatherData);
        })
        .catch((error) => {
          // Rejected state, API data was unable to be retrieved.
          console.error(`Location "${location}" not found`, error);
          reject(error);
        });
    });
  }
  return { getWeatherData };
})();

export default Weather;
