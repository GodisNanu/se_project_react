import { useEffect, useState } from "react";
import ModalWithForm from "./ModalWithForm";
import {
  validateBasicPassword,
  validateBasicEmail,
  validateBasicUrl,
  validateTextInput,
} from "../FormValidation";

const RegisterModal = ({
  handleOutsideClick,
  isOpen,
  handleRegistration,
  onClose,
  isLoading,
  handleLoginClick,
}) => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [urlInput, setUrlInput] = useState("");
  const [error, setError] = useState("");
  const [error2, setError2] = useState("");
  const [isValid, setIsValid] = useState(false);
  const resetInputs = () => {
    setEmailInput("");
    setPasswordInput("");
    setNameInput("");
    setUrlInput("");
  };

  useEffect(() => {
    /* if (isOpen) */ {
      resetInputs();
    }
  }, [isOpen]);

  const handleEmailChange = (e) => {
    const newValue = e.target.value;
    setEmailInput(newValue);
    const validationError = validateBasicEmail(newValue);
    setError(validationError ? validationError : "");
    const newErrors = { ...error };
    newErrors.name = validationError;
    const hasErrors = Object.values(newErrors).some((error) => error);
    setIsValid(!hasErrors);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPasswordInput(newPassword);
    const validationError2 = validateBasicPassword(newPassword);
    setError2(validationError2 ? validationError2 : "");
    const newErrors = { ...error };
    newErrors.name = validationError2;
    const hasErrors = Object.values(newErrors).some((error) => error);
    setIsValid(!hasErrors);
  };

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
      handleRegistration(emailInput, passwordInput, nameInput, urlInput);
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
      title="Sign Up"
      buttonText={isLoading ? "Saving..." : "Sign Up"}
      isOpen={isOpen}
      onClose={handleModalClose}
      handleSubmit={handleSubmit}
      isValid={isValid}
    >
      <label htmlFor="register-email" className="modal__label">
        Email{" "}
        <input
          type="email"
          className="modal__input"
          id="register-email"
          placeholder="Email Address"
          onChange={handleEmailChange}
          value={emailInput}
          autoComplete="new-username"
        />
        {error && <p className="modal__input-error">{error}</p>}
      </label>
      <label htmlFor="new-password" className="modal__label">
        Password{" "}
        <input
          type="password"
          className="modal__input "
          id="new-password"
          placeholder="Password"
          onChange={handlePasswordChange}
          value={passwordInput}
          autoComplete="new-password"
        />
        {error2 && <p className="modal__input-error">{error2}</p>}
      </label>

      <label htmlFor="register-name" className="modal__label">
        Name{" "}
        <input
          type="name"
          className="modal__input"
          id="register-name"
          placeholder="Name"
          onChange={handleNameChange}
          value={nameInput}
        />
        {error && <p className="modal__input-error">{error}</p>}
      </label>
      <label htmlFor="register-avatarUrl" className="modal__label">
        Avatar URL{" "}
        <input
          type="link"
          className="modal__input "
          id="register-avatarUrl"
          placeholder="Image URL"
          onChange={handleUrlChange}
          value={urlInput}
        />
        {error2 && <p className="modal__input-error">{error2}</p>}
      </label>
      <button
        className="modal__alternative-button"
        type="button"
        onClick={handleLoginClick}
      >
        {" "}
        Or Login{" "}
      </button>
    </ModalWithForm>
  );
};

export default RegisterModal;
