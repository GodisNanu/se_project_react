import "../blocks/weather-card.css";

function WeatherCard({ weatherData }) {
  return (
    <section className="weather-card">
      <p className="weather-card__temp"> {weatherData.temp.F} &deg; F</p>
      <img
        src="../src/assets/Cloudy.png"
        alt="Cloudy"
        className="weather-card__image"
      />
    </section>
  );
}

export default WeatherCard;
