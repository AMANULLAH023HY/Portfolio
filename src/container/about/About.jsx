
import React from 'react'
import './about.css';
import { BsInfoCircleFill } from 'react-icons/bs';
import { FaUser, FaFileAlt, FaCode, FaEnvelope } from 'react-icons/fa';

import { Animate } from 'react-simple-animate';
import { DiAndroid, DiApple } from 'react-icons/di';
import { FaDev, FaDatabase } from 'react-icons/fa';

import PageHeader from '../../components/pageHeaderContent/PageHeader';

const personalDetails = [
  {
    label: "Name",
    value: "Md Amanullah"
  },
  {
    label: "Age",
    value: "23"
  },
  {
    label: "Address",
    value: "Hyderabad India"
  },
  {
    label: "Email",
    value: "amana170829@gmail.com"
  },
  

];


const jobSummary = "Seasoned and independent full stack Web Developer  Fresher. I am a seasoned full-stack web developer, proficient in building end-to-end web applications. My extensive knowledge encompasses both front-end and back-end technologies, enabling me to deliver comprehensive and high-performance digital solutions. With a keen eye for design and a strong grasp of database systems, I create web applications that are not only visually engaging but also functionally exceptional. My commitment to clean code and optimization ensures an enhanced user experience. "

export default function About() {
  return (
    <>
      <section id='about' className='about'>
        <PageHeader
          headerText="About Me"
          icon={<FaUser size={30} />}
        />
        <div className='aboutContact'>

          <div className='aboutContactPersonalWrapper'>

            <Animate play duration={1.5} delay={1} start={{
              transform: 'translateX(-900px)'
            }} end={{
              transform: 'translateX(0px)'
            }}>

              <h3>Full Stack Web Developer</h3>
              <p>{jobSummary}</p>
            </Animate>



            <Animate play duration={1.5} delay={1} start={{
              transform: 'translateX(500px)'
            }} end={{
              transform: 'translateX(0px)'
            }}>
              <h3 className='personalInformationHeaderText'>Personal Information</h3>
              <ul>
                {
                  personalDetails.map((item, i) => (

                    <li key={i}>
                      <span className='title'>{item.label}</span>
                      <span className='value'>{item.value}</span>
                    </li>



                  ))
                }
              </ul>
            </Animate>

          </div>
          <div className='aboutContactServicesWrapper'>

          <Animate play duration={1.5} delay={1} start={{
              transform: 'translateX(500px)'
            }} end={{
              transform: 'translateX(0px)'
            }}>

            <div className='aboutContactServicesWrapperInnerContent'>

              <div className='child-1'><FaDev size={60} color='var(--yellow-theme-main-color)' /></div>
              <div className='child-2'><DiAndroid size={60} color='var(--yellow-theme-main-color)' /></div>
              <div className='child-3'><FaDatabase size={60} color='var(--yellow-theme-main-color)' /></div>
              <div className='child-4'><DiApple size={60} color='var(--yellow-theme-main-color)' /></div>



            </div>
            </Animate>

          </div>
        </div>


      </section>
    </>
  )
}
