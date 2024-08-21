import { Link } from 'react-router-dom';
import { useState } from "react";
import "./index.scss";

const Home = () => {
  const [url, setUrl] = useState('');
  const socialIcons = ["github", "instagram", "linkedin", "gmail"];
  const urlMap = {
    github: "https://github.com/manoharn725",
    instagram: "https://www.instagram.com/imanu_nandan/",
    linkedin: "https://www.linkedin.com/in/manoharn725/",
    gmail: "mailto:manoharnmanu725@gmail.com",
  };

  const handleSocialLinks = (item, index) => {
    console.log(index, item)
    setUrl(urlMap[item] || "");
  };
  return (
    <div className="container">
      <section className="hero__section">
        <div className="hero__section--content">
          <p>Hello, I'm</p>
          <h2>Manohar</h2>
          <h4>Frontend Developer</h4>
          <div className="hero__section--social-icons">
            {socialIcons.map((item, index) => (
               <Link
               to={url}
               target='_blank'
               onMouseOver={(e) => {
                e.preventDefault()
                setUrl(urlMap[item] || "");
                console.log(index, item)
                }}
               onClick={() => {
                 handleSocialLinks(item, index);
                 
               }}
               key={index}
               style={{ backgroundImage: `var(--${item}-img)` }}
             >
              
             </Link>
            ))}
          </div>
        </div>
        <div className="hero__section--image"></div>
      </section>
    </div>
  );
};
export default Home;
