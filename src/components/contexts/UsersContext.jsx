import React, { useState, createContext, useContext } from "react";

const context = createContext();
export let useUserContext = () => useContext(context);

export default function UsersContext({ children }) {
  const [users, setUsers] = useState([]);

  const [userCreatedState, setUserCreatedState] = useState({
    error: null,
    fulfill: null,
  });

  const [loginState, setLoginState] = useState({
    error: false,
    fulfill: false,
  });

  function createUser(newUser) {
    if (newUser.permission()) {
      return setUserCreatedState({
        error: "It's likely you missed to fill an input correctly!!",
        fulfill: false,
      });
    }

    if (users.filter((user) => user.name === newUser.name)[0]) {
      return setUserCreatedState({
        error: "User name is Repetitious!!",
        fulfill: false,
      });
    }

    if (users.filter((user) => user.email === newUser.email)[0]) {
      return setUserCreatedState({
        error: "Email is Repetitious!!",
        fulfill: false,
      });
    }
    newUser.isLogin = "false";
    setUsers([...users, newUser]);

    setUserCreatedState({
      error: false,
      fulfill: "User has been created successfuly you can signin right now.",
    });
  }

  function login(userInfo) {
    if (!users.filter((user) => user.name === userInfo)[0])
      return setLoginState({
        error: "User name or password is not correct!",
        fulfill: false,
      });

    const userWantToLogIn = users.filter((user) => user.name === userInfo)[0];
    if (userWantToLogIn.password !== userInfo.password)
      return setLoginState({
        error: "User name or password is not correct!",
      });

    userWantToLogIn.isLogin = true;
    setLoginState({
      error: false,
      fulfill: "Welcom you logedin Successfuly",
    });
  }

  return (
    <context.Provider
      value={{ createUser, userCreatedState, login, loginState }}
    >
      {children}
    </context.Provider>
  );
}
