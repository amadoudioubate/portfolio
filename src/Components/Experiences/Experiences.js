import React from 'react';
import { FaLaptopCode } from 'react-icons/fa';
import './Experiences.css';

function Experiences() {
  return (
    <div className='experiences'>
        <div className="experiences_title">
          <FaLaptopCode className='experiences_title_icon' style={{"color":"#CBB26A", "fontSize":50}} />
          <span className='experiences_date'>Avril 2021 - Mars 2022</span>
          <span className="experiences_class">Formation Openclassrooms (apprentissage)</span>
          <h3 className="experiences_dev">Développeur web</h3>
        </div>
        <ul className="experiences_content_list">
          <li className="content_list">
            Intégration des maquettes de design en HTML / CSS, pour créer un site web responsive
            <ul>
              <li>Le site permet aux usagers de trouver des hébergements et des activités dans la ville de leur choix</li>
              <li>Les hébergements peuvent également être filtrés par thématique, par exemple leur budget ou leur ambiance.</li>
            </ul>
          </li>
          <li className="content_list">
            Dynamisez de pages web avec des animations CSS (SASS)
            <ul>
              <li>Un site 100% mobile qui répertorie les menus de restaurants gastronomiques, fini la file d'attente</li>
            </ul>
          </li>
          <li className="content_list">
            Optimisez un site web existant (SEO)
            <ul>
              <li>Analyse de l’état actuel de SEO du site fourni</li>
              <li>Amélioration du SEO du site</li>
            </ul>
          </li>
          <li className="content_list">
            Construisez un site e-commerce en JavaScript
            <ul>
              <li>Intégration dynamique des produits avec JavaScript depuis une API</li>
            </ul>
          </li>
          <li className="content_list">
            Construisez une API sécurisée pour une application d'avis gastronomiques
            <ul>
              <li>Une application web de critique des sauces piquantes appelée « Hot Takes »</li>
            </ul>
          </li>
          <li className="content_list">Créez un réseau social d'entreprise avec Node.js et React</li>
        </ul>
    </div>
  )
}

export default Experiences