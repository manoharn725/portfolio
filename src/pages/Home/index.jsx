import { useTypewriter } from "react-simple-typewriter";
import Button from "../../components/Button";
import Card from "../../components/Card";
import resume from "../../assets/manohar-resume.pdf";
// import Lottie from "lottie-react";
// import developer from "../../assets/frontend-developer-icons.json";
import { useTheme } from "../../context/Theme/useThemeContext";
import { education } from "../../utils/educationInfo";
import {
  experience,
  getDesignationDuration,
  getExperienceTotal,
} from "../../utils/experienceInfo";
import { miniProjects } from "../../utils/miniProjectsInfo";
import { projects } from "../../utils/projectsInfo";
import { skills } from "../../utils/skillsInfo";
import { socialIcons } from "../../utils/socialIconsInfo";

import "./index.scss";

const Home = () => {
  const { isDarkTheme } = useTheme();

  const [text] = useTypewriter({
    words: [
      "Full-Stack Developer",
      "Frontend with React",
      "Backend with Node.js & PostgreSQL",
    ],
    loop: 0,
    typeSpeed: 100,
    deleteSpeed: 40,
    delaySpeed: 1500,
  });

  return (
    <div className="container">
      <section className="hero__section">
        <div className="hero__section--content">
          <p>Hello, I'm</p>
          <h3>Manohar</h3>
          <h6>{text}|</h6>
          <div className="hero__section--social-icons">
            {socialIcons.map(({ icon, url }, index) => (
              <a
                href={url || ""}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                data-social={icon}
                style={{ backgroundImage: `var(--${icon}-img)` }}
                arial-label={`Go to my ${icon} Profile`}
              >
                <span className="visually-hidden">{icon}</span>
              </a>
            ))}
          </div>
          <a
            className="hero__section--resume"
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            download="Manohar Full-Stack Developer"
          >
            <Button title="Resume" isPrimary isDownload />
          </a>
        </div>
        <div
          style={{
            backgroundImage: `var(--${
              isDarkTheme ? "dark" : "light"
            }-theme-avatar-img)`,
          }}
          className="hero__section--image"
        ></div>
      </section>

      <section id="about" className="about__section">
        <h2 className="about__section--title">About</h2>
        <div className="about__section--content">
          {/* <div className="about__section--image">
            <Lottie animationData={developer} loop />
          </div> */}

          <div className="about__section--descripation">
            Full-Stack Developer with 3 years of experience building high-performance, responsive, and user-focused web applications using React.js, JavaScript, TypeScript, Node.js, Express.js, and PostgreSQL. Skilled in scalable UI architecture, Micro Frontends, reusable component design, state management with Redux Toolkit and Context API, RESTful API development and integration, database management, and application performance optimization. Experienced in developing secure, maintainable, and production-ready applications across the frontend and backend. Proficient in AI-assisted development using GitHub Copilot to accelerate development and improve code quality, with a strong focus on delivering seamless end-to-end user experiences.
          </div>
        </div>
      </section>

      <section className="experience__section">
        <h2 className="experience__section--title">Experience</h2>
        <div className="experience__wrap">
          {[...experience].reverse().map(
            (
              {
                companyUrl,
                companyLogo,
                companyName,
                totalExperience,
                designation,
              } //[...experience] creates a shallow copy of the experience array.
            ) => (
              //Reversing the copied array ([...experience].reverse()) ensures the original array remains unchanged.
              <div className="experience" key={companyLogo}>
                <a
                  href={companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ backgroundImage: `var(--${companyLogo}-img)` }}
                  className="company__logo"
                >
                  <span className="visually-hidden">{companyLogo}</span>
                </a>
                <div className="company__detailes">
                  <div className="company__title">{companyName}</div>
                  <div className="company__total--experience">
                    {getExperienceTotal({ designation })}
                  </div>
                  {designation.map(
                    (
                      {
                        designationTitle,
                        designationDurationFromDate,
                        designationDurationEndDate,
                        officeLocation,
                        officeWorkSystem,
                      },
                      index
                    ) => (
                      <div key={index} className="designation">
                        <div className="designation__title">
                          {designationTitle}
                        </div>
                        <div className="designation__duration">
                          {designationDurationFromDate} - {designationDurationEndDate} . {getDesignationDuration({ designationDurationFromDate, designationDurationEndDate })}
                        </div>
                        <div className="designation__location">
                          {officeLocation} . {officeWorkSystem}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            )
          )}
        </div>
      </section>

      <section className="projects__section">
        <h2 className="projects__section--title">Projects</h2>
        <div className="project grid__cards">
          {[...projects]
            .reverse()
            .map(
              (
                {
                  projectIcon,
                  projectImage,
                  peojectUrl,
                  projectTitle,
                  projectDescription,
                  projectDevelopers,
                },
                index
              ) => (
                <Card
                  key={index}
                  icon={projectIcon}
                  image={projectImage}
                  url={peojectUrl}
                  title={projectTitle}
                  description={projectDescription}
                  developers={projectDevelopers}
                  isDevelopers
                />
              )
            )}
        </div>
      </section>      

      <section className="projects__section">
        <h2 className="projects__section--title">Mini Projects</h2>
        <div className="project grid__cards">
          {[...miniProjects]
            .reverse()
            .map(
              (
                {
                  projectIcon,
                  projectImage,
                  peojectUrl,
                  projectTitle,
                  projectDescription,
                },
                index
              ) => (
                <Card
                  key={index}
                  icon={projectIcon}
                  image={projectImage}
                  url={peojectUrl}
                  title={projectTitle}
                  description={projectDescription}
                />
              )
            )}
        </div>
      </section>

      <section className="skills__section">
        <h2 className="skills__section--title">Tools I Use</h2>
        <div className="skills">
          {skills.map(({ skill, skillUrl }, index) => (
            <div key={index} className="skill__wrap">
              <a
                href={skillUrl}
                alt={`${skill} icon`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundImage: `var(--${skill}-img)` }}
                className="skill"
              >
                <span className="visually-hidden"></span>
              </a>
              <h6>{skill}</h6>
            </div>
          ))}
        </div>
      </section>

      <section className="education__section">
        <h2 className="education__section--title">Education</h2>
        <div className="education grid__cards">
          {[...education]
            .reverse()
            .map(
              (
                { schoolIcon, schoolImage, schoolName, course, schoolUrl },
                index
              ) => (
                <Card
                  key={index}
                  icon={schoolIcon}
                  image={schoolImage}
                  url={schoolUrl}
                  title={schoolName}
                  description={course}
                />
              )
            )}
        </div>
      </section>
    </div>
  );
};
export default Home;
