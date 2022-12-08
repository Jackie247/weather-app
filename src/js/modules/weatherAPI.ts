async function getWeather(location) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=733ac34f981d37338adc9bcd9ffb88cb`,
    {
      mode: "cors",
    }
  );
  const weatherData = await response.json();
}
