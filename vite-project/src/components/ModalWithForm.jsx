import "../blocks/modal.css";

function ModalWithForm() {
  return (
    <div className="modal">
      <div className="modal__content">
        <h2 className="modal__title">New Garment</h2>
        <button className="modal__close">CLOSE</button>
        <form action="" className="modal__form">
          <label htmlFor="name" className="modal__label">
            Name{" "}
            <input
              type="
        text"
              className="modal__input"
              id="name"
              placeholder="Name"
            />
          </label>
          <label htmlFor="imageUrl" className="modal__label">
            Image{" "}
            <input
              type="
        text"
              className="modal__input"
              id="imageUrl"
              placeholder="Image URL"
            />
          </label>
          <fieldset className="modal__radio-buttons">
            <legend className="modal__legend"> Slect the weather</legend>
            <label htmlFor="hot" className="modal__label modal__radio">
              <input id="hot" type="radio" className="modal__radio-input" /> Hot
            </label>
            <label htmlFor="warm" className="modal__label modal__radio">
              <input id="warm" type="radio" className="modal__radio-input" />{" "}
              Warm
            </label>
            <label htmlFor="chilly" className="modal__label modal__radio">
              <input id="chilly" type="radio" className="modal__radio-input" />
              Chilly
            </label>
            <label htmlFor="cold" className="modal__label modal__radio">
              <input id="cold" type="radio" className="modal__radio-input" />{" "}
              Cold
            </label>
          </fieldset>
        </form>
        <button type="submit" className="modal__submit">
          {" "}
          Add garment{" "}
        </button>
      </div>
    </div>
  );
}

export default ModalWithForm;
