import React from 'react';
import './ProfileCard.css';
import Patrick from '../images/Patrick.png'; // Profile image
import insta from '../images/instagram.svg'; // Instagram icon
import whatsapp from '../images/whatsapp.svg'; // WhatsApp icon
import github from '../images/github.svg'; // GitHub icon
import linkedin from '../images/linkedin.svg'; // LinkedIn icon
import gmail from '../images/gmail.svg'; // Gmail icon
import tele from '../images/telegram.svg'; // Telegram icon
import TwitterSVG from '../images/X.png'; // Twitter icon
import fly from '../images/flying.png'; // Flying icon
import cloud from '../images/cloud.png'; // Cloud icon
import earth from '../images/earth.png'; // Earth icon
import rocket from '../images/rocket.png'; // Rocket icon
import flames from '../images/flames.png'; // Rocket icon
import patrickms from '../images/patrickms.png'; // Rocket icon
import number from '../images/number.png'; // Rocket icon
import into from '../images/1313.png'; // Rocket icon
import myname from '../images/myName.png'; // Rocket icon

const ProfileCard = ({ name, jobTitle, location, about }) => {
    return (
        <div className="profile-card">

            <img src={fly} alt="Flying" className="flying-icon" />

            <img src={cloud} alt="Cloud" className="cloud-icon" />

            <img src={earth} alt="Earth" className="earth-icon" />

            <img src={rocket} alt="Rocket" className="rocket-icon" />

            <img src={flames} alt="flames" className="flames-icon" />

            <img src={patrickms} alt="patrickms" className="patricks-icon" />

            <img src={number} alt="number" className="number-icon" />

            <img src={into} alt="into" className="into-icon" />

            <img src={myname} alt="myname" className="myname-icon" />

            <div className="profile-content">
                <p className="profile-job">{jobTitle}</p>
                <div className="about-section">
                    <p className="about-text">"I'm a passionate frontend developer"</p>
                </div>
                <div className="social-links scroll" style={{ '--t': '20s', width: '271px' }}>
                    <div>
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
                        <a href="https://x.com/PatrickMS_13" target="_blank" rel="noopener noreferrer">
                            <img src={TwitterSVG} alt="Twitter" className="social-icon" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="profile-image-container">
                <img src={Patrick} alt="Patrick" className="profile-image" />
            </div>
        </div>
    );
};

export default ProfileCard;
