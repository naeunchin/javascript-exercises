const convertToCelsius = function(farenheit) {
  let celcius = Math.round(((farenheit - 32) * (5/9)) * 10) / 10;
  return celcius;
};

const convertToFahrenheit = function(celcius) {
  let farenheit = Math.round(((celcius * (9/5) + 32)) * 10) / 10;
  return farenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
