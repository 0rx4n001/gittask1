import React from 'react'
import Slide from './conponents/Sliders/Slide'
import './HomePage.css'

import image1 from './samsung.png';
import image2 from './motorola1.jpg';
import image3 from './motorola2.jpg';
import image4 from './xiaomi.png';

const array = [
    {
        id:0,
        src:image1,
    },
    {
        id:1,
        src:image2,
    },
    {
        id:2,
        src:image3,
    },
    {
        id:4,
        src:image4,
    },
]

const HomePage = () => {
  return (
    <div>
      <Slide/>
    </div>
  )
}

export default HomePage
