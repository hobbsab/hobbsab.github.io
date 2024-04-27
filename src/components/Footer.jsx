import { Link, useLocation } from 'react-router-dom';
import React from "react";
import ghImg from '../assets/github-mark-white.png';
import emailImg from '../assets/email.png';
import linkedinImg from '../assets/linkedin.png';

function Footer() {
    return (
        <div className= 'bg-dark'>
            <div style={{
                    color: "blue",
                }}
            >
                <h1>My Links</h1>
                <a href="https://github.com/hobbsab">
                <img className= "footerImg" src={ghImg} />
                </a>
                <a href="https://www.linkedin.com/in/anna-b-hobbs/">
                <img className= "footerImg" src={linkedinImg} />
                </a>
                <a href="mailto:abhobbs2@yahoo.com">
                <img className= "footerImg" src={emailImg} />
                </a>
            </div>
        </div>
    );
}
 
export default Footer;