import { useState, useEffect } from "react";
import "../blocks/header.css";
import ToggleSwitch from "./ToggleSwitch";
import { Link } from "react-router-dom";

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

  useEffect(() => {
    if (!isLoggedIn) {
      return;
    }
    const Initial = userData.name.charAt(0).toUpperCase();
    setInitial(Initial);
  }, [isLoggedIn, userData]);

  return (
    <header className="header">
      <Link to="/">
        <img
          src="./src/assets/logo.svg"
          alt="wtwr logo"
          className="header__logo"
        />
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
            <Link to="/profile">
              {userData.avatar ? (
                <img
                  src={userData.avatar}
                  alt="user avatar"
                  className="header__avatar"
                />
              ) : (
                <div className="header__avatar-placeholder-container">
                  <span className="header__avatar-placeholder-initial">
                    {initial}
                  </span>
                </div>
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
