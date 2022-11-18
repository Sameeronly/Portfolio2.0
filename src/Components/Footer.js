import "./Footer.css";

import React from 'react';
import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaGithub,} from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>Rajahmundry,</p>
                            <p>Andhra Pradesh</p>
                        </div>
                    </div>

                    <div className="phone">
                        <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />+91 950-53-933-11</h4></div>

                    <div className="email">
                        <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            sameeruddin929@gmail.com</h4>
                    </div>

                </div>

                <div className="right">
                    <h4>Connect</h4>

                    <div className="social">
                        <a href="https://github.com/Sameeronly">
                        <FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} /></a>
                        <a href="https://www.linkedin.com/in/sameer-md-63b2b5122">
                        <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer