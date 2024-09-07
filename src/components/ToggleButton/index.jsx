import { useTheme } from "../../context/themeContext";
import "./index.scss";

const ToggleButton = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="toggle-button" onClick={toggleTheme}>
      <div className={`theme-${isDark ? "dark" : "light"}`} />
      <span
        style={{
          backgroundImage: `var(--${isDark ? "dark-mode" : "light-mode"}-img)`,
          backgroundPosition: `${isDark ? "4px" : "34px"} center`,
        }}
        className="toggle-button__slider"
      ></span>
    </div>
  );
};
export default ToggleButton;
