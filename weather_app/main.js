// eslint-disable-next-line max-len
// Write the functions that hit the API. You’re going to want functions that can take a location and return the weather data for that location. For now, just console.log() the information.

function getDataFromForm() {
  const cityName = "London";
  const input = document.querySelector("#searchInput");
  //   const cityName = input.value;

  // if not an empty string
  if (cityName) {
    // remove whitespaces from the api call

    return cityName
      .replace(/(\s+$|^\s+)/g, "") // remove whitespace from begining and end of string
      .replace(/(,\s+)/g, ",") // remove any white space that follows a comma
      .replace(/(\s+,)/g, ",") // remove any white space that preceeds a comma
      .replace(/\s+/g, "+"); // replace any remaining white space with +, so it works in api call
  }
  return "";
}

const APIkey = "3a6a4ef146f45bb78570758cac7c7dee";
const input = "London";
const cityName = "Helsinki";

function buildRequestCoordsUrl(cityName) {
  return `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=3a6a4ef146f45bb78570758cac7c7dee`;
}

// Builds request url to obtain weather forecast
function buildRequestForecastUrl(coordinates, units) {
  return `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&exclude=minutely,alerts&units=${units}&appid=3a6a4ef146f45bb78570758cac7c7dee`;
}

// Returns coordinates and city name for a specified city name.
async function getCoords(url) {
  const response = await fetch(url);
  const weatherData = await response.json();
  const { coord } = weatherData;
  coord.name = weatherData.name;
  coord.country = weatherData.sys.country;
  console.log(weatherData);
  console.log(weatherData.weather);

  return coord;
}

// Returns forecast data for specified coordinates.
async function getForecast(url) {
  const response = await fetch(url);
  const forecastData = await response.json();

  return forecastData;
  console.log(forecastData);
}

// export default {
//   getDataFromForm,
//   buildRequestCoordsUrl,
//   buildRequestForecastUrl,
//   getCoords,
//   getForecast,
// };
