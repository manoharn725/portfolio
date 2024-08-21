import "./index.scss";

const BorderLoader = ({ height = "322px", isCalmMode = false }) => {
  return (
    <div
      className={`loader-container ${
        isCalmMode ? "loader-container-calm-mode" : ""
      }`}
      style={{ height, width: height }}
    >
      <div className="string"></div>
      <div className="string"></div>
      <div className="string"></div>
      <div className="string"></div>
      <div className="string"></div>
    </div>
  );
};
export default BorderLoader;
