import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Header from '../Header/Header';


function index() {
  return (
    <>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </>
  );
};

export default index;