import "../blocks/profile.css";
import ItemCard from "./ItemCard";

const ClothesSection = ({
  handleAddButtonClick,
  handleItemClick,
  userData,
  clothingItems,
  onCardLike,
}) => {
  return (
    <section className="profile__clothes">
      <p className="profile__clothes-title"> Your items </p>
      <button
        className="profile__clothes-add-button"
        onClick={handleAddButtonClick}
      >
        {" "}
        + Add new{" "}
      </button>

      <ul className="profile__clothes-list">
        {clothingItems.map((item) => {
          const isOwn = item.owner === userData._id;

          return isOwn ? (
            <ItemCard
              key={item._id}
              item={item}
              onItemClick={handleItemClick}
              onCardLike={onCardLike}
            />
          ) : null;
        })}
      </ul>
    </section>
  );
};

export default ClothesSection;
