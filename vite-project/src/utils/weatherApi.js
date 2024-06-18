export const getWeather = (latitude, longitude, apiKey) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
};

export const filterWeatherData = (data) => {
  const result = {};
  result.city = data.name;
  result.temp = { F: data.main.temp };
  result.type = getWeatherType(result.temp.F);

  return result;
};

export const getWeatherType = (temperature) => {
  if (temperature > 82) {
    return "hot";
  } else if (temperature >= 70 && temperature < 82) {
    return "warm";
  } else if (temperature >= 58 && temperature < 70) {
    return "chilly";
  } else {
    return "cold";
  }
};
