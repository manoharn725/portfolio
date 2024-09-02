import { useTypewriter } from "react-simple-typewriter";
import Button from "../../components/Button";
import Card from "../../components/Card";
import resume from "../../assets/manohar-resume.pdf";
import Lottie from "lottie-react";
import developer from "../../assets/frontend-developer-icons.json";
import "./index.scss";

const Home = () => {
  const socialIcons = [
    { icon: "github", url: "https://github.com/manoharn725" },
    { icon: "linkedin", url: "https://www.linkedin.com/in/manoharn725/" },
    { icon: "gmail", url: "mailto:manoharnmanu725@gmail.com" },
    { icon: "instagram", url: "https://www.instagram.com/imanu_nandan/" },
  ];

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

  const experience = [
    {
      companyUrl: "https://signanthealth.com/",
      companyLogo: "signant-health-logo",
      companyName: "SigantHealth",
      totalExperience: "Full-time 1y 6mos",
      designation: [
        {
          designationTitle: "SDE - 1",
          designationDurationFromDate: "Apr 2024",
          designationDurationEndDtae: "Presnt",
          designationDuration: "5mos",
          officeLocation: "Whitefield Bangalore",
          officeWorkSystem: "Hybrid",
        },
        {
          designationTitle: "UI Developer",
          designationDurationFromDate: "Mar 2023",
          designationDurationEndDtae: "Apr 2024",
          designationDuration: "1y 2mos",
          officeLocation: "Whitefield Bangalore",
          officeWorkSystem: "Hybrid",
        },
      ],
    },
    {
      companyUrl: "https://www.renderinfotech.com/",
      companyLogo: "render-infotech-logo",
      companyName: "RenderInfotech",
      totalExperience: "Full-time 1y 7mos",
      designation: [
        {
          designationTitle: "Software Developer",
          designationDurationFromDate: "Sep 2021",
          designationDurationEndDtae: "Mar 2023",
          designationDuration: "1y 7mos",
          officeLocation: "Bel-Circle Bangalore",
          officeWorkSystem: "",
        },
      ],
    },
  ];

  const projects = [
    {
      projectIcon: "inflex-logo",
      peojectUrl: "https://socialinflux.io",
      projectImage: "inflex-image",
      projectTitle: "Inflex",
      projectDescription: [
        "Led the development and implementation of a platform that connects influencers with brands.",
        "Utilized a microservices architecture to build the platform, primarily using Node.js.",
        "Achieved design consistency by implementing a design system from the inception of the project.",
        "Leveraged Node.js, React.js, and Postgres to develop the platform.",
      ],
      projectDevelopers: [
        {
          projectDeveloperImage: "kushagra",
          projectDeveloperName: "KushagraSwami",
          projectDeveloperDesignation: "UI/UX Designer",
        },
        {
          projectDeveloperImage: "manohar",
          projectDeveloperName: "Manohar",
          projectDeveloperDesignation: "Frontend",
        },
        {
          projectDeveloperImage: "santhosh",
          projectDeveloperName: "Santhosh",
          projectDeveloperDesignation: "Fullstack",
        },
      ],
    },
    {
      projectIcon: "react-js",
      peojectUrl: "#",
      projectImage: "elephant",
      projectTitle: "Sky Yoga",
      projectDescription: [
        "Built a student and course management system, which is being used in multiple locations across the world.",
        "Helped build the FE user interface and BE services written in ReactJS, NodeJS, and Postgres.",
      ],
      projectDevelopers: [
        {
          projectDeveloperImage: "manohar",
          projectDeveloperName: "Manohar",
          projectDeveloperDesignation: "Frontend",
        },
        {
          projectDeveloperImage: "santhosh",
          projectDeveloperName: "Santhosh",
          projectDeveloperDesignation: "Fullstack",
        },
        {
          projectDeveloperImage: "saravanan",
          projectDeveloperName: "Saravan",
          projectDeveloperDesignation: "Backend",
        },
        {
          projectDeveloperImage: "man",
          projectDeveloperName: "Vijay",
          projectDeveloperDesignation: "Environment",
        },
      ],
    },
  ];

  const skills = [
    {
      skill: "html-5",
      skillUrl: "https://whatwg.org/",
    },
    {
      skill: "css-3",
      skillUrl: "https://whatwg.org/",
    },
    {
      skill: "scss",
      skillUrl: "https://whatwg.org/",
    },
    {
      skill: "javascript",
      skillUrl: "https://www.javascript.com/",
    },
    {
      skill: "typescript",
      skillUrl: "https://www.javascript.com/",
    },
    {
      skill: "react-js",
      skillUrl: "https://reactjs.org/",
    },
    {
      skill: "redux",
      skillUrl: "https://redux.js.org/",
    },
    {
      skill: "sql-ssms",
      skillUrl: "https://whatwg.org/",
    },
    {
      skill: "bootstrap",
      skillUrl: "https://whatwg.org/",
    },
    {
      skill: "git",
      skillUrl: "https://git-scm.com/",
    },
    {
      skill: "vs-code",
      skillUrl: "https://whatwg.org/",
    },
    {
      skill: "photoshop",
      skillUrl: "https://whatwg.org/",
    },

    // {
    //   skill: "next-js",
    //   skillUrl: "https://whatwg.org/",
    // },
    // {
    //   skill: "mongodb",
    //   skillUrl: "https://whatwg.org/",
    // },
    // {
    //   skill: "postman",
    //   skillUrl: "https://whatwg.org/",
    // },
    // {
    //   skill: "nodejs",
    //   skillUrl: "https://whatwg.org/",
    // },
  ];

  const education = [
    {
      schoolIcon: "skit-logo",
      schoolImage: "skit-college",
      schoolName: "Sri krishna Institute of Technology",
      course: "Computer Science Engineering",
      schoolUrl: "https://www.skit.org.in/index.html",
    },
    {
      schoolIcon: "swami-vivekananda-pu-college",
      schoolImage: "swami-vivekananda-pu-college",
      schoolName: "Sree Swamy Vivekananda",
      course: "PCMB",
      schoolUrl: "https://www.facebook.com/p/Sree-Swamy-Vivekananda-PU-College-Turuvekere-100070875005339/",
    },
    {
      schoolIcon: "jnv-tumkur-logo",
      schoolImage: "jnv-tumkur",
      schoolName: "JNV Tumkur",
      course: "10th Standard",
      schoolUrl: "https://www.navodaya.gov.in/nvs/nvs-school/TUMKUR/en/home/",
    },
  ];

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
        <div className="hero__section--image"></div>
      </section>

      <section id="about" className="about__section">
        <h2 className="about__section--title">About</h2>
        <div className="about__section--content">
          <div className="about__section--image">
            <Lottie animationData={developer} loop />
          </div>

          <div className="about__section--descripation">
          Passionate and responsible UI developer with 3 years of experience delivering high-quality web applications. Proficient in developing responsive and interactive interfaces using React, Redux, TypeScript, JavaScript, HTML, CSS, SCSS, and Bootstrap. Comprehensive experience in the full software development life cycle, including requirements gathering, analysis, implementation, testing, and maintenance. Committed to continuous self-improvement and delivering solutions that exceed expectations. Additionally familiar with SQL and SSMS tools.
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
                      designationTitle,
                      designationDurationFromDate,
                      designationDurationEndDtae,
                      designationDuration,
                      officeLocation,
                      officeWorkSystem,
                    }) => (
                      <div className="designation">
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
        <h2 className="projects__section--title">Projects</h2>
        <div className="project grid__cards">
          {projects.map(
            ({
              projectIcon,
              projectImage,
              peojectUrl,
              projectTitle,
              projectDescription,
              projectDevelopers,
            }) => (
              <Card
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
            ({ schoolIcon, schoolImage, schoolName, course, schoolUrl }) => (
              <Card
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
