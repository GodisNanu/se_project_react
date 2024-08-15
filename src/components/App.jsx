import { useEffect } from "react";
import { useState } from "react";
import "../blocks/page.css";
import Loading from "./Loading";
import { latitude } from "../utils/constants";
import { longitude } from "../utils/constants";
import { apiKey } from "../utils/constants";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Profile from "./Profile";
import AddItemModal from "./AddItemModal";
import { getWeather } from "../utils/weatherApi";
import { filterWeatherData } from "../utils/weatherApi";
import { getWeatherType } from "../utils/weatherApi";
import ItemModal from "./ItemModal";
import Footer from "./Footer";
import CurrentTempUnitContext from "../contexts/CurrentTempUnitContext";
import api from "../utils/api";
import DeleteCardModal from "./DeleteCardModal";

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

  const [clothingItems, setClothingItems] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  const onClose = (resetValues) => {
    setActiveModal("");
  };

  function handleButtonClick() {
    setActiveModal("add-garment");
  }

  const [currentTempUnit, setCurrentTempUnit] = useState("F");
  const [isChecked, setIsChecked] = useState(currentTempUnit === "C");
  useEffect(() => setIsChecked(currentTempUnit === "C"), [currentTempUnit]);
  const [selectedLabel, setSelectedLabel] = useState("");

  const handleToggleSwitchChange = () => {
    currentTempUnit === "F" ? setCurrentTempUnit("C") : setCurrentTempUnit("F");
    selectedLabel === "toggle-switch__temp-selected"
      ? setSelectedLabel("")
      : setSelectedLabel("toggle-switch__temp-selected");
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
      })
      .catch(console.error);
  }, [setLoading]);

  useEffect(() => {
    api
      .getItemList()
      .then((items) => {
        setClothingItems(items);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleAddItem = (name, weather, imageUrl) => {
    api
      .addItem(name, weather, imageUrl)
      .then((newItem) => {
        setClothingItems([newItem, ...clothingItems]);
        onClose();
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteClick = (item) => {
    setActiveModal("delete-item");
    setSelectedCard(item);
  };

  const handleDeleteItem = (item) => {
    api
      .removeItem(item._id)
      .then(() => {
        setClothingItems(clothingItems.filter((card) => card._id !== item._id));
        onClose();
      })
      .catch((err) => console.log(err));
  };

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
          <CurrentTempUnitContext.Provider
            value={{ currentTempUnit, handleToggleSwitchChange }}
          >
            <div className="page__content">
              <Header
                weatherData={weatherData}
                currentTempUnit={currentTempUnit}
                selectedLabel={selectedLabel}
                isChecked={isChecked}
                handleToggleSwitchChange={handleToggleSwitchChange}
                handleButtonClick={handleButtonClick}
              />

              <Routes>
                <Route
                  path="/"
                  element={
                    <Main
                      weatherData={weatherData}
                      currentTempUnit={currentTempUnit}
                      handleItemClick={handleItemClick}
                      clothingItems={clothingItems}
                    />
                  }
                />
                <Route
                  path="profile"
                  element={
                    <Profile
                      handleButtonClick={handleButtonClick}
                      handleItemClick={handleItemClick}
                      clothingItems={clothingItems}
                    />
                  }
                />
              </Routes>
              <AddItemModal
                handleOutsideClick={handleOutsideClick}
                isOpen={activeModal === "add-garment"}
                handleAddItem={handleAddItem}
                onClose={onClose}
              />
              <ItemModal
                handleOutsideClick={handleOutsideClick}
                activeModal={activeModal}
                item={selectedCard}
                onClose={onClose}
                handleDeleteClick={handleDeleteClick}
              />
              <DeleteCardModal
                handleOutsideClick={handleOutsideClick}
                isOpen={activeModal === "delete-item"}
                handleDeleteItem={handleDeleteItem}
                onClose={onClose}
                item={selectedCard}
              />
              <Footer />
            </div>
          </CurrentTempUnitContext.Provider>
        </div>
      )}
    </>
  );
}

export default App;
