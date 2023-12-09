import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import { FaEnvelope, FaLinkedin,FaGithub,FaInstagram } from "react-icons/fa";
import "./home.css";

import About from '../about/About'
import Skills from "../skills/Skills";

import Resume_ from "../../components/downloadresume/Resume.pdf";
import Portfolio from "../portfolio/Portfolio";
import Contact from "../contact/Contact";
import Resume from "../resume/Resume";

export default function Home() {
  const navigate = useNavigate();
  console.log(navigate);

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };

  return (
    <>
      <section className="home" id="home">
        <div className="homeTextWrapper">
          <h1>
            Hello, I'm Md Amanullah
            <br />
            Full Stack Web Developer
          </h1>
        </div>

        <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: "translateY(550px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <div className="Link">
            <a target="_blank" href="https://www.linkedin.com/feed/">
              <FaLinkedin size={30}></FaLinkedin>
            </a>
            <a target="_blank" href="https://github.com/AMANULLAH023HY">
              <FaGithub size={30}></FaGithub>
            </a>
            <a target="_blank" href="https://www.instagram.com/amanullah5414?igshid=OGQ5ZDc2ODk2ZA%3D%3D">
              <FaInstagram size={30}></FaInstagram>
            </a>
          </div>

          <div className="HomeButton">
            <div className="homeContactMe">
              <button onClick={handleNavigateToContactMePage}>
                Contact Me
              </button>
            </div>
            <div className="download">
              <a target="_blank" href={Resume_}>
                {" "}
                <button>Download Resume</button>
              </a>
            </div>
          </div>
        </Animate>
      </section>

      <About/>
      <Skills/>
      <Resume/>
      <Portfolio/>
      <Contact/>
    </>
  );
}
