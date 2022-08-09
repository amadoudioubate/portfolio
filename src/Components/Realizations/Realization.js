import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

import './Realization.css';

function Realisation(props) {
  return (
    <div className='realization'>
      <div className="realization_img">
        <img src={props.image} alt="pic associé au projet" />
      </div>
      <h3 className='realization_title'>{props.name}</h3>
      <p className="realization_description">
        {props.description} 
      </p>
      <div className="realization_technology">
        <span className='technology_title'>Technologies utilisées</span>
        <div className="technology_icon"> 
            {props.langages.map(lang => {
              return <img src={lang} alt="logo langage utilisé" key={lang} className="icon_lang"/>
            })}
        </div>
      </div>
      <div className="realization_footer">
        <a href={props.url} target="_blank" rel="noopener noreferrer" className='footer_link'>
          Visitez le site <FaArrowRight className='footer_fa_arrow_right'/>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </a>
        <a href={props.source} target="_blank" rel="noopener noreferrer" className='footer_link'>
          Code source <FaArrowRight className='footer_fa_arrow_right'/>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
      
    </div>
  )
}

export default Realisation