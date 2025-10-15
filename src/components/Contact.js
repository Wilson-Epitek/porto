import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage('');

    const serviceID = 'service_xpoarzh';  
    const templateID = 'template_5hyvttd';
    const publicKey = '--loEnb9gHYp5xTSP';

 
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: 'wilson.wu@epitech.digital'
    };


    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('✅ Email envoyé !', response.status, response.text);
        setStatusMessage('✅ Message envoyé avec succès !');
        setFormData({ name: '', email: '', message: '' });
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Erreur:', error);
        setStatusMessage('Erreur lors de l\'envoi. Réessayez plus tard.');
        setIsLoading(false);
      });
  };

  const contactInfo = {
    email: 'wilson.wu@epitech.digital',
    linkedin: 'https://www.linkedin.com/in/wilson-wu-epitech/',
    github: 'https://github.com/Wilson-Epitek'
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Restons en contact</h3>
            <p>N'hésitez pas à me contacter pour toute question ou opportunité.</p>

            <div className="contact-items">
              <a 
                href={`mailto:${contactInfo.email}`}
                className="contact-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <p>{contactInfo.email}</p>
                </div>
              </a>

              <a 
                href={contactInfo.linkedin}
                className="contact-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">💼</span>
                <div>
                  <h4>LinkedIn</h4>
                  <p>Voir mon profil</p>
                </div>
              </a>

              <a 
                href={contactInfo.github}
                className="contact-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">🐙</span>
                <div>
                  <h4>GitHub</h4>
                  <p>Voir mes projets</p>
                </div>
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Votre nom"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Votre email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Votre message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isLoading}
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="submit-btn"
              disabled={isLoading}
            >
              {isLoading ? 'Envoi en cours...' : 'Envoyer'}
            </button>

            {statusMessage && (
              <p className={`status-message ${statusMessage.includes('✅') ? 'success' : 'error'}`}>
                {statusMessage}
              </p>
            )}
          </form>
        </div>
      </div>

      <footer className="footer">
        <p>&copy; 2025 - Portfolio Wilson Wu. Tous droits réservés.</p>
      </footer>
    </section>
  );
};

export default Contact;
