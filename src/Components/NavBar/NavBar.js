import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import './NavBar.css';

function NavBar() {
    const [widthWindow, setWidthWindow] = useState(window.innerWidth);
    const [toggle, setToggle] = useState(false);

    const changeToggle = () => {
        setToggle(!toggle);
    }
    
    useEffect(() => {
        const changeWidth = () => {
            setWidthWindow(window.innerWidth);
        }
        window.addEventListener('resize', changeWidth);

        return () => {
            window.removeEventListener('resize', changeWidth);
        }
    }, []);
    console.log(widthWindow);
  return (
    <nav className='navigation'>
        <div className="navigation-logo">
            <div className="logo-initial">
                <span className="initial-text">AD</span>
            </div>
            <div className="logo-man">
                <h2 className="man-name">Amadou Dioubaté</h2> 
                <span className="man-job">Développeur Web</span>
            </div>
        </div>
        { (toggle || widthWindow > 991) && 
            <ul className="navigation-list">
                
                <li className="list-items">
                    <a href="#about_me">À propos de moi</a>
                </li>
                <li className="list-items">
                    <a href="#my_project">Mes réalisations</a>
                </li>
                
                <li className="list-items">
                    <a href="#contact_me">Contact</a>
                </li>
            </ul>
        }
        <div className="navigation-icon">
            { toggle 
              ? (
                <FontAwesomeIcon icon={faXmark} className="icon icon-xmark" onClick={changeToggle}/>
                ) 
              : (
                <FontAwesomeIcon icon={faBars} className="icon icon-bars" onClick={changeToggle}/>  
              )}
            
        </div>
        
    </nav>
  );
};

export default NavBar;