import "../blocks/profile.css";
import { useState, useEffect } from "react";

function Sidebar({ userData, handleEditProfileClick, handleLogout }) {
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
    <section className="profile__sidebar">
      <div className="profile__sidebar-user-info">
        {hasError ? (
          <div className="profile__avatar-placeholder-container">
            <span className="profile__avatar-placeholder-initial">
              {initial}
            </span>
          </div>
        ) : (
          <img
            src={userData.avatar}
            alt="user avatar"
            className="profile__avatar"
            onError={handleOnError}
          />
        )}
        <p className="profile__username"> {userData.name} </p>
      </div>
      <div className="profile__sidebar-buttons">
        <button
          className="profile__edit-button"
          onClick={handleEditProfileClick}
        >
          Change profile data
        </button>
        <button className="profile__logout-button" onClick={handleLogout}>
          Log out
        </button>
      </div>
    </section>
  );
}

export default Sidebar;
