import ReactDOM from "react-dom";
import { useRef } from "react";
import "./index.scss";

const Modal = ({ isDevelopers = false, developer = {}, onClose }) => {
  const modalRef = useRef(null);

  const handleClose = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <div className="modal__container" ref={modalRef} onClick={handleClose}>
      <div className="modal__box">
        <div className="modal__close" onClick={onClose}></div>
        {isDevelopers ? (
          <div
            key={developer.projectDeveloperName}
            className="modal__box--developer"
          >
            <div
              style={{
                backgroundImage: `var(--${developer.projectDeveloperImage}-img)`,
              }}
              className="modal__box--developer-image"
            ></div>
            <div className="modal__box--developer-detailes">
            <div className="modal__box--developer-name">
              <span>Name: </span>{developer.projectDeveloperName}
            </div>
            <div className="modal__box--developer-designation">
              <span>Role:</span> {developer.projectDeveloperDesignation}
            </div>
            </div>
          </div>
        ) : (
          <p>Developer data not-found.</p>
        )}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
