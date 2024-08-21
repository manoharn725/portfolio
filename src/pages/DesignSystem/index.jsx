import CatLoader from "../../components/CatLoader";
import Button from "../../components/Button";
import Card from "../../components/Card";
import { useNavigate } from "react-router-dom";
import BorderLoader from "../../components/BorderLoader";
import './index.scss';

const DesignSystem = () => {
  const colors = [
    "Default Color",
    "Primary",
    "Primary Light",
    "Primary Dark",
    "Secondary",
    "Secondary Light",
    "Secondary Dark",
    "Tertiary",
    "Tertiary Light",
    "Tertiary Dark",
    "Base 1",
    "Base 2",
    "Gray Dark 1",
    "Gray Dark 2",
    "White",
    "Black",
  ];

  const navigate = useNavigate();

  const toPageNotFound = () => {
    navigate("/page-not-found");
  };

  return (
    <div className="container">
      <section className="design-system-colors">
        <h1 className="typography__heading shadow-text">Colors</h1>
        <div className="design-system-colors__container">
          {colors.map((color) => (
            <p key={color} className="design-system-color__box">
              {color}
            </p>
          ))}
        </div>
      </section>
      <section className="design-system-typography">
        <h1 className="typography__heading shadow-text">Typography</h1>
        <div className="design-system-typography__container">
          <div className="design-system-typography__content">
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <h5>Heading 5</h5>
            <h6>Heading 6</h6>
          </div>
          <div className="design-system-typography__content">
            <b>Bold</b>
            <i>italic</i>
            <u>underline</u>
            <p>This is a paragaraph apparently.</p>
            <big>Big</big>
            <small>Small</small>
            <b className="error">*Error</b>
            <a href="#">Link</a>
          </div>
        </div>
      </section>
      <section className="design-system-loaders">
        <h1 className="typography__heading shadow-text">Loaders</h1>
        <div className="design-system-loaders__container">
          <CatLoader height="220px" />
          <BorderLoader height="220px" />
          <BorderLoader height="220px" isCalmMode />
        </div>
      </section>
      <section className="design-system-buttons">
        <h1 className="typography__heading shadow-text"> Buttons</h1>
        <div className="design-system-buttons__container large">
          <Button
            title="Primary Button"
            isPrimary
            isFillMode={false}
            onClick={toPageNotFound}
          />
          <Button isFillMode={false} title="Primary Button" isPrimary />
          <Button
            isFillMode={false}
            title="Primary Disabled"
            isPrimary
            isDisabled
          />
          <Button
            isFillMode={false}
            title="Primary loading"
            isPrimary
            isLoading
          />
          <Button
            isFillMode={false}
            title="Border loader"
            isLoading
            isSpiner
            isPrimary
          />
          <Button isFillMode={false} title="Secondary Button" />
          <Button isFillMode={false} title="Secondary Disabled" isDisabled />
          <Button isFillMode={false} title="Secondary loading" isLoading />
          <Button
            isFillMode={false}
            title="Border loader"
            isLoading
            showBorderLoader
          />
          <Button isFillMode={false} title="Warning Button" isWarning />
          <Button
            isFillMode={false}
            title="Warning Disabled"
            isDisabled
            isWarning
          />
          <Button
            isFillMode={false}
            title="Warning Loading"
            isWarning
            isLoading
          />
          <Button
            isFillMode={false}
            title="Warning Loading"
            isWarning
            isLoading
            isSpiner
          />
        </div>
      </section>
      <section className="design-system-cards">
        <h1 className="typography__heading shadow-text">Cards</h1>
        <div className="grid__cards design-system-cards__container ">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </div>
  );
};
export default DesignSystem;
