export const weatherCardOptions = [
  {
    isDay: true,
    condition: "clear",
    url: new URL("../assets/sunnyDay.png", import.meta.url).href,
  },

  {
    isDay: true,
    condition: "cloudy",
    url: new URL("../assets/cloudyDay.png", import.meta.url).href,
  },

  {
    isDay: true,
    condition: "rain",
    url: new URL("../assets/rainyDay.png", import.meta.url).href,
  },
  {
    isDay: true,
    condition: "storm",
    url: new URL("../assets/stormyDay.png", import.meta.url).href,
  },
  {
    isDay: true,
    condition: "snow",
    url: new URL("../assets/snowyDay.png", import.meta.url).href,
  },
  {
    isDay: true,
    condition: "fog",
    url: new URL("../assets/foggyDay.png", import.meta.url).href,
  },
  {
    isDay: false,
    condition: "clear",
    url: new URL("../assets/clearNight.png", import.meta.url).href,
  },
  {
    isDay: false,
    condition: "cloudy",
    url: new URL("../assets/cloudyNight.png", import.meta.url).href,
  },
  {
    isDay: false,
    condition: "rain",
    url: new URL("../assets/rainyNight.png", import.meta.url).href,
  },
  {
    isDay: false,
    condition: "storm",
    url: new URL("../assets/stormyNight.png", import.meta.url).href,
  },
  {
    isDay: false,
    condition: "snow",
    url: new URL("../assets/snowyNight.png", import.meta.url).href,
  },
  {
    isDay: false,
    condition: "fog",
    url: new URL("../assets/foggyNight.png", import.meta.url).href,
  },
];

export const defaultWeatherCards = [
  {
    isDay: true,
    condition: "clear",
    url: new URL("../assets/sunnyDay.png", import.meta.url).href,
  },

  {
    isDay: false,
    condition: "clear",
    url: new URL("../assets/clearNight.png", import.meta.url).href,
  },
];

export const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "chilly",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "chilly",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
  {
    _id: 5,
    name: "Coat",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  },
];

export const apiKey = "4b558621ec4046a076cdf83de80c8434";
export const latitude = "21.17429";
export const longitude = "-86.84656";
