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
import ItemModal from "./ItemModal";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    city: "",
    isDay: "",
    condition: "",
  });

  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const onClose = () => {
    setActiveModal("");
  };

  const handleButtonClick = () => {
    setActiveModal("add-garment");
  };
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("modal")) {
      onClose();
    }
  };

  const handleItemClick = (item) => {
    setActiveModal("preview");
    setSelectedCard(item);
  };

  useEffect(() => {
    getWeather(latitude, longitude, apiKey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
        debugger;
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (!activeModal) return;
    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscClose);
    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

  return (
    <div className="page">
      <div className="page__content">
        <Header
          weatherData={weatherData}
          handleButtonClick={handleButtonClick}
        />
        <Main weatherData={weatherData} handleItemClick={handleItemClick} />
        <ModalWithForm
          handleOutsideClick={handleOutsideClick}
          title="New garment"
          buttonText="Add garment"
          activeModal={activeModal}
          onClose={onClose}
        >
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
              className="modal__input "
              id="imageUrl"
              placeholder="Image URL"
            />
          </label>
          <fieldset className="modal__radio-buttons">
            <legend className="modal__legend"> Slect the weather type: </legend>
            <label htmlFor="hot" className="modal__label modal__radio">
              <input id="hot" type="radio" className="modal__radio-input" /> Hot
            </label>
            <label htmlFor="warm" className="modal__label modal__radio ">
              <input id="warm" type="radio" className="modal__radio-input " />{" "}
              Warm
            </label>
            <label htmlFor="chilly" className="modal__label modal__radio">
              <input id="chilly" type="radio" className="modal__radio-input " />
              Chilly
            </label>
            <label htmlFor="cold" className="modal__label modal__radio">
              <input id="cold" type="radio" className="modal__radio-input " />{" "}
              Cold
            </label>
          </fieldset>
        </ModalWithForm>
        <ItemModal
          handleOutsideClick={handleOutsideClick}
          activeModal={activeModal}
          item={selectedCard}
          onClose={onClose}
        />
      </div>
    </div>
  );
}

export default App;
