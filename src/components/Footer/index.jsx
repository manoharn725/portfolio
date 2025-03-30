import { socialIcons } from "../../utils/socialIconsInfo";
import "./index.scss";

const Footer = () => {
  return (
    <div className="footer__wrap">
      <div className="container footer__container">
        <div className="footer__left">Manohar</div>
        <div className="footer__right">
          {socialIcons.map(({ icon, url }, index) => (
            <a
              key={index}
              href={url || ""}
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundImage: `var(--${icon}-img)` }}
              arial-label={`Go to my ${icon} Profile`}
            >
              <span className="visually-hidden">{icon}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Footer;
