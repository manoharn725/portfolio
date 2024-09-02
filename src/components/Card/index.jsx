import { useState } from "react";
import Modal from "../Modal";
import "./index.scss";
import Button from "../Button";

const Card = ({
  icon = "man",
  image = "",
  url = "",
  title = "",
  description = [],
  developers = [],
  isDevelopers = false,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDeveloper, setCurrentDeveloper] = useState(null);

  const handleDeveloper = (developer) => {
    setCurrentDeveloper(developer);
    setIsModalOpen(true);
  };
  const onClose = () => {
    setIsModalOpen(false);
  };
  console.log(description);
  return (
    <div className="card__container">
      <div
        style={{ backgroundImage: `var(--${image}-img)` }}
        className="card__image"
      ></div>
      <div className="card__content ">
        <div className="card__content--top">
          <i
            style={{ backgroundImage: `var(--${icon}-img)` }}
            className="card__content--icon"
          ></i>

          <h6 className="card__content--title">{title}</h6>
          
          <ul>
            {Array.isArray(description) ? (
              description.map((desc, index) => <li key={index}>{desc}</li>)
            ) : (
              <li>{description}</li>
            )}
          </ul>
        </div>
        <div className="card__content--bottom">
          {isDevelopers ? (
            <div className="developers">
              <h6>Developers</h6>
              <div className="developer">
                {developers.map((developer) => (
                  <img
                    key={developer.projectDeveloperName}
                    style={{
                      backgroundImage: `var(--${developer.projectDeveloperImage}-img)`,
                    }}
                    className="developer__image"
                    data-developerName={developer.projectDeveloperName}
                    data-developerDesignation={
                      developer.projectDeveloperDesignation
                    }
                    onClick={() => handleDeveloper(developer)}
                    alt={developer.projectDeveloperName}
                  />
                ))}
              </div>
            </div>
          ) : (
            ""
          )}
          <a href={url} target="_blank" rel="noopener noreferrer">
            <Button title="Visit" isPrimary isFillMode />
          </a>
        </div>
      </div>
      {isModalOpen ? (
        <Modal
          isDevelopers={true}
          developer={currentDeveloper}
          onClose={onClose}
        />
      ) : (
        ""
      )}
    </div>
  );
};
export default Card;
