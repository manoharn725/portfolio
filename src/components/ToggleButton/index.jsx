import { useState } from "react";
import "./index.scss";

const ToggleButton = () => {
  const [isDark, setIsDark] = useState(false);

  const handleToggle = () => {
    setIsDark(!isDark);
  };

  return (
    <label className="toggle-button">
      <input onClick={handleToggle} type="checkbox" />
      <span 
      style={{backgroundImage:`var(--${isDark? 'dark-mode' : 'light-mode'}-img)`, backgroundPosition:`${isDark? '4px' : '34px'} center`}}
       className="toggle-button__slider">
        {/* {isDark ? "dark" : "light"} */}
        </span>
    </label>
  );
};
export default ToggleButton;
