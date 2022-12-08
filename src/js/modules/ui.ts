export default class UI {
  // Rendering To Screen
  static displayWeek() {
    // display the retrieved weather reports for the upcoming week to interface
  }
  static displayDayHourly() {
    // display the retrieved hourly weather reports for today to the interface
  }
  static displayHumidity() {
    // display humidity to additional info section
  }
  static displayRainChance() {
    // display chance of rain to additional info section
  }
  static displayWindSpeed() {
    // display wind speed to additional info section
  }
  static displayTempFeel() {
    // display temp feel to additional info section
  }
  // Updating content widgets
  static updateWeatherIcon() {
    // update icon based on rainy,sunny,cloudy...
  }
  static updateTemp() {
    UI.updateHighestTemp();
    UI.updateLowestTemp();
  }
  static updateHighestTemp() {}
  static updateLowestTemp() {}
}
