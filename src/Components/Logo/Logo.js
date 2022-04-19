import React from 'react';
import './Logo.css';

function Logo() {
  return (
    <div className='container-logo'>
        <div className='logo-initial'>
            <span className='initial'>AD</span>
        </div>
        <div className="logo-person">
            <h1 className='person-name'>Amadou Dioubate</h1>
            <span className="person-job">Développeur web</span>
        </div>
    </div>
  )
}

export default Logo;