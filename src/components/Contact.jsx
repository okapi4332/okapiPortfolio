import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section-padding contact">
            <div className="container">
                <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
                <div className="contact-container glass-card">
                    <div className="contact-info">
                        <h3>Let's Work Together</h3>
                        <p>
                            Have a project in mind or just want to say hi?
                            Feel free to reach out to me.
                        </p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <div className="icon">📍</div>
                                <div className="details">
                                    <h4>Location</h4>
                                    <p>Dodoma, Tanzania</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="icon">📞</div>
                                <div className="details">
                                    <h4>Phone / WhatsApp</h4>
                                    <a href="tel:+255745740502">+255 745 740 502</a>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="icon">✉️</div>
                                <div className="details">
                                    <h4>Email</h4>
                                    <a href="mailto:johnstonejonathan419@gmail.com">johnstonejonathan419@gmail.com</a>
                                    <span className="email-sep"> / </span>
                                    <a href="mailto:noelsaul27@gmail.com">noelsaul27@gmail.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
