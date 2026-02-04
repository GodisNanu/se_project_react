import "../blocks/card.css";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useContext } from "react";

function ItemCard({ item, onItemClick, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);
  const isLiked = item.likes?.some((id) => id === currentUser._id);
  const itemLikeButtonClassName = `card__list-like-button ${
    isLiked ? "card__list-like-button_active" : ""
  }`;
  const handleLike = () => {
    onCardLike({ id: item._id, isLiked });
  };
  return (
    <li className="card__list-item">
      <div className="card__list-content">
        <h2 className="card__list-name"> {item.name}</h2>
        {currentUser?._id && (
          <button
            type="button"
            className={itemLikeButtonClassName}
            onClick={handleLike}
          ></button>
        )}
      </div>
      <img
        onClick={() => {
          onItemClick(item);
        }}
        width={320}
        height={320}
        src={item.imageUrl}
        alt={item.name}
        className="card__list-image"
      />
    </li>
  );
}

export default ItemCard;
