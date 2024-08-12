import "../blocks/modal.css";

const DeleteCardModal = ({
  handleOutsideClick,
  isOpen,
  handleDeleteItem,
  onClose,
  item,
}) => {
  return (
    <div
      onClick={handleOutsideClick}
      className={`modal__confirm ${isOpen ? "modal_opened" : ""}`}
    >
      <div className="modal__content">
        <p className="modal__confirm-title">
          {" "}
          Are you sure you want to delete this item? This action is
          irreversible.
        </p>
        <button className="modal__close" onClick={onClose}></button>
        <button
          className="modal__confirm-delete-button"
          onClick={() => {
            handleDeleteItem(item);
          }}
        >
          Yes, delete item
        </button>
        <button className="modal__cancel-button" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteCardModal;
