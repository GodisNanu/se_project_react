import { useEffect, useState } from "react";
import ModalWithForm from "./ModalWithForm";

const AddItemModal = ({
  handleOutsideClick,
  isOpen,
  handleAddItem,
  onClose,
}) => {
  // declare state for each input field
  // const [inputs, resetInputs] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [weatherInput, setWeatherInput] = useState("");
  const [urlInput, setUrlInput] = useState("");
  const resetInputs = () => {
    setNameInput("");
    setWeatherInput("");
    setUrlInput("");
  };
  // use a useEffect hook to reset the input field state to empty strings when
  // the modal is opened
  useEffect(() => {
    if (isOpen) {
      resetInputs();
    }
  }, [isOpen]);

  // create onChange handlers corresponding to each state variable

  const handleNameChange = (e) => {
    setNameInput(e.target.value);
    console.log("name changed");
  };
  const handleWeatherChange = (e) => {
    setWeatherInput(e.target.value);
    console.log("weather changed");
  };
  const handleUrlChange = (e) => {
    setUrlInput(e.target.value);
    console.log("url changed");
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(nameInput, weatherInput, urlInput);
    handleAddItem(nameInput, weatherInput, urlInput);
    onClose();
  }

  return (
    <>
      {/* don't forget to pass appropriate props to ModalWithForm */}
      <ModalWithForm
        handleOutsideClick={handleOutsideClick}
        title="New garment"
        buttonText="Add garment"
        isOpen={isOpen}
        onClose={onClose}
        handleSubmit={handleSubmit}
      >
        <label htmlFor="name" className="modal__label">
          Name{" "}
          <input
            type="
        text"
            className="modal__input"
            id="name"
            placeholder="Name"
            onChange={handleNameChange}
          />
        </label>
        <label htmlFor="imageUrl" className="modal__label">
          Image{" "}
          <input
            type="
        text"
            className="modal__input "
            id="imageUrl"
            placeholder="Image URL"
            onChange={handleUrlChange}
          />
        </label>
        <fieldset className="modal__radio-buttons">
          <legend className="modal__legend"> Slect the weather type: </legend>
          <label
            htmlFor="hot"
            className="modal__label modal__radio"
            id="modal__radio-button"
          >
            <input
              id="hot"
              type="radio"
              name="weather_type"
              className="modal__radio-input"
              value={"hot"}
              onChange={handleWeatherChange}
            />{" "}
            <span className="modal__radio-text"> Hot </span>
          </label>
          <label
            htmlFor="warm"
            className="modal__label modal__radio "
            id="modal__radio-button"
          >
            <input
              id="warm"
              type="radio"
              name="weather_type"
              className="modal__radio-input "
              value={"warm"}
              onChange={handleWeatherChange}
            />{" "}
            <span className="modal__radio-text">Warm</span>
          </label>
          <label
            htmlFor="chilly"
            className="modal__label modal__radio"
            id="modal__radio-button"
          >
            <input
              id="chilly"
              type="radio"
              name="weather_type"
              className="modal__radio-input "
              value={"chilly"}
              onChange={handleWeatherChange}
            />
            <span className="modal__radio-text">Chilly</span>
          </label>
          <label
            htmlFor="cold"
            className="modal__label modal__radio"
            id="modal__radio-button"
          >
            <input
              id="cold"
              type="radio"
              name="weather_type"
              className="modal__radio-input "
              value={"cold"}
              onChange={handleWeatherChange}
            />{" "}
            <span className="modal__radio-text">Cold</span>
          </label>
        </fieldset>
      </ModalWithForm>
    </>
  );
};

export default AddItemModal;
