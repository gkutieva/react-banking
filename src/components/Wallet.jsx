import React from 'react'
import { AddTransaction } from './AddTransaction'
import { Balance } from './Balance'
import { Income } from './Income'
import { TransactionList } from './TransactionList'

export const Wallet = () => {
  return (
    <div>
      <Balance/>
      <Income/>
      <TransactionList/>
      <AddTransaction/>
    </div>
  )
}
