import React from 'react';
import './Presentation.css';

const Presentation = () => {
  return (
    <section id="presentation" className="presentation-section">
      <div className="container">
        <h2 className="section-title">Présentation</h2>
        <div className="presentation-content">
          <div className="presentation-card">
            <div className="card-header">
              <div className="avatar">
                <span>👨‍💻</span>
              </div>
            </div>
            <div className="card-body">
              <h3>Qui suis-je ?</h3>
              <p>
                Je m'appelle Wilson Wu, et je suis actuellement étudiant en deuxième année à Epitech Paris,
                où je poursuis un diplôme de niveau Bac +5 (RNCP 7) en tant qu'Expert en Management des Systèmes d'Information.
              </p>
              
              <h3>Mon parcours</h3>
              <p>
               Avant d'intégrer Epitech,
               j'ai obtenu un baccalauréat en Sciences et Technologies du Management et de la Gestion (STMG), avec une spécialisation en gestion financière. Dès le départ, j'ai compris l'importance cruciale des données dans la prise de décision stratégique des entreprises. 
               En rejoignant Epitech, j'ai approfondi ma compréhension du domaine de la donnée, un secteur que je trouve passionnant et essentiel dans un monde de plus en plus digitalisé. Cette formation m'a permis de renforcer mes compétences en programmation et en gestion des données.
               De plus, mon double cursus en marketing et développement me permet d'avoir une vision plus globale et stratégique, tout en étant à l'écoute des besoins des clients.
              </p>
              
              <h3>Actuellement</h3>
              <p>
                Je travaille sur divers projets innovants, alliant créativité et expertise 
                technique. Je suis constamment à la recherche de nouveaux défis et 
                d'opportunités pour élargir mes compétences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
