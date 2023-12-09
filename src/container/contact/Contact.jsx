import React from 'react'

import {FaEnvelope, } from 'react-icons/fa';
import { Animate } from 'react-simple-animate';


import PageHeader from '../../components/pageHeaderContent/PageHeader';
import { FaInstagram, FaFacebook,  FaGithub, FaLinkedin } from 'react-icons/fa';
// import { MdEmail } from 'react-icons/md'; // Material Design Icons
import { FiMail } from 'react-icons/fi';

import './contact.css';
export default function Contact() {
  return (
    <>

      <section id='contact' className='contact'>
        <PageHeader
          headerText="My Contact" 
          icon={<FaEnvelope size={40} />}
        />


        <div className='contactContent'>

          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(-200px)"
            }}
            end={{
              transform: "translateX(0px)"
            }}
          >
            <h3 className='contactContentHeaderText'>Let's Talk</h3>

          </Animate>


          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(200px)"
            }}
            end={{
              transform: "translateX(0px)"
            }}
          >
            {/* <div className='contactContentForm'>

              <div className='contactContentFormWrapper'>
                <div className='nameWrapper'>
<input required name='name' className='inputName' type={'text'}/>
<label htmlFor='name' className='nameLabel'>Name</label>

                </div>
                <div className='emailWrapper'>

                  
<input required name='email' className='inputEmail' type={'text'}/>
<label htmlFor='email' className='emailLabel'>Email</label>
                </div>
                <div className='descriptionWrapper'>

                  
<textarea required name='description' className='inputDescription' type={'text'} rows='5'/>
<label htmlFor='description' className='descritionLabel'>Description</label>
                </div>
              </div>
              <button>Submit</button>
            </div> */}


<div className='contactLink'>
<a href="https://www.instagram.com/amanullah5414?igshid=OGQ5ZDc2ODk2ZA%3D%3D" target="_blank">
        <FaInstagram size={70} />
      </a>



      <a href="https://www.facebook.com/people/Aman-Ullah/pfbid0uyfmQwtGNRuC4TXJ44VDHNBhar1jfUzH19ojJm5zBGKEwo9DN2KuLDSZWDsKXmHYl/?mibextid=PzaGJu" target="_blank" >
        <FaFacebook size={70} />
      </a>
      <a href="mailto:amana170829@gmail.com">
        <FiMail size={70} />
      </a>
      
      <a href="https://www.linkedin.com/feed" target="_blank" >
        <FaLinkedin size={70} />
      </a>
      <a href='https://github.com/AMANULLAH023HY' target="_blank" ><FaGithub size={70} /> </a>
</div>



          </Animate>
        </div>


      </section>
    </>
  )
}

