import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import './NavBar.css'


function NavBar() {
    const [toggle, setToggle] = useState(false);
    const [widthWindow, setWidthWindow] = useState(window.innerWidth);
    
    const changeToggle = () => {
        setToggle(!toggle);
    }

    useEffect(() => {
        const changeWidth = () => {
            setWidthWindow(window.innerWidth);
        };

        window.addEventListener('resize', changeWidth);

        return () => {
            window.removeEventListener('resize', changeWidth);
        };
    }, []);

    return (
        <nav className='nav'>
            { (toggle || widthWindow > 1199) && 
                <ul className="nav-list">
                    <li className="list-items">
                        <NavLink to="/" className={({isActive}) => isActive ? "active-link" : ""}>Acceuil</NavLink>
                    </li>
                    <li className="list-items">
                        <NavLink to="/a-propos-de-moi" className={({isActive}) => isActive ? "active-link" : ""}>À propos de moi</NavLink>
                    </li>
                    <li className="list-items">
                        <NavLink to="/mes-realisations" className={({isActive}) => isActive ? "active-link" : ""}>Mes réalisations</NavLink>
                    </li>
                    <li className="list-items">
                        <NavLink to="/competences" className={({isActive}) => isActive ? "active-link" : ""}>Compétences</NavLink>
                    </li>
                    <li className="list-items">
                        <NavLink to="/contact" className={({isActive}) => isActive ? "active-link" : ""}>Contact</NavLink>
                    </li>
                </ul>  
            }
            {
                toggle ? <FontAwesomeIcon icon={faXmark} className="nav-btn" onClick={changeToggle} /> 
                : <FontAwesomeIcon icon={faBars} className="nav-btn" onClick={changeToggle} />
            }
            
        </nav>
    );
};

export default NavBar;