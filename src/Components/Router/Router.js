import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';

function Router() {
  return (
    <Routes>
        <Route path='#' element={<Skills/>}/>
        <Route path='#' element={<Contact />}/>
    </Routes>
  )
}

export default Router;