export async function getWeather(location: string) {
  try {
    // Make a request to the API and returns a promise. Pending state
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=733ac34f981d37338adc9bcd9ffb88cb`,
      {
        mode: "cors",
      }
    );
    // We store the fetched API data in weatherData variable. Resolved state
    const weatherData = await response.json();
    return weatherData;
  } catch (error) {
    // Rejected state, API data was unable to be retrieved.
    console.error("There was a problem with the request:", error);
    throw error;
  }
}
