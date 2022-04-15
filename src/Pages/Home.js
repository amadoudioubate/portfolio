import React, { useEffect, useState } from "react";
import Loading from "../Components/Loading/Loading";
import Header from "../Components/Header/Header";
import Router from "../Components/Router/Router";

function Home() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000)
    }, [])

    return (
       <>
           <Header/>
           {
            isLoading ? <Loading/> : <Router/>
           }
       </> 
    )
}

export default Home;