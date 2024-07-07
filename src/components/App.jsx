import { useEffect } from "react";
import { useState } from "react";
import "../blocks/page.css";
import Loading from "./Loading";
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
import Footer from "./Footer";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    city: "",
    isDay: "",
    condition: "",
  });

  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  // const [clicked, setClicked] = useState("");
  const onClose = () => {
    setActiveModal("");
  };

  function handleButtonClick() {
    setActiveModal("add-garment");
  }
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("modal")) {
      onClose();
    }
  };

  const handleItemClick = (item) => {
    setActiveModal("preview");
    setSelectedCard(item);
  };

  /* const handleRadioClick = () => {
    console.log("is clicked");
    if (setClicked("modal__radio modal__label")) {
      setClicked("modal__label");
    }
  };*/

  useEffect(() => {
    getWeather(latitude, longitude, apiKey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, [setLoading]);

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
    <>
      {loading ? (
        <Loading />
      ) : (
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
              isOpen={activeModal === "add-garment"}
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
                <legend className="modal__legend">
                  {" "}
                  Slect the weather type:{" "}
                </legend>
                <label
                  htmlFor="hot"
                  className="modal__label modal__radio"
                  id="modal__radio-button"
                  //onClick={handleRadioClick}
                >
                  <input
                    id="hot"
                    type="radio"
                    name="weather_type"
                    className="modal__radio-input"
                  />{" "}
                  <span className="modal__radio-text"> Hot </span>
                </label>
                <label
                  htmlFor="warm"
                  className="modal__label modal__radio "
                  id="modal__radio-button"
                >
                  <input
                    id="warm"
                    type="radio"
                    name="weather_type"
                    className="modal__radio-input "
                  />{" "}
                  <span className="modal__radio-text">Warm</span>
                </label>
                <label
                  htmlFor="chilly"
                  className="modal__label modal__radio"
                  id="modal__radio-button"
                >
                  <input
                    id="chilly"
                    type="radio"
                    name="weather_type"
                    className="modal__radio-input "
                  />
                  <span className="modal__radio-text">Chilly</span>
                </label>
                <label
                  htmlFor="cold"
                  className="modal__label modal__radio"
                  id="modal__radio-button"
                >
                  <input
                    id="cold"
                    type="radio"
                    name="weather_type"
                    className="modal__radio-input "
                  />{" "}
                  <span className="modal__radio-text">Cold</span>
                </label>
              </fieldset>
            </ModalWithForm>
            <ItemModal
              handleOutsideClick={handleOutsideClick}
              activeModal={activeModal}
              item={selectedCard}
              onClose={onClose}
            />
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
