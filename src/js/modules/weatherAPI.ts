// Create the weather constructor function
const Weather = (() => {
  // Convert raw data from API and get the fields we want.
  function parseData(data: any) {
    const {
      name: cityName,
      main: { temp: temperature, feels_like: feelsLike, humidity },
      wind: { wind: windSpeed },
    } = data;
    return { cityName, temperature, feelsLike, humidity, windSpeed };
  }

  function getWeatherData(location: string) {
    return new Promise((resolve, reject) => {
      const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=733ac34f981d37338adc9bcd9ffb88cb`;
      // Make a request to the API and returns a promise. Pending state
      fetch(apiURL, {
        mode: "cors",
      })
        .then((response) => parseData(response.json())) // We store the fetched API data in weatherData variable.
        .then((weatherData) => {
          resolve(weatherData); // the promise is resolved with the API response data
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
