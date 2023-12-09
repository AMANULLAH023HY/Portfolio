import React, { useState } from 'react'

import { BsInfoCircleFill } from 'react-icons/bs';
import { FaUser, FaFileAlt, FaCode, FaEnvelope } from 'react-icons/fa';


import PageHeader from '../../components/pageHeaderContent/PageHeader';

import ImageOne from '../../helper/image/image-1.png';
import ImageTwo from '../../helper/image/image-2.png';

import ImageThree from '../../helper/image/image-3.png';
import ImageFour from '../../helper/image/image-4.png';
import ImageFive from '../../helper/image/image-5.png';
import ImageSix from '../../helper/image/image-6.png';
import ImageSeven from '../../helper/image/image-7.png';
import ImageEight from '../../helper/image/image-8.png';
import ImageNine from '../../helper/image/image-9.png';
import ImageEleven from '../../helper/image/image-11.png';
import YouTube from '../../helper/image/youtube.png'
import PasswordGenerator from '../../helper/image/passwordGenerator.png'
import FoodCategories from '../../helper/image/foodCategories.png'
import './portfolio.css';



const portfolioData = [
  {
    id: 2,
    name: "Analog Clock",
    image: ImageOne,
    link: "https://github.com/AMANULLAH023HY/My-Project/tree/main/AnalogClock"
  },


  {
    id: 2,
    name: "Calculator",
    image: ImageTwo,
    link: "https://github.com/AMANULLAH023HY/My-Project/tree/main/calculator"

  },

  {
    id: 2,
    name: "Digital Clock",
    image: ImageThree,
    link: "https://github.com/AMANULLAH023HY/My-Project/tree/main/digital%20clock"

  },


  {
    id: 2,
    name: "Mp3 Music Player",
    image: ImageFour,
    link: "https://github.com/AMANULLAH023HY/My-Project/tree/main/Mp3%20Music%20Player"

  },

  {
    id: 2,
    name: "ToDo List",
    image: ImageFive,
    link: "https://github.com/AMANULLAH023HY/My-Project/tree/main/TO-DO%20List"

  },
  {
    id: 3,
    name: "Food Dilevery",
    image: ImageSix,
    link: "https://github.com/AMANULLAH023HY/My-Project/tree/main/Foodfare"

  },

  {
    id: 3,
    name: "Food Catogaries",
    image: FoodCategories,
    link: "https://github.com/AMANULLAH023HY/Food_Category_Page"

  },
  {
    id: 2,
    name: "Snake Game",
    image: ImageSeven,
    link: "https://github.com/AMANULLAH023HY/My-Project/tree/main/Snake%20Game"

  },
  {
    id: 2,
    name: "Tic Toc Toe",
    image: ImageEight,
    link: "https://github.com/AMANULLAH023HY/My-Project/tree/main/tictactoe"

  },
  {
    id: 3,
    name: "My Tunes",
    image: ImageNine,
    link: "https://github.com/AMANULLAH023HY/My-Project/tree/main/MyTunes"

  },
  {
    id: 2,
    name: "Temperature Convertor",
    image: ImageEleven,
    link: "https://github.com/AMANULLAH023HY/My-Project/tree/main/Temparature-Convertor"

  },
  {
    id: 2,
    name: "YouTube Clone",
    image: YouTube,
    link: "https://github.com/AMANULLAH023HY/YouTube_clone"

  },

  {
    id: 2,
    name: "Password Generator",
    image: PasswordGenerator,
    link: "https://github.com/AMANULLAH023HY/Password_Generator"

  },



]

const filterData = [

  {
    filterId: 1,
    label: 'All'
  },

  {
    filterId: 2,
    label: 'Development'
  },

  {
    filterId: 3,
    label: 'Design'
  },
]



export default function Portfolio() {

  const [filteredvalue, setFilteredValue] = useState(1);

  const [hoveredValue, setHoveredValue] = useState(null)
  function handleFilter(currentId) {
    setFilteredValue(currentId)
  };

  function handleHover(index) {
    setHoveredValue(index);
  }
  console.log('========================');
  console.log(hoveredValue)
  console.log('========================');

  const filteredItems = filteredvalue === 1 ? portfolioData :
    portfolioData.filter(item => item.id === filteredvalue)
  console.log(filteredItems)

  return (
    <>
      <section id='portfolio' className='portfolio'>
        <PageHeader
          headerText="My Project"
          icon={<FaCode size={30} />}
        />


        <div className='portfolioContent'>

          <ul className='portfolioContentFilter'>
            {
              filterData.map((item, index) => (
                <li className={item.filterId === filteredvalue ? 'active' : ' '} onClick={() => handleFilter(item.filterId)} key={item.filterId}>{item.label}</li>
              ))}

          </ul>


          <div className='portfolioContentCard'>
            {
              filteredItems.map((item,index) => (
                <div className='portfolioContentCardItem'
                  key={`cardItem${item.name.trim()}`}
                  onMouseEnter={() => handleHover(index)}
                  onMouseLeave={() => handleHover(null)}
                >
                  <div className='portfolioContentCardItemImageWrapper'>
                    <a href={item.link}>
                      <img src={item.image} alt='Dummy Data' />
                    </a>
                  </div>

                  <div className='overlay'>
                    {index===hoveredValue && (
                        <div className='overlayDiv'>
                          <p className='overlayP'>{item.name}</p>
                          <a href={item.link} target='_blank'><button >Visit</button></a>
                        </div>
                      )
                    }

                  </div>


                </div>

              ))
            }

          </div>
        </div>


      </section>
    </>
  )
}
