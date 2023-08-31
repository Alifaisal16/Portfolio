import React from 'react'
import './Testimonial.css'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import profilePic1 from '../Intro/img/profile1.jpg'
import profilePic2 from '../Intro/img/profile2.jpg'
import profilePic3 from '../Intro/img/profile3.jpg'
import profilePic4 from '../Intro/img/profile4.jpg'
import profilePic5 from '../Intro/img/profile5.jpg'
const Testimonial = () => {
const clients =[
        {
        img: profilePic1,
        review:
"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium quasi delectus, totam ipsum corrupti animi maxime! Pariatur ratione possimus, nemo perspiciatis fugiat beatae amet labore non, iste laudantium facilis fugit!",
},
{
    img: profilePic2,
        review:
"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium quasi delectus, totam ipsum corrupti animi maxime! Pariatur ratione possimus, nemo perspiciatis fugiat beatae amet labore non, iste laudantium facilis fugit!",
},
{
    img: profilePic3,
        review:
"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium quasi delectus, totam ipsum corrupti animi maxime! Pariatur ratione possimus, nemo perspiciatis fugiat beatae amet labore non, iste laudantium facilis fugit!",
},
{
    img: profilePic4,
    review:
"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium quasi delectus, totam ipsum corrupti animi maxime! Pariatur ratione possimus, nemo perspiciatis fugiat beatae amet labore non, iste laudantium facilis fugit!",
},
{
    img: profilePic5,
    review:
"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium quasi delectus, totam ipsum corrupti animi maxime! Pariatur ratione possimus, nemo perspiciatis fugiat beatae amet labore non, iste laudantium facilis fugit!",
}

]
  return (
   <div className="t-wrapper">
    <div className="t-heading">
        <span>Clients Always Get </span>
        <span>Exceptional Work </span>
        <span>From me...</span>
        <div className="blur t-blur1" style={{background:"purple"}}></div>
        <div className="blur t-blur2" style={{background:"skyblue"}}></div>
    </div>
    <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
   </div>
  )
}

export default Testimonial