import { useTypewriter } from "react-simple-typewriter";
import Button from "../../components/Button";
import Card from "../../components/Card";
import resume from "../../assets/manohar-resume.pdf";
import Lottie from "lottie-react";
import developer from "../../assets/frontend-developer-icons.json";
import { useTheme } from "../../context/themeContext";
import { useSelector } from "react-redux";
import "./index.scss";

const Home = () => {
  const { isDarkTheme } = useTheme();

  const { socialIcons, experience, miniProjects, projects, skills, education } =
    useSelector((state) => state);

  const [text] = useTypewriter({
    words: [
      "Frontend Developer",
      "React-Redux Developer",
      "Even Familiar with SQL and SSMS toll",
    ],
    loop: 0,
    typeSpeed: 120,
    deleteSpeed: 50,
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
            {socialIcons.map(({ icon, url, index }) => (
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
            download="Manohar Frontend Developer"
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
          <div className="about__section--image">
            <Lottie animationData={developer} loop />
          </div>

          <div className="about__section--descripation">
            Passionate and responsible UI developer with 3 years of experience
            delivering high-quality web applications. Proficient in developing
            responsive and interactive interfaces using React, Redux,
            TypeScript, JavaScript, HTML, CSS, SCSS, and Bootstrap.
            Comprehensive experience in the full software development life
            cycle, including requirements gathering, analysis, implementation,
            testing, and maintenance. Committed to continuous self-improvement
            and delivering solutions that exceed expectations. Additionally
            familiar with SQL and SSMS tools.
          </div>
        </div>
      </section>

      <section className="experience__section">
        <h2 className="experience__section--title">Experience</h2>
        <div className="experience__wrap">
          {experience.map(
            ({
              companyUrl,
              companyLogo,
              companyName,
              totalExperience,
              designation,
            }) => (
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
                    {totalExperience}
                  </div>
                  {designation.map(
                    ({
                      index,
                      designationTitle,
                      designationDurationFromDate,
                      designationDurationEndDtae,
                      designationDuration,
                      officeLocation,
                      officeWorkSystem,
                    }) => (
                      <div key={index} className="designation">
                        <div className="designation__title">
                          {designationTitle}
                        </div>
                        <div className="designation__duration">
                          {designationDurationFromDate} -{" "}
                          {designationDurationEndDtae} . {designationDuration}
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
        <h2 className="projects__section--title">Mini Projects</h2>
        <div className="project grid__cards">
          {miniProjects.map(
            ({
              index,
              projectIcon,
              projectImage,
              peojectUrl,
              projectTitle,
              projectDescription,
            }) => (
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

      <section className="projects__section">
        <h2 className="projects__section--title">Projects</h2>
        <div className="project grid__cards">
          {projects.map(
            ({
              index,
              projectIcon,
              projectImage,
              peojectUrl,
              projectTitle,
              projectDescription,
              projectDevelopers,
            }) => (
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

      <section className="skills__section">
        <h2 className="skills__section--title">Tools I Use</h2>
        <div className="skills">
          {skills.map(({ skill, skillUrl }) => (
            <div key={skill} className="skill__wrap">
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
          {education.map(
            ({
              index,
              schoolIcon,
              schoolImage,
              schoolName,
              course,
              schoolUrl,
            }) => (
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
