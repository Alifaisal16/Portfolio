import React from 'react'
import './Portfolio.css'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import Sidebar from "../Intro/img/sidebar.png";
import ecommerce from "../Intro/img/ecommerce.png";
import HOC from "../Intro/img/hoc.png";
import MusicApp from "../Intro/img/musicapp.png";
const Portfolio = () => {
  return (
    <div className="portfolio">
      <span>Recent Projects</span>
      <span>Portfolio</span>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Sidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Portfolio