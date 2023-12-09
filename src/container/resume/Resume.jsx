import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { FaUser, FaFileAlt, FaCode, FaEnvelope, FaFile,FaMobileAlt, FaMapMarkerAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { experienceData } from "./utils";
import "./resume.css";
import {} from "react-vertical-timeline-component/style.min.css";

import PageHeader from "../../components/pageHeaderContent/PageHeader";
import { MdWork } from "react-icons/md";

export default function Resume() {
  return (
    <>
      {/* <section id='resume' className='resume'>
        <PageHeader
          headerText="My Project"
          icon={<FaFile size={30} />}
        />

        <div className='timeLine'>

          <div className='timeLineExperience'>
            <h3 className='timeLineExperienceHeaderText'>Experience</h3>
            <VerticalTimeline
              layout={'1-column'}
              lineColor='var(--yeelow-theme-main-color)'
            >
              {
                experienceData.experience.map((item, i) => (
                  <VerticalTimelineElement
                    key={i}
                    className='timeLineExperienceVerticalTimelineElement'
                    contentStyle={{
                      background:"none",
                      color:"var(--yellow-theme-sub-text-color)",
                      border:"1.5px solid var(--yellow-theme-main-color)"
                    }}

                    date='2023 - present'
                    icon={<MdWork/>}
                    iconStyle={{
                      background:'#181818',
                      color:'var(--yellow-theme-main-color)'
                    }}
                  >
                    <div className='verticalTimelineElementTitleWrapper'>
                      <h3 className='VerticalTimelineElementCompany'>{item.company}</h3>
                      <h4 className='VerticalTimelineElementTitle'>{item.title}</h4>
                      <h4 className='VerticalTimelineElementSubTitle'>{item.subtitle}</h4>
                      

                    </div>
                      <p className='VerticalTimelineElementSubTitle'>{item.desc}</p>

                  </VerticalTimelineElement>

                ))
              }

            </VerticalTimeline>
          </div>
          <div className='timeLineEducation'>


            <h3 className='timeLineEducationHeaderText'>Education</h3>
            <VerticalTimeline
            layout='1-column'
            lineColor='var(--yellow-theme-main-color)'
            >

            {
              experienceData.education.map((item, i) => (
                <VerticalTimelineElement
                  key={i}
                  className='timeLineExperienceVerticalTimelineElement'
                  contentStyle={{
                      background:"none",
                      color:"var(--yellow-theme-sub-text-color)",
                      border:"1.5px solid var(--yellow-theme-main-color)"
                    }}
                    
                    icon={<MdWork/>}
                    iconStyle={{
                      background:'#181818',
                      color:'var(--yellow-theme-main-color)'
                    }}
                >
                  <div className='verticalTimelineElementTitleWrapper'>
                    <h3 className='VerticalTimelineElementCompany'>{item.trade}</h3>
                    <h4 className='VerticalTimelineElementTitle'>{item.collegeName}</h4>

                  </div>
                    <h4 className='VerticalTimelineElementSubTitle'>{item.city}</h4>
                    <p className='VerticalTimelineElementDescription'>{item.percen}</p>

                    <p className='VerticalTimelineElementDescription'>{item.pass}</p>
                </VerticalTimelineElement>



              ))
            }

            </VerticalTimeline>


          </div>
        </div>


      </section> */}

      <section id="resume" className="resume">
        <PageHeader headerText="My Resume" icon={<FaFile size={30} />} />

        <div className="resumeDiv">
          <div className="resumeMe ">
            <h2>MD AMANULLAH</h2>
            <h3>Full Stack Web Development</h3>
            <p>
              An adept web developer, proficient in crafting visually alluring
              websites that seamlessly amalgamate aesthetics and top-tier
              performance. I possess the ability to transmute digital visions
              into vibrant, immersive online realities. With an ardent passion
              for the art of web development, I am poised to collaboratively
              embark on the journey of sculpting an unparalleled online presence
              that transcends conventional boundaries.
            </p>
          </div>

          <hr></hr>

          <div className="resumeContact">
            <FiMail size={30} />
            <span>amana170829@gamail.com</span>
            <FaMobileAlt size={30} />
            <span>+91 91178-68912</span>
            <FaMapMarkerAlt  size={30}/>
            <span>Hyderabad</span>
          </div>

          <hr></hr>
          

          <div className="resumeDetails">
            <div className="resumeDetailPartOne">
              <div className="resumeDetailEducatuion">
                <h2>Education</h2>
                <h3>B.Tech in Computer Science</h3>
                <h4>Maulana Azad National Urdu University</h4>
                <span>08/2020 - Present, </span>
                <span> Hyderabad</span><br></br>
                <span>Cgpa:</span>
                <span> 8.3</span>
                <br></br>
                <br></br>
              

                <h3>Diploma In Computer Science</h3>
                <h4>Maulana Azad National Urdu University</h4>
                <span>08/2017 - 05/2020, </span>
                <span>      Darbhanga, Bihar</span><br></br>
                <span>Cgpa:  </span>
                <span> 8.4</span>
              </div>


              <div className="resumeDetailEducatuion">
                <h2>Work Experience</h2>

                <h3>Web Development</h3>
                <h4>Bharat Intern</h4>
                <p>08/2023 - 09/2023</p>
                <p>Got a Certification</p>
                <ul>
                  <li><span>- </span>
                     During my internship at Bharat Intern, I contributed as a
                    web developer by designing and developing user-friendly web
                    applications.
                  </li>
                  <li><span>- </span>
                     Create responsive and visually appealing websites, enhancing
                    user experience.
                  </li>
                  <li><span>- </span>
                     I actively collaborated with the design team to implement
                    responsive web designs and integrate them seamlessly into
                    the development process, ensuring consistency in both visual
                    appeal and functionality.{" "}
                  </li>
                </ul>

                <br></br>
                <br></br>
                <br></br>

                <br></br>

                <h3>Web Development</h3>
                <h4>Oasis Infobyte</h4>
                <p>01/2023 - 02/2023,</p>
                <p> Got a Certification</p>
                <ul>
                  <li><span>- </span>
                     At Oasis Infobyte, I gained valuable experience as a web
                    developer during my internship.
                  </li>
                  <li><span>- </span>
                     I contributed to the development and maintenance of web
                    applications, working collaboratively to ensure optimal
                    functionality and user experience.
                  </li>
                  <li><span>- </span>
                     My proficiency in HTML, CSS, and JavaScript allowed me to
                    create highly interactive and visually engaging web
                    applications, leveraging my strong foundation in these
                    technologies to produce exceptional user experiences.{" "}
                  </li>

                  <li><span>- </span>
                     I consistently fine-tuned and optimized the front-end
                    codebase using HTML, CSS, and JavaScript, resulting in
                    faster page load times and improved website performance.
                  </li>
                </ul>
              </div>

              <div className="resumeDetailLanguage">
                <h2>Language</h2>
                <span>Hind</span>
                <span>English</span>
              </div>
            </div>

            <div className="resumeDetailPartTwo">
              <div className="resumeDetailSkill">
                <h2>Skills</h2>
                <br></br>
                <br></br>
                <button>HTML</button>
                <button>CSS</button>
                <button>Tailwind CSS</button>
                <button>BOOTSTRAP</button>
                <button>JAVASCRIPT</button>
                <button>REACT</button>
                <button>SQL</button>
                <button>MONGODB</button>
                <button>EXPRESS JS</button>
                <button>NODE JS</button>
                <button>JSON</button>
                <button>GIT & GITHUB</button>
              </div>


              <div className="resumeDetailProject">
                <h2>Personal Project</h2>
                <br></br>

                <h3>SOCIAL MEDIA WEB APP</h3>
                <ul>
                  <li><span>-</span>
                     Designed and developed a responsive social media app,
                    focusing on user-centered features, UI/UX, and security.
                  </li>
                  <li><span>-</span>
                     Implemented user feedback, and contributed to full-stack
                    development.
                  </li>
                </ul>
               
                <h3>MP3 PLAYER (04/2022 - 04/2020)</h3>
                <ul>
                  <li><span>-</span>
                     Created a feature-rich music app entirely using HTML, CSS,
                    and JavaScript, demonstrating proficiency in front-end
                    development and user-centric design.
                  </li>
                </ul>
                

                <h3>YOUTUBE CLONE WEB APP (06/2022 - 08/2022)</h3>
                <ul>
                  <li><span>-</span>
                     Designed and developed a YouTube clone project, showcasing
                    adeptness in front-end development.
                  </li>
                  <li><span>- </span>
                     Implemented key features like video uploads, user profiles,
                    and real-time interaction.
                  </li>
                </ul>

                <h3>REAL ESTATE MANAGEMENT SYSTEM (11/2023 - Present)</h3>
                <ul>
                  <li><span>- </span>
                     The system aims to make managing properties easier for
                    everyone. It wants to simplify leases, improve
                    communication, and automate tasks like handling money and
                    property upkeep. The goal is to create a user-friendly
                    platform that reduces errors and makes property management
                    smoother for landlords, tenants, and property managers.
                  </li>
                  <li><span>- </span>
                     To create a web base application for Real Estate Management
                    system.
                  </li>
                  <li><span>- </span>
                     To create a user-friendly platform that improves real estate
                    management operations.
                  </li>
                  <li><span>- </span>
                     To streamline agent registration and authentication
                    processes
                  </li>
                  <li><span>-</span> To simplify property listing procedures for agents.</li>
                  <li><span>-</span>
                     To enable customers to easily search for and purchase
                    properties.
                  </li>
                </ul>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
