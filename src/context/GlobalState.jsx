import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer';

const initialState = {
  transactions: [
    { id: 1, text: "Coffee", amount: -10 },
    { id: 2, text: "Salary", amount: 2300 },
    { id: 3, text: "Book", amount: -20 },
    { id: 4, text: "Zelle", amount: 150 },
    { id: 5, text: "Flower", amount: -20 },
    { id: 6, text: "Dress", amount: -100 },
    { id: 7, text: "Venmo", amount: 300 },
  ],
};


export const GlobalContext = createContext(initialState);


export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function deleteTransaction(id) {
      dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
      })
    }

    function addTransaction(transaction) {
      dispatch({
        type: 'ADD_TRANSACTION',
        payload: transaction
      })
    }

    return (
        <GlobalContext.Provider value={{
          transactions:state.transactions,
          deleteTransaction,
          addTransaction
          }}>
            { children }
        </GlobalContext.Provider>
    )
}