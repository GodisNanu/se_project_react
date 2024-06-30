import "../blocks/modal.css";

function ItemModal({ activeModal, item, onClose }) {
  return (
    <div className={`modal ${activeModal === "preview" ? "modal_opened" : ""}`}>
      <div className="modal__content modal__content-card-item">
        <button
          onClick={onClose}
          className="modal__close modal__close-card-item"
        ></button>
        <img src={item.link} alt={item.name} className="modal__image" />
        <div className="modal__caption">
          <h2 className="modal__caption-title">{item.name}</h2>
          <p className="modal__weather">Weather: {item.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
