import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { Header } from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import { Footer } from './components/Footer';


function App() {
  return (
    <>
      <NavBar />
      <div className='header'>
      <BrowserRouter>
      <Header />
      </BrowserRouter>
      </div>
      <Footer />
    </>
  );
}

export default App;
