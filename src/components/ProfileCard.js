// src/components/ProfileCard.js
import React from 'react';
import './ProfileCard.css';
import Patrick from '../images/Patrick.png';  // Profile image
import insta from '../images/instagram.svg';  // Instagram icon
import whatsapp from '../images/whatsapp.svg';  // WhatsApp icon
import github from '../images/github.svg';  // GitHub icon
import linkedin from '../images/linkedin.svg';  // LinkedIn icon
import gmail from '../images/gmail.svg';  // Gmail icon
import tele from '../images/telegram.svg';  // Telegram icon
// import TwitterSVG from '../images/X.png';  // Twitter icon


const ProfileCard = ({ name, jobTitle, location, about }) => {
    return (
        <div className="profile-card">
            <h2 className="profile-name">{"Patrick MS"}</h2>
            <img src={Patrick} alt={"Patrick"} className="profile-image" />
            <p className="profile-job">{jobTitle}</p>
            {/* <p className="profile-location">{"Tiruchirappalli, INDIA"}</p> */}

            {/* About section */}
            <div className="about-section">
                {/* <h3>About</h3> */}
                <p className="about-text">"I'm a passionate frontend developer"</p>
            </div>

            {/* Social media links */}
            <div className="social-links">
                <a href="https://www.instagram.com/pa.trick.ms/" target="_blank" rel="noopener noreferrer">
                    <img src={insta} alt="Instagram" className="social-icon" />
                </a>
                <a href="https://wa.me/919677945808" target="_blank" rel="noopener noreferrer">
                    <img src={whatsapp} alt="WhatsApp" className="social-icon" />
                </a>
                <a href="https://github.com/Patrick-MS-13" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="GitHub" className="social-icon" />
                </a>
                <a href="https://www.linkedin.com/in/patrick-maria-susai-a9a435231/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt="LinkedIn" className="social-icon" />
                </a>
                <a href="mailto:patrickms567@gmail.com" target="_blank" rel="noopener noreferrer">
                    <img src={gmail} alt="Gmail" className="social-icon" />
                </a>
                <a href="https://t.me/Patrick_MS" target="_blank" rel="noopener noreferrer">
                    <img src={tele} alt="Telegram" className="social-icon" />
                </a>
                {/* <a href="https://x.com/PatrickMS_13" target="_blank" rel="noopener noreferrer">
                    <img src={TwitterSVG} alt="Twitter" className="social-icon" />
                </a> */}
            </div>
        </div>
    );
};

export default ProfileCard;
