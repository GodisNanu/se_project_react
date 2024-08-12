import { useEffect, useState } from "react";
import ModalWithForm from "./ModalWithForm";
import { validateBasicUrl, validateTextInput } from "./FormValidation";

const AddItemModal = ({
  handleOutsideClick,
  isOpen,
  handleAddItem,
  onClose,
}) => {
  const [nameInput, setNameInput] = useState("");
  const [weatherInput, setWeatherInput] = useState("");
  const [urlInput, setUrlInput] = useState("");
  const [error, setError] = useState("");
  const [error2, setError2] = useState("");
  const [isValid, setIsValid] = useState(false);
  const resetInputs = () => {
    setNameInput("");
    setWeatherInput("");
    setUrlInput("");
  };

  useEffect(() => {
    if (isOpen) {
      resetInputs();
    }
  }, [isOpen]);

  const handleNameChange = (e) => {
    const newValue = e.target.value;
    setNameInput(newValue);
    const validationError = validateTextInput(newValue);
    setError(validationError ? validationError : "");
    const newErrors = { ...error };
    newErrors.name = validationError;
    const hasErrors = Object.values(newErrors).some((error) => error);
    setIsValid(!hasErrors);
  };
  const handleWeatherChange = (e) => {
    setWeatherInput(e.target.value);
  };
  const handleUrlChange = (e) => {
    const newUrl = e.target.value;
    setUrlInput(newUrl);
    const validationError2 = validateBasicUrl(newUrl);
    setError2(validationError2 ? validationError2 : "");
    const newErrors = { ...error };
    newErrors.name = validationError2;
    const hasErrors = Object.values(newErrors).some((error) => error);
    setIsValid(!hasErrors);
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (isValid) {
      handleAddItem(nameInput, weatherInput, urlInput);
      resetInputs();
      onClose();
    }
  }

  function handleModalClose() {
    setError("");
    setError2("");
    resetInputs();
    onClose();
  }
  return (
    <>
      <ModalWithForm
        handleOutsideClick={handleOutsideClick}
        title="New garment"
        buttonText="Add garment"
        isOpen={isOpen}
        onClose={handleModalClose}
        handleSubmit={handleSubmit}
        isValid={isValid}
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
            value={nameInput}
          />
          {error && <p className="modal__input-error">{error}</p>}
        </label>
        <label htmlFor="imageUrl" className="modal__label">
          Image{" "}
          <input
            type="
        link"
            className="modal__input "
            id="imageUrl"
            placeholder="Image URL"
            onChange={handleUrlChange}
            value={urlInput}
          />
          {error2 && <p className="modal__input-error">{error2}</p>}
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
              checked={weatherInput === "hot"}
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
              checked={weatherInput === "warm"}
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
              checked={weatherInput === "chilly"}
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
              checked={weatherInput === "cold"}
            />{" "}
            <span className="modal__radio-text">Cold</span>
          </label>
        </fieldset>
      </ModalWithForm>
    </>
  );
};

export default AddItemModal;
