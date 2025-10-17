import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillsData = [
    {
      category: 'Analyse & Visualisation',
      skills: ['Python', 'Looker Studio', 'Excel']
    },
    {
      category: 'Bases de Données',
      skills: ['SQL (MySQL)', 'MongoDB', 'PHPMyAdmin']
    },
    {
      category: 'Outils & Technologies',
      skills: ['Git / GitHub', 'API REST', 'Web Scraping']
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Mes Compétences</h2>

        <div className="skills-grid">
          {skillsData.map((category, index) => (
            <div className="skill-category" key={index}>
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div className="skill-badge" key={skillIndex}>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );  
};

export default Skills;
