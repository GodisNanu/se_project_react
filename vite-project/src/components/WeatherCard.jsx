import "../blocks/weather-card.css";
import { weatherCardOptions } from "../utils/constants";

function WeatherCard({ weatherData }) {
  const weatherCardDisplay = weatherCardOptions.filter((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });

  return (
    <section className="weather-card">
      <p className="weather-card__temp"> {weatherData.temp.F} &deg; F</p>
      <img
        src={weatherCardDisplay[0]?.url}
        alt={weatherCardDisplay[0]?.condition}
        className="weather-card__image"
      />
    </section>
  );
}

export default WeatherCard;
