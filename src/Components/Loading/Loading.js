import React from 'react';
import { TailSpin } from 'react-loader-spinner';
import './Loading.css';

function Loading() {

  return (
    <div className='container-loading'>
      <div className='loading'>
        <TailSpin
          height={100}
          width={100}
          ariaLabel="loading"
        />
      </div>
    </div>
  )
}

export default Loading;