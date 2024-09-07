import { useTheme } from "../../context/themeContext";
import "./index.scss";

const ToggleButton = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <label className="toggle-button">
      <input onClick={toggleTheme} type="checkbox" />
      <span
        style={{
          backgroundImage: `var(--${isDark ? "dark-mode" : "light-mode"}-img)`,
          backgroundPosition: `${isDark ? "4px" : "34px"} center`,
        }}
        className="toggle-button__slider"
      >
        {/* {isDark ? "dark" : "light"} */}
      </span>
    </label>
  );
};
export default ToggleButton;
