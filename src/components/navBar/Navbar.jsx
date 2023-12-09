import React, { useState } from 'react'

import {Fa500Px,FaBars, FaReact } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import Profile from '../../helper/image/profile.jpg'
import './navbar.css';



const data = [
  {
    label: 'HOME',
    to: '/'
  },

  {
    label: 'ABOUT ME',
    to: '/about'
  },

  {
    label: 'SKILLS',
    to: '/skills'
  },

  {
    label: 'RESUME',
    to: '/resume'
  },

  {
    label: 'PROJECT',
    to: '/portfolio'
  },

  {
    label: 'CONTACT',
    to: '/contact'
  },
]
export default function Navbar() {
const [toggleIcon,setToggleIcon] = useState(false);

const handleToggleIcon = ()=>{
  setToggleIcon(!toggleIcon);
}

  return (
    <>

      <div className='navbar'>
      <div className='navbarContainer'>
        <Link to={'/'} className='navbarContainerLogo'>
         
          <img src={Profile}/>
        </Link>
      </div>
      <ul className={`navbarContainerManu ${toggleIcon ? 'active' : ''}`}>
      {
        data.map((item,key)=>( 
          
            <li className='navbarContainerManuItem' key={key}>
              <Link className='navbarContainerManuItemLink' to={item.to}>
                {item.label}
              </Link>
            </li>
        
        ))
      }

      </ul>


      <div className='navIcons' onClick={handleToggleIcon}>

{

  toggleIcon ? <Fa500Px size={30} /> : <FaBars size={30} />
}

      </div>


    </div>
    </>
  )
}
