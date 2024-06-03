import "../blocks/header.css";

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

function Header() {
  return (
    <header className="header">
      <img
        src="../src/assets/logo.svg"
        alt="wtwr logo"
        className="header__logo"
      />
      <p className="header__date-and-location">{currentDate}, Location</p>
      <button className="header__add-clothes-button">+ Add clothes</button>
      <div className="header__user-container">
        <p className="header__username"> Terrence Tegegne </p>
        <img
          src="../src/assets/avatar.png"
          alt="user avatar"
          className="header__avatar"
        />
      </div>
    </header>
  );
}

export default Header;
