import { useContext } from "react";
import WeatherCard from "./WeatherCard.jsx";
import ItemCard from "./ItemCard.jsx";
import { CurrentTempUnitContext } from "../contexts/CurrentTempUnitContext.js";

function Main({ weatherData, handleItemClick, clothingItems, onCardLike }) {
  const { currentTempUnit } = useContext(CurrentTempUnitContext);
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
          {clothingItems
            .filter((item) => {
              return item.weather === weatherData.type;
            })
            .map((item) => {
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  onItemClick={handleItemClick}
                  onCardLike={onCardLike}
                />
              );
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
