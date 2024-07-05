import "../blocks/weather-card.css";
import { weatherCardOptions } from "../utils/constants";

function WeatherCard({ weatherData }) {
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
      <p className="weather-card__temp"> {weatherData.temp.F} &deg; F</p>
      <img
        src={weatherCardUrl}
        alt={`${weatherCardCondition}`}
        className="weather-card__image"
      />
    </section>
  );
}

export default WeatherCard;
