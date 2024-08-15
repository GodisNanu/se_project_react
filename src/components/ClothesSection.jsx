import "../blocks/profile.css";
import ItemCard from "./ItemCard";

const ClothesSection = ({
  handleButtonClick,
  handleItemClick,
  clothingItems,
}) => {
  return (
    <section className="profile__clothes">
      <p className="profile__clothes-title"> Your items </p>
      <button
        className="profile__clothes-add-button"
        onClick={handleButtonClick}
      >
        {" "}
        + Add new{" "}
      </button>

      <ul className="profile__clothes-list">
        {clothingItems.map((item) => {
          return (
            <ItemCard
              key={item._id}
              item={item}
              onItemClick={handleItemClick}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default ClothesSection;
