import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './SocialNetwork.css';

function SocialNetwork() { 
  return (
    <div className='social_network'>
        <a href="https://www.linkedin.com/in/amadoudioubate/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="linkedin"/>
        </a>
        <a href="https://github.com/amadoudioubate" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="github"/>
        </a>
        <a href="mailto: dioubateamadou@yahoo.fr" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} className="yahoo"/>
        </a>
        <a href="tel: 0033767791721" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faPhone} className="phone"/>
        </a>
    </div>
  )
}

export default SocialNetwork;