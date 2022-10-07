import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Balance } from './Balance';
import { Income } from './Income';
import { TransactionList } from './TransactionList';
import { AddTransaction } from './AddTransaction';



export const Header = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/wallet' component={ Balance } />
      <Route path='/wallet' component={ Income } />
      <Route path='/wallet' component={ TransactionList } />
      <Route path='/wallet' component={ AddTransaction } />
      <h2>
        Wallet
      </h2>
      </Routes>
    </BrowserRouter>
  )
}
