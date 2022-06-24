import React, { useState } from 'react';
import Realization from './Realization';
import data from '../../api/data.json'
import './Realizations.css';

function Realizations() {
  const [dataProject, setDataProject] = useState(data)
console.log(dataProject);
  console.log(setDataProject);
  return (
    <section className='realizations' id="my_project">
      { dataProject.map((item,index) => {
        return ( 
          <Realization 
            name={item.name}
            key={index}
          />
        ) 
      })}
    </section>
  );
};

export default Realizations;