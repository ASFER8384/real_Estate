import React from 'react';
import "../style/Banner.css"

import Bannerimg from "../assets/banner.jpg"

export default function Banner() {
  return (
    <div className='banner'>
        <h1 className='banner-title'>Invest in your future property</h1>
        <img className='banner-image' src={Bannerimg} alt="" />
    </div>
  )
}
