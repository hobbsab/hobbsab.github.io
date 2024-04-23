import { Link, useLocation } from 'react-router-dom';
import React from "react";
import "./src/App.css";
import ghImg from './src/assets/github-mark-white.png';
import emailImg from './src/assets/email.png';

function App() {
    return (
        <div>
            <div
                style={{
                    minHeight: "400px",
                    color: "green",
                }}
            >
                <h1>Footer Test</h1>
                <a href="https://github.com/hobbsab">
                <Image className= "footerImg" src={ghImg} />
                </a>
                <a href="mailto:abhobbs2@yahoo.com">
                <Image className= "footerImg" src={emailImg} />
                </a>
            </div>
            <Footer />
        </div>
    );
}
 
export default App;