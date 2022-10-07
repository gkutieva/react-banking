import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Balance } from './Balance';
import { Income } from './Income';
import { TransactionList } from './TransactionList';
import { AddTransaction } from './AddTransaction';
import { Cards } from './Cards';




export const Header = () => {
  return (

    <Routes>
      {/* <Route path='/' component={ Cards } /> */}
      <Route path='/wallet' component={ Balance } />
      {/* <Route path='/wallet' component={ Income } />
      <Route path='/wallet' component={ TransactionList } />
      <Route path='/wallet' component={ AddTransaction } /> */}
      </Routes>
     
  )
}
