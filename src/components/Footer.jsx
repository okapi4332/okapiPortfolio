import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-logo">
                    Okapi<span className="dot">.</span>
                </div>
                <p className="copyright">
                    &copy; {new Date().getFullYear()} Okapi. All rights reserved.
                </p>
                <div className="social-links">
                    <a href="https://www.instagram.com/o.k.a.p.i_?igsh=MTZqY3FkMnUwaWV3cA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                        <FaInstagram />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/johnstone-jonathan-207950176" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
