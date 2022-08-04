import React from 'react';
import OpeningPage from '../OpeningPage/OpeningPage';
import Biography from '../Biography/Biography';
import AboutMe from '../AboutMe/AboutMe';
import Realizations from '../Realizations/Realizations';
import Contact from '../Contact/Contact';
import SocialNetwork from '../SocialNetwork/SocialNetwork';
import ScrollBar from '../ScrollToTop/ScrollToTop';
import './Home.css';
import Footer from '../Footer/Footer';

function Home() {
  return (
    <main className='container'>
        <SocialNetwork />
        <ScrollBar />
        <OpeningPage />
        <Biography />
        <AboutMe />
        <Realizations />
        <Contact />
        <Footer />
    </main>
  )
}

export default Home;