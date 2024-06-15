import "../blocks/card.css";

function ItemCard({ item }) {
  return (
    <li className="card__list-item">
      <h2 className="card__list-name"> {item.name}</h2>
      <img src={item.link} alt={item.name} className="card__list-image" />
    </li>
  );
}

export default ItemCard;
