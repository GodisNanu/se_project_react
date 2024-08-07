import "../blocks/weather-card.css";
import { weatherCardOptions } from "../utils/constants";
import CurrentTempUnitContext from "../contexts/CurrentTempUnitContext";
import { useContext } from "react";

function WeatherCard({ weatherData, currentTempUnit }) {
  const weatherCardDisplay = weatherCardOptions.filter((option) => {
    return (
      option.isDay === weatherData.isDay &&
      option.condition.includes(weatherData.condition)
    );
  });

  const weatherCardUrl = weatherCardDisplay[0]?.url;
  const weatherCardCondition = weatherCardDisplay[0]?.condition;
  return (
    <section className="weather-card">
      <p className="weather-card__temp">
        {" "}
        {weatherData.temp[currentTempUnit]} &deg; {currentTempUnit}
      </p>
      <img
        src={weatherCardUrl}
        alt={`${weatherCardCondition}`}
        className="weather-card__image"
      />
    </section>
  );
}

export default WeatherCard;
