import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <span className="greeting">Hello, We're</span>
                    <h1 className="name">Okapi<span className="dot">.</span></h1>
                    <h2 className="role">Mobile & <span className="gradient-text">Website Developer</span></h2>
                    <p className="description">
                        We build modern, responsive, and user-friendly web and mobile applications.
                        Based in Dodoma, Tanzania.
                    </p>
                    <div className="hero-buttons">
                        <a href="#projects" className="btn btn-primary">View Projects</a>
                        <a href="#contact" className="btn btn-secondary">Contact Us</a>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="circle circle-1"></div>
                    <div className="circle circle-2"></div>
                    <div className="glass-card visual-card">
                        <div className="code-snippet">
                            <pre>
                                <code>
                                    <span className="keyword">const</span> <span className="variable">developer</span> = {'{'}
                                    <span className="key">name</span>: <span className="string">'Okapi'</span>,
                                    <span className="key">location</span>: <span className="string">'Dodoma, Tz'</span>,
                                    <span className="key">skills</span>: [<span className="string">'React'</span>, <span className="string">'PHP'</span>, <span className="string">'Mobile'</span>, <span className="string">'Web'</span>]
                                    {'}'};
                                </code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
