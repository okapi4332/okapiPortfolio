import React from 'react';
import './Projects.css';

const projectsData = [
    {
        id: 1,
        title: 'Berwa Winery',
        domain: 'berwawinery.com',
        description: 'A premium website for a winery, showcasing their collection and heritage.',
        tags: ['React', 'Web Design', 'Branding'],
        image: '/img/berwawinery.png'
    },
    {
        id: 2,
        title: '3rd Point Group',
        domain: '3rdpointgroup.com',
        description: 'Corporate website for a consulting group, featuring services and portfolio.',
        tags: ['Web App', 'Corporate', 'Modern'],
        image: '/img/3rdpoint.png'
    },
    {
        id: 3,
        title: 'Jons Books',
        domain: 'jonsbooks.com',
        description: 'An online bookstore platform for browsing and purchasing books.',
        tags: ['E-commerce', 'PHP', 'Database'],
        image: '/img/jonsbooks.png'
    },
    {
        id: 4,
        title: 'OkaRx',
        domain: 'pharm-snowy.vercel.app',
        description: 'A comprehensive pharmacy management system for inventory and sales.',
        tags: ['React', 'Management', 'Pharmacy'],
        image: '/img/pharmacy.png'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="section-padding projects">
            <div className="container">
                <h2 className="section-title">Our <span className="gradient-text">Projects</span></h2>
                <div className="projects-grid">
                    {projectsData.map((project) => (
                        <div key={project.id} className="glass-card project-card">
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                                <div className="project-overlay">
                                    <a href={`https://${project.domain}`} target="_blank" rel="noopener noreferrer" className="visit-btn">
                                        Visit Site
                                    </a>
                                </div>
                            </div>
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="tags">
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className="tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
