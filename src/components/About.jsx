import React from "react";
import img1 from "../assets/img1.png";
import { FaReact, FaNodeJs, FaSass } from "react-icons/fa";
import {
  SiNextDotJs,
  SiJavascript,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiFigma,
  SiRedux,
  SiJest,
  SiGit,
  SiDotNet,
  SiAmazonaws,
  SiRuby,
  SiMysql,
  SiPowerbi,
  SiLinux,
} from "react-icons/si";

function About() {
  return (
    <div className="about__container">
      <h2 className="title">About me</h2>
      <div className="info">
        <div className="image">
          <img src={img1} alt="me" />
        </div>
        <div className="text">
          <p>
            🎓 Soon to be a Graduate with a Bachelor's Degree in Computer
            Science (December 2021) from Swinburne University of Technology.
          </p>
          <p>I am originally from India and have moved to Australia in 2019.</p>
          <p>
            👨‍💻 Backend Developer at QC Technologies. Building Components with
            React. Using Redux, AWS, Material UI.
          </p>
          <p>
            In the future, I hope to work as a Frontend, Backend Developer, or
            Full Stack Developer as part of a diverse team.
          </p>
        </div>
      </div>
      <div className="skills">
        <h2 className="title">Skills</h2>
        <div className="skills-section">
          <div className="skills-grid">
            <p className="skill">
              <span>
                <FaReact />
              </span>
              ReactJs
            </p>
            <p className="skill">
              <span>
                <FaNodeJs />
              </span>
              NodeJs
            </p>

            <p className="skill">
              <span>
                <SiJavascript />
              </span>
              Javascript
            </p>
            <p className="skill">
              <span>
                <SiRedux />
              </span>
              Redux
            </p>
            <p className="skill">
              <span>
                <SiNextDotJs />
              </span>
              NextJs
            </p>
            <p className="skill">
              <span>
                <SiJest />
              </span>
              Jest
            </p>
            <p className="skill">
              <span>
                <FaSass />
              </span>
              Sass/SCSS
            </p>
            <p className="skill">
              <span>
                <SiGit />
              </span>
              Version Control
            </p>
            <p className="skill">
              <span>
                <SiMongodb />
              </span>
              MongoDB
            </p>
            <p className="skill">
              <span>
                <SiPostgresql />
              </span>
              Postgres
            </p>
            <p className="skill">
              <span>
                <SiFigma />
              </span>
              Figma
            </p>

            <p className="skill">
              <span>
                <SiPython />
              </span>
              Python
            </p>
            <p className="skill">
              <span>
                <SiDotNet />
              </span>
              .NET
            </p>
            <p className="skill">
              <span>
                <SiAmazonaws />
              </span>
              AWS
            </p>
            <p className="skill">
              <span>
                <SiRuby />
              </span>
              Ruby
            </p>
            <p className="skill">
              <span>
                <SiMysql />
              </span>
              MySQL
            </p>
            <p className="skill">
              <span>
                <SiPowerbi />
              </span>
              PowerBI
            </p>
            <p className="skill">
              <span>
                <SiLinux />
              </span>
              Linux
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
