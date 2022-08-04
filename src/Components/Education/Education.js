import React from 'react';
import { FaUserGraduate, FaCertificate } from 'react-icons/fa';
import './Education.css';

function Education() {
  return (
    <div className='education'>
        <div className="education_graduate">
            <div className='graduate_title'>
                <FaUserGraduate style={{"color":"#CBB26A", "fontSize":50}}  />
                <h4>Formation</h4>
            </div>

            <div className="graduate_content">
                <div className="content_diploma">
                    <h5>Développeur web</h5>
                    <span>Openclassrooms, Paris</span>
                </div>
                <span className='content_year'>2021 - 2022</span>
            </div>

            <div className="graduate_content">
                <div className="content_diploma">
                    <h5>Master Informatique</h5>
                    <span>Université Paul Sabatier, Toulouse</span>
                </div>
                <span className='content_year'>2012 - 2013</span>
            </div>

            <div className="graduate_content">
                <div className="content_diploma">
                    <h5>Licence Informatique</h5>
                    <span>Université Paul Sabatier, Toulouse</span>
                </div>
                <span className='content_year'>2010 - 2011</span>
            </div>
        </div>

        <div className="education_certificate">
            <div className='certificate_title'>
                <FaCertificate style={{"color":"#CBB26A", "fontSize":50}}  />
                <h4>Certificat</h4>
            </div>
            
            <div className='certificate_content'>
                <li className="content_cert">
                    <h5>Passez au Full Stack avec Node.js, Express et MongoDB</h5>
                    <span>2021</span>
                </li>
                <li className="content_cert">
                    <h5>Adoptez les API REST pour vos projets web</h5>
                    <span>2021</span>
                </li>
                <li className="content_cert">
                    <h5>Apprenez à programmer avec JavaScript</h5>
                    <span>2021</span>
                </li>
                <li className="content_cert">
                    <h5>Simplifiez-vous le Css avec Sass</h5>
                    <span>2021</span>
                </li>
                <li className="content_cert">
                    <h5>Découpez et intégrez une maquette</h5>
                    <span>2021</span>
                </li>
            </div>
        </div>
    </div>
  )
}

export default Education;