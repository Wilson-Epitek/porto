import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillsData = [

    //  Analyse & Visualisation
    { name: 'Python', level: 70 },
    { name: 'Looker Studio', level: 80 },
    { name: 'Excel', level: 60 },
    { name: 'Matplotlib', level: 60 },
    
    //  Bases de Données
    { name: 'SQL (MySQL)', level: 20 },
    { name: 'MongoDB', level: 30 },
    
    //  Outils
    { name: 'Git / GitHub', level: 85 },
    { name: 'API rest', level: 40 },
    { name: 'Web Scraping', level: 20 },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Mes Compétences</h2>
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div className="skill-item" key={index}>
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );  
};

export default Skills;
