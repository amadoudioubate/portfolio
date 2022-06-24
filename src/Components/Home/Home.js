import React from 'react';
import OpeningPage from '../OpeningPage/OpeningPage';
import AboutMe from '../AboutMe/AboutMe';
import Realizations from '../Realizations/Realizations';
import Skill from '../Skill/Skill';
import Contact from '../Contact/Contact';
import SocialNetwork from '../SocialNetwork/SocialNetwork';
import './Home.css';

function Home() {
  return (
    <main className='container'>
        <SocialNetwork />
        <OpeningPage />
        <AboutMe />
        <Realizations />
        <Skill />
        <Contact />
        
    </main>
  )
}

export default Home;