import React from 'react';
import { useState } from 'react';
import Skills from '../Skills/Skills';
import Education from '../Education/Education';
import Experiences from '../Experiences/Experiences';
import './AboutMe.css';

function AboutMe() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = index => {
    setToggleState(index);
  }

  return (
    <section className='about' id='about_me'>
        {/* Début titre */}
        <div className="container_about_title">
          <h2 className='about_title'>À propos de moi</h2>
        </div>
        {/* Fin titre */}

        {/* Début about navigation */}
        <div className='about_nav'>
          <ul className='nav_item'>
            <li className={toggleState === 1 ? 'active item_tab' : 'item_tab'} onClick={() => toggleTab(1) }>
              compétences
            </li>
            <li className={toggleState === 2 ? 'active item_tab' : 'item_tab'} onClick={() => toggleTab(2) }>
              éducation
            </li>
            <li className={toggleState === 3 ? 'active item_tab' : 'item_tab'} onClick={() => toggleTab(3) }>
              expériences
            </li>
          </ul>
        </div>
        {/* Fin about avigation */}

        {/* Début about content */}
        <div className={toggleState === 1 ? 'about_content active_about_content' : 'about_content'}>
          {/* Début container about content */}
          <div className="container_about_content">
            
            {/* Debut contenu skills */}

                <Skills />

            {/* Debut contenu skills */}
          
          
          </div>
          {/* Fin container about  */}
        </div>
        {/* Fin about content */}

        {/* Début about content */}
        <div className={toggleState === 2 ? 'about_content active_about_content' : 'about_content'}>
          {/* Début container about content */}
          <div className="container_about_content">
            
            {/* Debut contenu education */}

                <Education />

            {/* Debut contenu education */}
          
          
          </div>
          {/* Fin container about  */}
        </div>
        {/* Fin about content */}

        {/* Début about content */}
        <div className={toggleState === 3 ? 'about_content active_about_content' : 'about_content'}>
          {/* Début container about content */}
          <div className="container_about_content">
            
            {/* Debut contenu experiences */}

                <Experiences />

            {/* Debut contenu experiences */}
          
          
          </div>
          {/* Fin container about  */}
        </div>
        {/* Fin about content */}


        
        
    </section>
  );
};

export default AboutMe;