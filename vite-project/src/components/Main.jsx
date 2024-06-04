import WeatherCard from "./WeatherCard";

function Main() {
  return (
    <main className="main">
      <WeatherCard />
      <section className="cards">
        <p className="cards__text">
          Today is {/* Temp*/}/ You may want to wear:
        </p>
        {/* Add Cards */}
      </section>
    </main>
  );
}

export default Main;
