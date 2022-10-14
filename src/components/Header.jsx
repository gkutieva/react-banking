import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Cards } from './Cards';
import { GlobalProvider } from '../context/GlobalState';
import { Wallet } from './Wallet';




export const Header = () => {
  return (
    <GlobalProvider>
    <Routes>
      <Route path='/home' element={ <Cards /> } />
      <Route path='/wallet' element={ <Wallet /> } />
      </Routes>
      </GlobalProvider>
     
  )
}
