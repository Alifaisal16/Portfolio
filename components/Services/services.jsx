import React from 'react'
import './services.css'
import heartemoji from "../Intro/img/heartemoji.png"
import glasses from "../Intro/img/glasses.png"
import humble from "../Intro/img/humble.png"
import AliFaisalCv from "../Intro/img/AliFaisalCv.pdf"                                 
import Card from '../Card/Card'
const services = () => {
  return (
    <div className="services">

        <div className="awesome">
            <span>My Awesome</span>
            <span>Services</span>
            <spane>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Facilis quisquam amet molestias! Cum sed incidunt, reprehenderit at corrupti rerum illum.</spane>
            <a href={AliFaisalCv} download>
            <button className="button s-button">Download CV</button>
            </a>
            <div className="blur s-blurl" style={{ background: "lightblue" }}>    
            </div>
            </div>

        <div className="cards">
          <div style={{top:'-3rem', left:'15rem'}}>
            <Card
            emoji = {heartemoji}
            heading = {'Design'}
            detail = {"Figma, Adobe, Adobe XD, AdobePhotoshop"}
            />
          </div>
          <div style={{top:'12rem', left:'-4rem'}}>
            <Card
            emoji={glasses}
            heading={"Developer"}
            detail={"HTML, React, JavaScript, CSS"}
            />
          </div>
          <div style={{top:'19rem', left:'16rem'}}>
            <Card
            emoji={humble}
            heading={"UI/UX"}
            detail={"Lorem, ipsum dolor sit amet consectetur adipisicing elit."}
            />
          </div>
          <div className='blur s-blur2' style={{background:'lightpurple'}}></div>
        </div>
    </div>
  )
}

export default services
