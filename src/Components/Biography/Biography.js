import React from 'react';
import Dev from '../../assets/images/dev-en-activite.jpg';
import Cv from '../../assets/cv/cv-dev-web-amadou-dioubate.pdf';
import './Biography.css'; 
function Biography() {
  return (
    <section className='container_bio'>
        <div className="bio_title">
            <h2>Ma biographie</h2>
        </div>
        <div className="bio_content">

            <div className="content_left">
                <h3 className='left_title'>
                    <span>Développeur</span> web ,<br/> spécialiste <br/> 
                    <span>Développeur Front End</span>
                </h3>
                <div className="left_img">
                    <img src={Dev} alt="groupe developpeur" />
                </div>
            </div>
            
            <div className="content_text">
                <span>bio</span> 
                <p className='text'>
                    Je suis un <strong>développeur Web Full Stack</strong> basé à <strong>Nantes, France</strong>. 
                    Avec une spécialité en <strong>développement FrontEnd</strong>. Je possède de connaissances 
                    dans de nombreux langages frontend et backend, 
                    des framework et des systèmes de gestion de bases de données.
                </p>
                <p className="text">
                    Mes sites Web sont codés à la main en utilisant HTML5, 
                    CSS3, Bootstrap, React, JavaScript et Nodejs.
                </p>
                <p className="text">
                    Mes compétences sont en constantes améliorations car pour moi la joie 
                    de ce métier fait que l'on apprend tous les jours, d'autant plus en étant impliqué, 
                    curieux et passionné.
                </p>
                <span>/bio</span>
                <div className='container_btn-cv'>
                    <a href={Cv} target="blank" className="btn-cv">
                        Télécharger mon cv 
                    </a>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default Biography;