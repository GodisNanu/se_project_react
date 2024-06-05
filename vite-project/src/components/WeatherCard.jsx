import "../blocks/weather-card.css";

function WeatherCard() {
  return (
    <section className="weather-card">
      <p className="weather-card__temp">current Temp</p>
      <img
        src="../src/assets/Cloudy.png"
        alt="Cloudy"
        className="weather-card__image"
      />
    </section>
  );
}

export default WeatherCard;
