import "../blocks/modal.css";

const DeleteCardModal = ({
  handleOutsideClick,
  isOpen,
  handleDeleteItem,
  onClose,
  item,
  isLoading,
}) => {
  return (
    <div className={`modal modal_type_confirm ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__overlay" onClick={handleOutsideClick}>
        <div className="modal__container">
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
              <style><
              {isLoading ? "Saving..." : "Yes, delete item"}
              </style>
            </button>
            <button className="modal__cancel-button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteCardModal;
