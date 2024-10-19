import "./index.scss";

const Button = ({
  id = "",
  title = "",
  type = "button",
  onClick = () => {},
  isPrimary = false,
  isDisabled = false,
  isLoading = false,
  isSpiner = false,
  isFillMode = false,
  isWarning = false,
  isSmall = false,
  isMedium = false,
  isOutline = false,
  isDownload = false,
}) => {
  return (
    <button
      id={id}
      type={type}
      tabIndex={0}
      aria-label={title}
      disabled={isDisabled}
      onClick={onClick}
      className={`bold button 
        ${isPrimary ? "button--primary" : ""}
        ${isDisabled ? "button--disabled" : ""}
        ${isLoading ? "button--loading" : ""}
        ${isSpiner ? "button--spiner" : ""}
        ${isFillMode ? "button--fill" : ""}
        ${isWarning ? "button--warning" : ""}
        ${isSmall ? "button--small" : ""}
        ${isMedium ? "button--medium" : ""}
        ${isOutline ? "button--outline" : ""}
        `}
    >
      {title}
      {isDownload ? <span className="button--download"></span> : ""}
    </button>
  );
};
export default Button;
