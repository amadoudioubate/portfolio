import React, { useState } from 'react';
import Realization from './Realization';
import data from '../../api/data.json'
import './Realizations.css';

function Realizations() {
  const [dataProject, setDataProject] = useState(data)
  
  console.log(setDataProject);
  
  return (
    <section className='realizations' id="my_project">
      <h2 className="realizations_title">Mes Réalisations</h2>
      <div className="realizations_body">
        { dataProject.map((item,index) => {
          return ( 
            <Realization 
              name={item.name}
              image={item.image}
              url={item.url}
              source={item.source}
              key={index}
            />
          ) 
        })}
      </div>
    </section>
  );
};

export default Realizations;