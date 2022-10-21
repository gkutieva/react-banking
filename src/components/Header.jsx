import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Cards } from './Cards';
import { GlobalProvider } from '../context/GlobalState';
import { Wallet } from './Wallet';




export const Header = () => {
  return (
    <GlobalProvider>
    <Routes>
      <Route path='/' element={ <Navigate to="/home" /> }/>
      <Route path='/home' element={ <Cards /> } />
      <Route path='/wallet' element={ <Wallet /> } />
      </Routes>
      </GlobalProvider>
     
  )
}
