import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <div className="glitch-wrapper">
          <h1 className="glitch" data-text="Bienvenue">Wilson Wu</h1>
        </div>
        <h2 className="subtitle">Étudiant en 2ème année à Epitech Paris</h2>
        <p className="description">
          Etudiant avec un fort intérêt pour la data. Je recherche ainsi dans ce domaine 
          à partir de janvier 2026 pour une durée de 4 à 6 mois !
        </p>
        <div className="cta-buttons">
          <a href="#projects" className="btn-primary">Voir mes projets</a>
          <a href="#contact" className="btn-secondary">Me contacter</a>
          <a 
            href="/assets/WilsonWu-Cv-Data.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cv"
          >
            📄 Consulter mon CV
          </a>
        </div>
      </div>
      <div className="animated-background">
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
      </div>
    </section>
  );
};

export default Home;
