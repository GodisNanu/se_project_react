import "../blocks/header.css";
import ToggleSwitch from "./ToggleSwitch";
import { Link } from "react-router-dom";

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

function Header({
  weatherData,
  currentTempUnit,
  selectedLabel,
  isChecked,
  handleToggleSwitchChange,
  handleButtonClick,
}) {
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
        <ToggleSwitch
          currentTempUnit={currentTempUnit}
          handleToggleSwitchChange={handleToggleSwitchChange}
          isChecked={isChecked}
          selectedLabel={selectedLabel}
        />
      </div>
      <button
        onClick={handleButtonClick}
        type="button"
        className="header__add-clothes-button"
      >
        + Add clothes
      </button>

      <div className="header__user-container">
        <p className="header__username"> Terrence Tegegne </p>
        <Link to="/profile">
          <img
            src="./src/assets/avatar.png"
            alt="user avatar"
            className="header__avatar"
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
