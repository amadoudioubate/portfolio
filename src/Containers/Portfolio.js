import React, { useEffect, useState } from 'react';
import Home from '../Components/Home/Home';
import Loading from '../Components/Loading/Loading';

function Portfolio() {
    const [isloading, setIsLoading] = useState(false);

    useEffect(()=> {
        setTimeout(() => {
            setIsLoading(true)
        }, 3000)
    }, []);

  return (
    <>
        {isloading ?  (
            <Loading />
        ) : (
            <Home />
        )}
    </>
  );
};

export default Portfolio;