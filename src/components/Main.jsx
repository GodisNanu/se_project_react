import WeatherCard from "./WeatherCard.jsx";
import { defaultClothingItems } from "../utils/constants.js";
import ItemCard from "./ItemCard.jsx";

function Main({ weatherData, currentTempUnit, handleItemClick }) {
  return (
    <main className="main">
      <WeatherCard
        weatherData={weatherData}
        currentTempUnit={currentTempUnit}
      />
      <section className="cards">
        <p className="cards__text">
          Today is {weatherData.temp[currentTempUnit]} &deg; {currentTempUnit}/
          You may want to wear:
        </p>
        <ul className="cards__list">
          {defaultClothingItems
            .filter((item) => {
              return item.weather === weatherData.type;
            })
            .map((item) => {
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  onItemClick={handleItemClick}
                />
              );
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
