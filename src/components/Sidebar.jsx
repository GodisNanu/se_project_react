import "..//blocks/profile.css";

function Sidebar({ userData, handleEditProfileClick, handleLogout }) {
  return (
    <section className="profile__sidebar">
      <div className="profile__sidebar-user-info">
        <img
          src={userData.avatar}
          alt="user avatar"
          className="profile__avatar"
        />
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
