import { useEffect, useState } from "react";
import ModalWithForm from "./ModalWithForm";
import { ValidateBasicUrl, ValidateTextInput } from "../FormValidation";

const EditProfileModal = ({
  handleOutsideClick,
  isOpen,
  handleEditProfile,
  onClose,
  isLoading,
}) => {
  const [nameInput, setNameInput] = useState("");
  const [urlInput, setUrlInput] = useState("");
  const [error, setError] = useState("");
  const [error2, setError2] = useState("");
  const [isValid, setIsValid] = useState(false);
  const resetInputs = () => {
    setNameInput("");
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
    const validationError = ValidateTextInput(newValue);
    setError(validationError ? validationError : "");
    const newErrors = { ...error };
    newErrors.name = validationError;
    const hasErrors = Object.values(newErrors).some((error) => error);
    setIsValid(!hasErrors);
  };

  const handleUrlChange = (e) => {
    const newUrl = e.target.value;
    setUrlInput(newUrl);
    const validationError2 = ValidateBasicUrl(newUrl);
    setError2(validationError2 ? validationError2 : "");
    const newErrors2 = { ...error };
    newErrors2.name = validationError2;
    const hasErrors2 = Object.values(newErrors2).some((error) => error);
    setIsValid(!hasErrors2);
  };

  function handleSubmit(e) {
    if (isValid) {
      handleEditProfile(nameInput, urlInput, resetInputs);
    }
  }

  function handleModalClose() {
    setError("");
    setError2("");
    resetInputs();
    onClose();
  }
  return (
    <ModalWithForm
      handleOutsideClick={handleOutsideClick}
      title="Change profile data"
      buttonText={isLoading ? "Saving..." : "Save changes"}
      isOpen={isOpen}
      onClose={handleModalClose}
      handleSubmit={handleSubmit}
      isValid={isValid}
    >
      <label htmlFor="new-name" className="modal__label">
        Name{" "}
        <input
          type="text"
          className="modal__input"
          id="new-name"
          placeholder="Name"
          onChange={handleNameChange}
          value={nameInput}
        />
        {error && <p className="modal__input-error">{error}</p>}
      </label>
      <label htmlFor="new-avatarUrl" className="modal__label">
        Avatar{" "}
        <input
          type="link"
          className="modal__input "
          id="new-avatarUrl"
          placeholder="Avatar URL"
          onChange={handleUrlChange}
          value={urlInput}
        />
        {error2 && <p className="modal__input-error">{error2}</p>}
      </label>
    </ModalWithForm>
  );
};

export default EditProfileModal;
