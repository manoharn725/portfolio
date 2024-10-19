import { useTheme } from "../../context/themeContext";
import "./index.scss";

const ToggleButton = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <div className="toggle-button" onClick={toggleTheme}>
      <div className={`theme-${isDarkTheme ? "dark" : "light"}`} />
      <span
        style={{
          backgroundImage: `var(--${
            isDarkTheme ? "dark-mode" : "light-mode"
          }-img)`,
          backgroundPosition: `${isDarkTheme ? "4px" : "34px"} center`,
        }}
        className="toggle-button__slider"
      ></span>
    </div>
  );
};
export default ToggleButton;
