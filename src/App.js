import React, { useEffect, useState } from 'react';
import Portfolio from './Containers/Portfolio';
import Loading from './Components/Loading/Loading';

function App() {
  const [isloading, setIsLoading] = useState(true);

    useEffect(()=> {
        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
    }, []);

  return (
    <div className="App">
      {
        isloading ? <Loading /> : <Portfolio />
      }
    </div>
  );
};

export default App;
