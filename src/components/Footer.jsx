import { Link, useLocation } from 'react-router-dom';
import React from "react";
import ghImg from '../assets/github-mark-white.png';
import emailImg from '../assets/email.png';

function Footer() {
    return (
        <div>
            <div style={{
                    color: "green",
                    backgroundColor: "grey",
                }}
            >
                <h1>Footer Test</h1>
                <a href="https://github.com/hobbsab">
                <img className= "footerImg" src={ghImg} />
                </a>
                <a href="mailto:abhobbs2@yahoo.com">
                <img className= "footerImg" src={emailImg} />
                </a>
            </div>
        </div>
    );
}
 
export default Footer;