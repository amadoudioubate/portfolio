import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
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
            { (toggle || widthWindow > 991) && 
                <ul className="nav-list">
                    <li className="list-items">
                        <NavLink to="/" className={({isActive}) => isActive ? "active-link" : ""}>Acceuil</NavLink>
                    </li>
                    <li className="list-items">
                        <NavLink to="" className={({isActive}) => isActive ? "active-link" : ""}>À propos de moi</NavLink>
                    </li>
                    <li className="list-items">
                        <NavLink to="" className={({isActive}) => isActive ? "active-link" : ""}>Réalisations</NavLink>
                    </li>
                    <li className="list-items">
                        <NavLink to="" className={({isActive}) => isActive ? "active-link" : ""}>Compétences</NavLink>
                    </li>
                    <li className="list-items">
                        <NavLink to="" className={({isActive}) => isActive ? "active-link" : ""}>Contact</NavLink>
                    </li>
                </ul>  
            }
            <button className="nav-btn" onClick={changeToggle}>BNT</button>
        </nav>
    );
};

export default NavBar;