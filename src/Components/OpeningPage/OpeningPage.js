import React from 'react';
import './OpeningPage.css'
import Photo from '../../assets/images/dioubate_amadou.jpg'

function OpeningPage() {
  return (
    <section className='opening_container'>
      <div className='opening'>
          <div className='opening_left'>
            Bonjour,<br/>
            Moi c'est <h3 className='opening_left_name'>AMADOU</h3>,
            <div className='opening_left_morph'>
              <div className='morph_word'>Développeur Front End</div>
              <div className='morph_word'>Développeur Full Stack</div>
              <div className='morph_word'>Intégrateur</div>
            </div>
            <p className='opening_left_desc'>Je crée des sites web interactifs et responsives.</p>
          </div>
          <div className='opening_right'>
            <img src={Photo} alt="Pic Amadou" />
          </div>
      </div>
      <div className="waves">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>
      </div>
    </section>
  )
}

export default OpeningPage;