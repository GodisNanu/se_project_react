import { useState, useEffect } from "react";
import "../blocks/header.css";
import ToggleSwitch from "./ToggleSwitch";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

function Header({
  weatherData,
  userData,
  isLoggedIn,
  isChecked,
  handleAddButtonClick,
  handleSignUpClick,
  handleLoginClick,
}) {
  const [initial, setInitial] = useState("");
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!isLoggedIn) {
      return;
    }
    const userInitial = userData.name.charAt(0).toUpperCase();
    setInitial(userInitial);
  }, [isLoggedIn, userData]);

  const handleOnError = () => {
    setHasError(true);
  };
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="wtwr logo" className="header__logo" />
      </Link>
      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <div className="header__switch-container">
        <ToggleSwitch isChecked={isChecked} />
      </div>
      {isLoggedIn ? (
        <>
          <button
            onClick={handleAddButtonClick}
            type="button"
            className="header__add-clothes-button"
          >
            + Add clothes
          </button>

          <div className="header__user-container">
            <p className="header__username"> {userData.name} </p>
            <Link to="/profile" className="header__avatar-link">
              {!userData.avatar || hasError ? (
                <div className="header__avatar-placeholder-container">
                  <span className="header__avatar-placeholder-initial">
                    {initial}
                  </span>
                </div>
              ) : (
                <img
                  src={userData.avatar}
                  alt={"user avatar"}
                  className="header__avatar"
                  onError={handleOnError}
                />
              )}
            </Link>
          </div>
        </>
      ) : (
        <>
          <button
            onClick={handleSignUpClick}
            type="button"
            className="header__signup-button"
          >
            Sign Up
          </button>
          <button
            onClick={handleLoginClick}
            type="button"
            className="header__login-button"
          >
            Log In
          </button>
        </>
      )}
    </header>
  );
}

export default Header;
