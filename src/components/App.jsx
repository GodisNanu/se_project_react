import { useEffect } from "react";
import { useState } from "react";
import "../blocks/page.css";
import Loading from "./Loading";
import { latitude } from "../utils/constants";
import { longitude } from "../utils/constants";
import { apiKey } from "../utils/constants";
import { Route, Routes, useNavigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute.jsx";
import Header from "./Header";
import Main from "./Main";
import Profile from "./Profile";
import EditProfileModal from "./EditProfileModal.jsx";
import AddItemModal from "./AddItemModal";
import { getWeather } from "../utils/weatherApi";
import { filterWeatherData } from "../utils/weatherApi";
import ItemModal from "./ItemModal";
import Footer from "./Footer";
import { CurrentTempUnitContext } from "../contexts/CurrentTempUnitContext";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import api from "../utils/api";
import auth from "../utils/auth";
import token from "../utils/token";
import DeleteCardModal from "./DeleteCardModal";
import RegisterModal from "./RegisterModal";
import LoginModal from "./LoginModal.jsx";

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

  const [userData, setUserData] = useState([]);
  const [clothingItems, setClothingItems] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const onClose = () => {
    setActiveModal("");
  };

  function handleAddButtonClick() {
    setActiveModal("add-garment");
  }
  function handleSignUpClick() {
    setActiveModal("signup");
  }
  function handleLoginClick() {
    setActiveModal("login");
  }
  function handleEditProfileClick() {
    setActiveModal("edit-profile");
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
    setIsLoading(true);
    getWeather(latitude, longitude, apiKey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
        setIsLoading(false);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    api
      .getItemList()
      .then((items) => {
        setClothingItems(items);
        setIsLoading(false);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    const jwt = token.getToken();
    if (!jwt) {
      return;
    }

    auth
      .checkToken(jwt)
      .then((user) => {
        setUserData(user);
        setIsLoggedIn(true);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleRegistration = (email, password, name, avatar) => {
    setIsLoading(true);
    auth
      .signup(name, avatar, email, password)
      .then(() => {
        onClose();
        setActiveModal("login");
        setIsLoading(false);
      })
      .catch(console.error);
  };

  const handleLogin = (email, password) => {
    setIsLoading(true);
    if (!email || !password) {
      return;
    }
    auth
      .signin(email, password)
      .then((data) => {
        if (data) {
          token.setToken(data.token);
          auth.checkToken(data.token).then((user) => {
            setUserData(user);
            setIsLoggedIn(true);
            onClose();
            setIsLoading(false);
          });
        }
      })
      .catch(console.error);
  };

  const handleLogout = () => {
    token.removeToken();
    setIsLoggedIn(false);
    setUserData([]);
    navigate("/");
  };

  const handleEditProfile = (name, avatar, resetInputs) => {
    const jwt = token.getToken();
    setIsLoading(true);
    api
      .editProfile({ jwt }, name, avatar)
      .then((data) => {
        setUserData(data.user);
        onClose();
        resetInputs();
        setIsLoading(false);
      })
      .catch(console.error);
  };

  const handleAddItem = (name, weather, imageUrl, resetInputs) => {
    console.log("starting to add item..");
    const jwt = token.getToken();
    setIsLoading(true);
    api
      .addItem({ jwt }, name, weather, imageUrl)
      .then((newItem) => {
        setClothingItems([newItem, ...clothingItems]);
        console.log("new item added:", newItem);
        console.log(clothingItems);
        onClose();
        resetInputs();
        setIsLoading(false);
      })
      .catch(console.error);
  };

  const handleCardLike = ({ id, isLiked }) => {
    const jwt = token.getToken();
    !isLiked
      ? api
          .addCardLike(id, { jwt })
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item))
            );
          })
          .catch(console.error)
      : api
          .removeCardLike(id, { jwt })
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item))
            );
          })
          .catch(console.error);
  };

  const handleDeleteClick = (item) => {
    setActiveModal("delete-item");
    setSelectedCard(item);
  };

  const handleDeleteItem = (item) => {
    const jwt = token.getToken();
    setIsLoading(true);
    api
      .removeItem(item._id, { jwt })
      .then(() => {
        setClothingItems(clothingItems.filter((card) => card._id !== item._id));
        onClose();
        setIsLoading(false);
      })
      .catch(console.error);
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
        <CurrentUserContext.Provider value={userData}>
          <div className="page">
            <CurrentTempUnitContext.Provider
              value={{ currentTempUnit, handleToggleSwitchChange }}
            >
              <div className="page__content">
                <Header
                  weatherData={weatherData}
                  userData={userData}
                  isLoggedIn={isLoggedIn}
                  isChecked={isChecked}
                  handleAddButtonClick={handleAddButtonClick}
                  handleSignUpClick={handleSignUpClick}
                  handleLoginClick={handleLoginClick}
                />

                <Routes>
                  <Route
                    path="/"
                    element={
                      <Main
                        weatherData={weatherData}
                        handleItemClick={handleItemClick}
                        clothingItems={clothingItems}
                        onCardLike={handleCardLike}
                      />
                    }
                  />
                  <Route
                    path="profile"
                    element={
                      <ProtectedRoute isLoggedIn={isLoggedIn}>
                        <Profile
                          userData={userData}
                          handleEditProfileClick={handleEditProfileClick}
                          handleLogout={handleLogout}
                          handleAddButtonClick={handleAddButtonClick}
                          handleItemClick={handleItemClick}
                          clothingItems={clothingItems}
                          onCardLike={handleCardLike}
                        />
                      </ProtectedRoute>
                    }
                  />
                </Routes>
                <EditProfileModal
                  handleOutsideClick={handleOutsideClick}
                  isOpen={activeModal === "edit-profile"}
                  handleEditProfile={handleEditProfile}
                  onClose={onClose}
                  isLoading={isLoading}
                />
                <AddItemModal
                  handleOutsideClick={handleOutsideClick}
                  isOpen={activeModal === "add-garment"}
                  handleAddItem={handleAddItem}
                  onClose={onClose}
                  isLoading={isLoading}
                />
                <ItemModal
                  handleOutsideClick={handleOutsideClick}
                  activeModal={activeModal}
                  item={selectedCard}
                  userData={userData}
                  onClose={onClose}
                  handleDeleteClick={handleDeleteClick}
                />
                <DeleteCardModal
                  handleOutsideClick={handleOutsideClick}
                  isOpen={activeModal === "delete-item"}
                  handleDeleteItem={handleDeleteItem}
                  onClose={onClose}
                  item={selectedCard}
                  isLoading={isLoading}
                />
                <RegisterModal
                  handleOutsideClick={handleOutsideClick}
                  isOpen={activeModal === "signup"}
                  handleRegistration={handleRegistration}
                  onClose={onClose}
                  isLoading={isLoading}
                  handleLoginClick={handleLoginClick}
                />
                <LoginModal
                  handleOutsideClick={handleOutsideClick}
                  isOpen={activeModal === "login"}
                  handleLogin={handleLogin}
                  onClose={onClose}
                  isLoading={isLoading}
                  handleRegisterClick={handleSignUpClick}
                />
                <Footer />
              </div>
            </CurrentTempUnitContext.Provider>
          </div>
        </CurrentUserContext.Provider>
      )}
    </>
  );
}

export default App;
