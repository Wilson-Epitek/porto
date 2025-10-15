import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-text">&lt;/&gt; Portfolio</span>
        </div>
        
        <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
          <li>
            <Link 
              to="home" 
              smooth={true} 
              duration={500} 
              onClick={() => setMenuOpen(false)}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link 
              to="presentation" 
              smooth={true} 
              duration={500}
              onClick={() => setMenuOpen(false)}
            >
              Présentation
            </Link>
          </li>
          <li>
            <Link 
              to="diplomas" 
              smooth={true} 
              duration={500}
              onClick={() => setMenuOpen(false)}
            >
              Diplômes
            </Link>
          </li>
          <li>
            <Link 
              to="skills" 
              smooth={true} 
              duration={500}
              onClick={() => setMenuOpen(false)}
            >
              Compétences
            </Link>
          </li>
          <li>
            <Link 
              to="projects" 
              smooth={true} 
              duration={500}
              onClick={() => setMenuOpen(false)}
            >
              Projets
            </Link>
          </li>
          <li>
            <Link 
              to="contact" 
              smooth={true} 
              duration={500}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
