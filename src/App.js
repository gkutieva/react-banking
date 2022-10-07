import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { Header } from './components/Header';
import { Cards } from './components/Cards';
import { BrowserRouter } from 'react-router-dom';
import { Footer } from './components/Footer';




function App() {
  return (
    <>
      <NavBar />
      <Cards />
      <Footer />
      <div>
      <BrowserRouter>
      <Header />
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
