const UI = (() => {
  const location = document.querySelector(".location-name");
  const temperature = document.querySelector(".temp");
  const highTemp = document.querySelector(".high-temp");
  const lowTemp = document.querySelector(".low-temp");

  function updateMainDisplay(data) {
    location.textContent = `${data.name}`;
    temperature.textContent = `${data.main.temp}°C`;
    highTemp.textContent = `H: ${data.main.maxTemp}`;
    lowTemp.textContent = `L: ${data.main.minTemp}`;
  }
  return { updateMainDisplay };
})();

export default UI;
