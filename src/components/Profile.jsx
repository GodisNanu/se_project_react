import "../blocks/profile.css";
// inport sidebar
//import clothes section
import { defaultClothingItems } from "../utils/constants";
import ItemCard from "./ItemCard";

const Profile = (/* { cards, onCardClick, onCardDelete, onAddNewClick }*/) => (
  <div className="profile">
    <section className="profile__sidebar">
      <img
        src="./src/assets/avatar.png"
        alt="user avatar"
        className="profile__avatar"
      />
      <p className="profile__username"> Terrence Tegegne </p>
    </section>
    <section className="profile__clothes">
      <p className="profile__clothes-title"> Your items </p>
      <button className="profile__clothes-add-button"> + Add new </button>

      <ul className="profile__clothes-list">
        {defaultClothingItems.map((item) => {
          return <ItemCard key={item._id} item={item} />;
        })}
      </ul>
    </section>
  </div>
);

export default Profile;
