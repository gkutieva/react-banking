import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map

  // console.log('balance');
  return (
    <div>
        <h4>Your Balance</h4>
        <h1>$0.00</h1>
    </div>
  )
}
