import { useState } from "react";
import "./index.scss";

const SocialLinks = ({
  githubUserName = "",
  instagramUserName = "",
  linkedinUserName = "",
  gmailId = "",
  youtubeUserName = "",
  facebookUserName = "",
}) => {
  const [url, setUrl] = useState("");
  const socialIcons = ["github", "instagram", "linkedin", "gmail"];
  const urlMap = {
    github: `https://github.com/${githubUserName}`,
    instagram: `https://www.instagram.com/${instagramUserName}`,
    linkedin: `https://www.linkedin.com/in/${linkedinUserName}`,
    gmail: `mailto:${gmailId}`,
  };

  const handleSocialLinks = (item) => {
    setUrl(urlMap[item] || "", "_blank", "noopener,noreferrer");
  };
  return (
    <div className="social-icons">
      {socialIcons.map((item, index) => (
        <a
          href={urlMap[item] || ""}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            handleSocialLinks(item);
          }}
          key={index}
          style={{ backgroundImage: `var(--${item}-img)` }}
          arial-label={`Go to my ${item} Progile ${url}`}
        >
          <span className="visually-hidden">{item}</span>
        </a>
      ))}
      experimental an component
    </div>
  );
};
export default SocialLinks;
