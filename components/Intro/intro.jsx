import React from 'react'
import './intro.css'
import Github from './img/github.png';
import Linkedin from './img/linkedln.png';
import Instagram from './img/instagram.png';
import AliBG from './img/AliBG.png';
import Vector1 from './img/Vector1.png';
import Vector2 from './img/Vector2.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import Crown from './img/crown.png';
import thumbup from './img/thumbup.png';

function intro() {
  return (
  <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hy! I AM </span>
          <span>Ali Faisal </span>
          <span>Frontend Developer with Medium Level of Experince in Web Designing and Developement,
            Producting the Quality Work.</span>
        </div>
        <button className="button  i-button">Hire me</button>
        <div className='i-icons'>
          <img src={Github} alt="" />
          <img src={Linkedin} alt="" />
          <img src={Instagram} alt="" />

        </div>

      </div>
      <div className="i-right">
        <img src={AliBG} alt="" />
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Crown} alt="" />
      <div style={{top: '-10%', left: '68%'}}>
      <FloatingDiv image={Crown} txt1='Web' txt2='Developer' />
    </div>
    <div style={{top: '-2rem', left: '2rem'}}>
        <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award' />
      </div>
      </div>
      </div>
  )
}
export default intro
