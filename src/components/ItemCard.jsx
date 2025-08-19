import "../blocks/card.css";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useContext } from "react";

function ItemCard({ item, onItemClick, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);
  const isLiked = item.likes.some((id) => id === currentUser._id);
  const itemLikeButtonClassName = `card__list-like-button ${
    isLiked ? "card__list-like-button_active" : ""
  }`;
  const handleLike = (item) => {
    onCardLike({ id: item, isLiked });
  };
  return (
    <li className="card__list-item">
      <div className="card__list-content">
        <h2 className="card__list-name"> {item.name}</h2>
        <button
          type="button"
          className={itemLikeButtonClassName}
          onClick={handleLike}
        ></button>
      </div>
      <img
        onClick={() => {
          onItemClick(item);
        }}
        src={item.imageUrl}
        alt={item.name}
        className="card__list-image"
      />
    </li>
  );
}

export default ItemCard;
