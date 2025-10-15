import React from 'react';
import './Diplomas.css';

const Diplomas = () => {
  const diplomas = [
    {
      title: "Baccalauréat STMG option Gestion-Finance ",
      institution: "Lycée Maurice ravel, Paris 12",
      year: "2024",
      description: "Mention Assez bien"
    },
    {
      title: "Formation Epitech",
      institution: "Epitech",
      year: "En cours",
      description: "Expert en Management des Systèmes d'Information"
    },

    {
      title: "Certification Fundamentals of digital marketing",
      institution: "Google",
      year: "2025",
      description: "La formation enseigne les bases du marketing en ligne, y compris la publicité, les réseaux sociaux et l'analyse de données."
    }
  ];

  return (
    <section id="diplomas" className="diplomas-section">
      <div className="container">
        <h2 className="section-title">Diplômes & Certifications</h2>
        <div className="diplomas-grid">
          {diplomas.map((diploma, index) => (
            <div className="diploma-card" key={index}>
              <div className="diploma-icon">🎓</div>
              <h3>{diploma.title}</h3>
              <p className="institution">{diploma.institution}</p>
              <p className="year">{diploma.year}</p>
              <p className="description">{diploma.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Diplomas;
