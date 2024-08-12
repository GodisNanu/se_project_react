import "../blocks/modal.css";

function ItemModal({
  handleOutsideClick,
  activeModal,
  item,
  onClose,
  handleDeleteClick,
}) {
  return (
    <div
      onClick={handleOutsideClick}
      className={`modal ${activeModal === "preview" ? "modal_opened" : ""}`}
    >
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
        <button
          className="modal__delete-item-button"
          onClick={() => {
            handleDeleteClick(item);
          }}
        >
          Delete item
        </button>
      </div>
    </div>
  );
}

export default ItemModal;
