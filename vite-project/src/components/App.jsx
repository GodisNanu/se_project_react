import { useEffect } from "react";
import { useState } from "react";
import "../blocks/page.css";
import { latitude } from "../utils/constants";
import { longitude } from "../utils/constants";
import { apiKey } from "../utils/constants";
import Header from "./Header";
import Main from "./Main";
import { getWeather } from "../utils/weatherApi";
import { filterWeatherData } from "../utils/weatherApi";

function App() {
  const { weatherData, setWeatherData } = useState({
    type: "",
    temp: { F: 999, C: 999 },
  });

  useEffect(() => {
    getWeather(latitude, longitude, apiKey)
      .then((data) => {
        console.log(data);
        filterWeatherData(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Main weatherData={weatherData} />
      </div>
    </div>
  );
}

export default App;
