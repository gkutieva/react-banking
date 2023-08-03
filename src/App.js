import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { Cards } from './components/Cards';
import { Wallet } from './components/Wallet';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <NavBar />
        <div className='header'>
          <Routes>
            <Route path='/' element={<Cards />} />
            <Route path='/wallet' element={<Wallet />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </GlobalProvider>
  );
}

export default App;
