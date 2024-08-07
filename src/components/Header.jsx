import "../blocks/header.css";
import ToggleSwitch from "./ToggleSwitch";

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

function Header({
  weatherData,
  isChecked,
  selectedLabel,
  handleToggleSwitchChange,
  handleButtonClick,
}) {
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
        <ToggleSwitch
          selectedLabel={selectedLabel}
          isChecked={isChecked}
          handleToggleSwitchChange={handleToggleSwitchChange}
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
