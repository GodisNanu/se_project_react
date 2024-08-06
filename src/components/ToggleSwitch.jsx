import { useState, useContext, useEffect } from "react";
import "../blocks/toggle-switch.css";
import CurrentTempUnitContext from "../contexts/CurrentTempUnitContext";

const ToggleSwitch = () => {
  /* const { currentTempUnit, handleToggleSwitchChange } = useContext(
    CurrentTempUnitContext
  );

  const [isChecked, setIsChecked] = useState(currentTempUnit === "C");
  useEffect(() => setIsChecked(currentTempUnit === "C"), [currentTempUnit]);
*/
  return (
    <div className="toggle-switch">
      <input
        className="toggle-switch__checkbox"
        type="checkbox"
        name="toggle-switch-checkbox"
        id={"toggle-switch-new"}
        // value={currentTempUnit}
        // onChange={handleToggleSwitchChange}
        // checked={isChecked}
      />
      <label className="toggle-switch__label" htmlFor={"toggle-switch-new"}>
        <span className="toggle-switch__button " />
      </label>
    </div>
  );
};

export default ToggleSwitch;
