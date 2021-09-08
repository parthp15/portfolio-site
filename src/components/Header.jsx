import React from "react";
import DarkMode from "./darkmode";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <h3 className="logo">Parth Patel</h3>

        <p>8998.parth@gmail.com</p>
      </div>
      <div className="header__right">
        <span className="linkedin">
          <a
            href="https://www.linkedin.com/in/parth-patel-80b99b176/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin />
          </a>
        </span>
        <span className="github">
          <a
            href="https://github.com/parthp15"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare />
          </a>
        </span>
        <span className="gmail">
          <a
            href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=8998.parth@gmail.com&tf=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGmail />
          </a>
        </span>
        <DarkMode />
      </div>
    </div>
  );
}
export default Header;
