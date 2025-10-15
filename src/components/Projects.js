import React from 'react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "RESTaurant API",
      description: "API permettant de gérer les catégories de plats et les données d’un restaurant, avec des requêtes testées et validées via Postman.",
      technologies: ["Express.js", "Node.js", "MySQL (PHPMyAdmin)"],
      github: "https://github.com/Wilson-Epitek/Rest_API"
    },
    {
      title: "MyShop",
      description: "Myshop est une application e-commerce avec un front-end dynamique. Le back-end gère l’authentification, la gestion des utilisateurs, des produits et des commandes via une API sécurisée.",
      technologies: ["Vue.js", "Express.js", "Node.js","MySQL (PHPMyAdmin)"],
      github: "https://github.com/Wilson-Epitek/myshop-back_end"

    },
    {
      title: "Salezi",
      description: "Salezi est un projet backend développé avec Strapi, permettant la gestion efficace des contenus et des données via une API flexible et sécurisée.",
      technologies: ["Strapi","Node.js"],
      github: "https://github.com/Wilson-Epitek/salezi"
    },
    {
      title: "SneaKr",
      description: "SneaKr est une application full stack qui offre une expérience utilisateur fluide et moderne. Le front-end propose une interface intuitive et responsive, tandis que le back-end assure la gestion des données, de l’authentification et des fonctionnalités principales via une API sécurisée.",
      technologies: ["Vite","React","Lucid-react","Tailwind CSS ","Strapi","Node.js"],
      github: "https://github.com/Wilson-Epitek/SneakR"
    },
     {
      title: "Bootcamp Data",
      description: "Bootcamp intensif de 7 jours dédié au traitement et à l’analyse de données en Python. Travail sur la manipulation, l’analyse et la visualisation de données, ainsi que sur les bonnes pratiques pour la gestion des environnements.",
      technologies: ["Python"],
      github: "https://github.com/Wilson-Epitek/Piscine_python"
    },
    {
      title: "Data prédiction F1",
      description: "Projet d’analyse et de prédiction des résultats de Formule 1. Nettoyage et fusion de fichiers CSV, sélection des données clés, puis visualisation avec des graphiques interactifs pour mieux comprendre les tendances.",
      technologies: ["Python", "Pandas", "Streamlit", "Matplotlib"],
      github: "https://github.com/theodessaixwalger/Data-Prediction"
    },
    {
      title: "Smart City Data",
      description: "Smart City Data est une application mobile qui permet aux utilisateurs de se géolocaliser et d’afficher les toilettes publiques de Paris. Elle intègre un système de géolocalisation précis et un affichage du trajet pour guider facilement vers les installations.",
      technologies: ["React Native", "Expo Go"],
      github: "https://github.com/Wilson-Epitek/Smart-city"
    },
    {
      title: "SoccerStat",
      description: "SoccerStat analyse les performances des joueurs de football dans les 5 plus grandes ligues mondiales (saison 23/24). Le projet inclut la visualisation du nombre de joueurs par position et par nation, la création d’un dashboard pour analyser les statistiques individuelles selon la position, l’expérience et les buts marqués, ainsi que la comparaison des performances des joueurs entre les ligues selon buts, passes décisives et minutes jouées.",
      technologies: ["Python", "Pandas", "Streamlit", "Matplotlib"],
      github: "https://github.com/theodessaixwalger/SoccerStat"
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projets Réalisés</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="technologies">
                  {project.technologies.map((tech, i) => (
                    <span className="tech-tag" key={i}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                    <FaGithub /> <span>Github</span>
                  </a>
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
