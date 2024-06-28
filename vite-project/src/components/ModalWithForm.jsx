import { Children } from "react";
import "../blocks/modal.css";

function ModalWithForm({ children, title, buttonText }) {
  return (
    <div className="modal">
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button src="" className="modal__close">
          Close
        </button>
        <form action="" className="modal__form">
          {children}
        </form>
        <button type="submit" className="modal__submit">
          {" "}
          {buttonText}{" "}
        </button>
      </div>
    </div>
  );
}

export default ModalWithForm;
