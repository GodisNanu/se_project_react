import { useState, useContext, useEffect } from "react";
import "../blocks/toggle-switch.css";
import CurrentTempUnitContext from "../contexts/CurrentTempUnitContext";

const ToggleSwitch = ({
  selectedLabel,
  isChecked,
  handleToggleSwitchChange,
}) => {
  /* const { currentTempUnit, handleToggleSwitchChange } = useContext(
    CurrentTempUnitContext
  );
*/
  return (
    <div className="toggle-switch">
      <input
        className="toggle-switch__checkbox"
        type="checkbox"
        name="toggle-switch-checkbox"
        id={"toggle-switch-new"}
        // value={currentTempUnit}
        onChange={handleToggleSwitchChange}
        checked={isChecked}
      />{" "}
      <label className="toggle-switch__label" htmlFor={"toggle-switch-new"}>
        {" "}
        <p
          className={
            !isChecked ? (selectedLabel = "toggle-switch__temp-selected") : ""
          }
        >
          {" "}
          F{" "}
        </p>
        <span className="toggle-switch__button " />
        <p className={isChecked ? selectedLabel : ""}> C </p>
      </label>
    </div>
  );
};

export default ToggleSwitch;
