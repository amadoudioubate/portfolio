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
        { dataProject.map((projet,index) => {
          return ( 
            <Realization 
              name={projet.name}
              title={projet.title}
              image={projet.image}
              description={projet.description}
              langages={projet.langages}
              url={projet.url}
              source={projet.source}
              key={index}
            />
          ) 
        })}
      </div>
    </section>
  );
};

export default Realizations;