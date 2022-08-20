import React from "react";
import "./Footer.css";

import facebook from '../images/facebook.svg'
import instagram from '../images/instagram.svg'
import twitter from '../images/twitter.svg'

export const Footer = () => {
  return (
    <div className="footerCont">
        <h3 className="footerTitle">Seguinos en nuestras redes sociales: </h3>
        <div className="facebook">
            <img className="icon" src={facebook} alt="facebook"/>
        </div>
        <div className="insta">
            <img className="icon" src={instagram} alt="instagram"/>
        </div>
        <div className="twitter">
            <img className="icon" src={twitter} alt="twitter"/>
        </div>

    </div>
  )
}

export default Footer;
