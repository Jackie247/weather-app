// Create the weather constructor function
const Weather = (() => {
  // Convert raw data from API and get the fields we want.
  function parseData(data) {
    {
      const returnData = {
        name: data.name,
        main: {
          temp: data.main.temp,
          feelsLike: data.main.feels_like,
          minTemp: data.main.temp_min,
          maxTemp: data.main.temp_max,
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
          console.log(weatherData);
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
