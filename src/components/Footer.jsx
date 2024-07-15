import { Link, useLocation } from 'react-router-dom';
import React from "react";
import ghImg from '../assets/github-mark-white.png';
import emailImg from '../assets/email.png';
import linkedinImg from '../assets/linkedin.png';

function Footer() {
    return (
        <div className= 'gradient1 footerbg'>
            <div style={{
                    color: "white",
                }}
            >
                <h1 class='text-light almendra-regular'>My Links</h1>
                <a href="https://github.com/hobbsab">
                <img className= "footerImg mx-auto text-center" src={ghImg} />
                </a>
                <a href="https://www.linkedin.com/in/anna-b-hobbs/">
                <img className= "footerImg mx-auto text-center" src={linkedinImg} />
                </a>
                <a href="mailto:abhobbs2@yahoo.com">
                <img className= "footerImg mx-auto text-center" src={emailImg} />
                </a>
            </div>
        </div>
    );
}
 
export default Footer;