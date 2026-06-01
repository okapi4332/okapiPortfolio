import { useState } from "react";
import "./Branding.css";

const brandingProjects = [
  {
    id: 1,
    title: "Chemka Hot Spring",
    client: "Sound of Africa",
    category: "Tourism & Adventure",
    image: "/branding/chemka.jpg",
    color: "#2A7A4A",
  },
  {
    id: 2,
    title: "Contractor Stores",
    client: "Our Contractor Stores",
    category: "Construction & Business",
    image: "/branding/contractor.jpg",
    color: "#1A3A8C",
  },
  {
    id: 3,
    title: "Live Recording — Mtakatifu",
    client: "Frida Denis & Agape Band",
    category: "Gospel Music Event",
    image: "/branding/mtakatifu.jpg",
    color: "#8C1A1A",
  },
  {
    id: 4,
    title: "Moment with God — Season II",
    client: "KKKT Usharika wa Kisasa",
    category: "Church & Worship Event",
    image: "/branding/moment-with-god.jpg",
    color: "#1A5A8C",
  },
  {
    id: 5,
    title: "Maombi ya Familia",
    client: "Mwl. Gordian Newton",
    category: "Prayer & Fellowship",
    image: "/branding/maombi.jpg",
    color: "#4A2A8C",
  },
];

function LightBox({ project, onClose }) {
  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose}>✕</button>
        <img
          src={project.image}
          alt={project.title}
          className="lightbox-img"
        />
        <div className="lightbox-info">
          <span className="lightbox-category">{project.category}</span>
          <h3 className="lightbox-title">{project.title}</h3>
          <p className="lightbox-client">Client: {project.client}</p>
        </div>
      </div>
    </div>
  );
}

function BrandingCard({ project, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`branding-card ${hovered ? "hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onClick(project)}
      style={{ "--accent": project.color }}
    >
      <div className="branding-card-img-wrap">
        <img
          src={project.image}
          alt={project.title}
          className="branding-card-img"
        />
        <div className="branding-card-overlay">
          <span className="branding-view-btn">View →</span>
        </div>
      </div>
      <div className="branding-card-body">
        <span className="branding-card-category">{project.category}</span>
        <h4 className="branding-card-title">{project.title}</h4>
        <p className="branding-card-client">{project.client}</p>
      </div>
    </div>
  );
}

export default function Branding() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="branding-section" id="branding">
      <div className="branding-header">
        <span className="branding-eyebrow">CREATIVE WORK</span>
        <h2 className="branding-title">
          Social Media <span className="branding-accent">Branding</span>
        </h2>
        <p className="branding-sub">
          Designing scroll-stopping content for businesses, events, and
          communities across East Africa.
        </p>
      </div>

      <div className="branding-grid">
        {brandingProjects.map((project) => (
          <BrandingCard
            key={project.id}
            project={project}
            onClick={setSelected}
          />
        ))}
      </div>

      <div className="branding-tags">
        {["Tourism", "Construction", "Gospel Music", "Church Events", "Prayer Events"].map(
          (tag) => (
            <span key={tag} className="branding-tag">
              {tag}
            </span>
          )
        )}
      </div>

      {selected && (
        <LightBox project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
