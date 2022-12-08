"use strict";
exports.__esModule = true;
var UI = /** @class */ (function () {
    function UI() {
    }
    // Rendering To Screen
    UI.displayWeek = function () {
        // display the retrieved weather reports for the upcoming week to interface
    };
    UI.displayDayHourly = function () {
        // display the retrieved hourly weather reports for today to the interface
    };
    UI.displayHumidity = function () {
        // display humidity to additional info section
    };
    UI.displayRainChance = function () {
        // display chance of rain to additional info section
    };
    UI.displayWindSpeed = function () {
        // display wind speed to additional info section
    };
    UI.displayTempFeel = function () {
        // display temp feel to additional info section
    };
    // Updating content widgets
    UI.updateWeatherIcon = function () {
        // update icon based on rainy,sunny,cloudy...
    };
    UI.updateTemp = function () {
        UI.updateHighestTemp();
        UI.updateLowestTemp();
    };
    UI.updateHighestTemp = function () { };
    UI.updateLowestTemp = function () { };
    return UI;
}());
exports["default"] = UI;
