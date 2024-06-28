import { useEffect } from "react";
import { useState } from "react";
import "../blocks/page.css";
import { latitude } from "../utils/constants";
import { longitude } from "../utils/constants";
import { apiKey } from "../utils/constants";
import Header from "./Header";
import Main from "./Main";
import ModalWithForm from "./ModalWithForm";
import { getWeather } from "../utils/weatherApi";
import { filterWeatherData } from "../utils/weatherApi";
import { getWeatherType } from "../utils/weatherApi";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    city: "",
  });

  useEffect(() => {
    getWeather(latitude, longitude, apiKey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="page">
      <div className="page__content">
        <Header weatherData={weatherData} />
        <Main weatherData={weatherData} />
        <ModalWithForm title="New garment" buttonText="Add garment">
          <label htmlFor="name" className="modal__label">
            Name{" "}
            <input
              type="
        text"
              className="modal__input"
              id="name"
              placeholder="Name"
            />
          </label>
          <label htmlFor="imageUrl" className="modal__label">
            Image{" "}
            <input
              type="
        text"
              className="modal__input"
              id="imageUrl"
              placeholder="Image URL"
            />
          </label>
          <fieldset className="modal__radio-buttons">
            <legend className="modal__legend"> Slect the weather type: </legend>
            <label htmlFor="hot" className="modal__label modal__radio">
              <input id="hot" type="radio" className="modal__radio-input" /> Hot
            </label>
            <label htmlFor="warm" className="modal__label modal__radio">
              <input id="warm" type="radio" className="modal__radio-input" />{" "}
              Warm
            </label>
            <label htmlFor="chilly" className="modal__label modal__radio">
              <input id="chilly" type="radio" className="modal__radio-input" />
              Chilly
            </label>
            <label htmlFor="cold" className="modal__label modal__radio">
              <input id="cold" type="radio" className="modal__radio-input" />{" "}
              Cold
            </label>
          </fieldset>
        </ModalWithForm>
      </div>
    </div>
  );
}

export default App;
