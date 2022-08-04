import React from 'react';
import { TailSpin } from 'react-loader-spinner';
import './Loading.css';

function Loading() {
 
  return (
    <div className='container-loading'>
      <div className='loading'>
        <TailSpin
          height={150}
          width={150}
          ariaLabel="loading"
          color='#0b6575'
        />
      </div>
    </div>
  )
}

export default Loading;