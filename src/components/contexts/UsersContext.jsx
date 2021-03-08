import React, { useState, createContext, useContext } from 'react'

const context = createContext();
export let useProductContext = () => useContext(context);




export default function UsersContext({ children }) {

  const [users, setUsers] = useState({
    name: null
  });

  return (
    <context.Provider value={{users}}>
      {children}
    </context.Provider>
  )
}
