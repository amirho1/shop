import React, { useState, createContext, useContext } from 'react'

const context = createContext();
export let useUserContext = () => useContext(context);





export default function UsersContext({ children }) {

  const [users, setUsers] = useState([
  ]);

  const [userCreatedState, setUserCreatedState] = useState({
    error: null,
    pending: true,
    fulfill: false
  })

  function createUser(newUser)  {
    if (newUser.permission) {
      return setUserCreatedState({
        error: "It's likely you missed to fill an input correctly!!",
        pending: false,
        fulfill: false,
      })
    }

    else if (users.filter(user => user.name === newUser.name )) {
      return setUserCreatedState({
        error: "User name is Repetitious!!",
        pending: false,
        fulfill: false,
      })
    }

    else if  (users.filter(user => user.email === newUser.email )) {
      return setUserCreatedState({
        error: "Email is Repetitious!!",
        pending: false,
        fulfill: false,
      })
      
    };    

    setUsers((currentState) => ({...currentState, newUser}));
    console.log(users)
    setUserCreatedState({
      error: false,
      pending: false,
      fulfill: "User has been created successfuly you can signin right now.",
    })
  }

  return (
    <context.Provider value={{createUser, userCreatedState, users}}>
      {children}
    </context.Provider>
  )
}
