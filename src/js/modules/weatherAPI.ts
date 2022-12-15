// Define our interface for the API data
interface WeatherData {
  cityName: string;
  temperature: number;
  feelsLike: number;
  humidity: number;
  windSpeed: number;
}
// Create the weather constructor function
const Weather = (() => {
  // Convert raw data from API into weatherData format
  function parseData(data: any): WeatherData {
    const {
      name: cityName,
      main: { temp: temperature, feels_like: feelsLike, humidity },
      wind: { wind: windSpeed },
    } = data;
    return { cityName, temperature, feelsLike, humidity, windSpeed };
  }

  function getWeatherData(location: string): Promise<WeatherData | null> {
    return new Promise((resolve, reject) => {
      // Make a request to the API and returns a promise. Pending state
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=733ac34f981d37338adc9bcd9ffb88cb`,
        {
          mode: "cors",
        }
      )
        .then((response) => response.json()) // We store the fetched API data in weatherData variable.
        .then((weatherData) => resolve(weatherData)) // the promise is resolved with the API response data
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
