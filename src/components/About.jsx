import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section-padding about">
            <div className="container">
                <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
                <div className="about-content">
                    <div className="about-text glass-card">
                        <p>
                            I am a versatile Mobile and Website Developer based in <strong>Dodoma, Tanzania</strong>,
                            dedicated to building scalable and visually stunning digital solutions.
                        </p>
                        <p>
                            My expertise lies in full-stack development, specializing in <strong>React</strong> for dynamic user interfaces
                            and <strong>PHP</strong> for robust backend systems. I excel in designing efficient <strong>database</strong> architectures
                            and creating seamless experiences across both <strong>web and mobile</strong> platforms.
                        </p>
                        <div className="stats">
                            <div className="stat-item">
                                <span className="stat-number">3+</span>
                                <span className="stat-label">Years Exp.</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">10+</span>
                                <span className="stat-label">Projects</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">5+</span>
                                <span className="stat-label">Clients</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
