import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './Realization.css';

function Realisation(props) {
  return (
    <div className='realization'>
      <div className="realization_img">
        <img src={props.image} alt="" />
      </div>
      <h3 className='realization_title'>{props.name}</h3>
      <div className="realization_technology">
        <span className='technology_title'>Technologies utilisées</span>
        <div className="technology_icon">

        </div>
      </div>
      <div className="realization_footer">
        <a href={props.url} target="_blank" rel="noopener noreferrer">
          Visitez le site <FaArrowRight className='footer_fa_arrow_right'/>
        </a>
        <a href={props.source} target="_blank" rel="noopener noreferrer">
          Code source <FaArrowRight className='footer_fa_arrow_right'/>
        </a>
      </div>
      
    </div>
  )
}

export default Realisation