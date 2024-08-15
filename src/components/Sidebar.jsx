import "..//blocks/profile.css";

function Sidebar() {
  return (
    <>
      <section className="profile__sidebar">
        <img
          src="./src/assets/avatar.png"
          alt="user avatar"
          className="profile__avatar"
        />
        <p className="profile__username"> Terrence Tegegne </p>
      </section>
    </>
  );
}

export default Sidebar;
