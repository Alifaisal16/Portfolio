import React from 'react'
import './Works.css'
import Upwork from "../Intro/img/Upwork.png";
import Fiverr from "../Intro/img/fiverr.png";
import Amazon from "../Intro/img/amazon.png";
import Shopify from "../Intro/img/Shopify.png";
import Facebook from "../Intro/img/Facebook.png";
const Works = () => {
  return (
    <div className="works">
         <div className="awesome">
            <span>Works For All these</span>
            <span>Brands & Clients</span>
            <spane>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            <br /> 
            Facilis quisquam amet molestias! Cum sed incidunt, reprehenderit at corrupti rerum illum.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, unde!
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, accusantium!
            </spane>
            <button className="button s-button">Hire Me</button>
            <div className="blur s-blurl" style={{ background: "lightblue" }}>    
            </div>
            </div>
            <div className="w-right">
                <div className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={Upwork} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Fiverr} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Amazon} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Facebook} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Shopify} alt="" />
                    </div>
                </div>
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
    </div>
  );
};

export default Works