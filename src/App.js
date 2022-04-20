import React, { useEffect, useState } from "react";
import Page from './Pages/Page';
import Loading from './Components/Loading/Loading';
import Header from "./Components/Header/Header";
import './App.css';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000)
  }, [])
  
  return (
    <div className='App'>
      <Header/>
      {
        isLoading ? <Loading/> : <Page />
      } 
    </div>
  );
}

export default App;
