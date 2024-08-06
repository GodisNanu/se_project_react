import "../blocks/header.css";
import ToggleSwitch from "./ToggleSwitch";

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

function Header({ weatherData, handleButtonClick }) {
  return (
    <header className="header">
      <img
        src="./src/assets/logo.svg"
        alt="wtwr logo"
        className="header__logo"
      />
      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <div className="header__switch-container">
        <ToggleSwitch />
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
        <img
          src="./src/assets/avatar.png"
          alt="user avatar"
          className="header__avatar"
        />
      </div>
    </header>
  );
}

export default Header;
