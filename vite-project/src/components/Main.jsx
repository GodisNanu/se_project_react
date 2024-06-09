import WeatherCard from "./WeatherCard.jsx";
import { defaultClothingItems } from "../utils/constants.js";
import ItemCard from "./ItemCard.jsx";
function Main({ weatherData }) {
  return (
    <main className="main">
      <WeatherCard />
      <section className="cards">
        <p className="cards__text">
          Today is {/* Temp*/}/ You may want to wear:
        </p>
        <ul className="card__list">
          {defaultClothingItems.map((item) => {
            return <ItemCard key={item._id} item={item} />;
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
