import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Presentation from './components/Presentation';
import Diplomas from './components/Diplomas';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Presentation />
      <Diplomas />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
