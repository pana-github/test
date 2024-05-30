import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

import SearchForm from './forms/SearchForm';
import PickUpForm from './forms/PickupForm';

import './styles/App.css';
import './styles/Header.css';
import './styles/fonts/fonts.css';
import './styles/Form.css'

function App() {
  return (
    <BrowserRouter>
    
    <div className="main">
    
    <Header />
    
    <Routes>
    <Route exact path='/search' Component={SearchForm}/>
    <Route exact path='/pickup' Component={PickUpForm}/>
    </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App;
