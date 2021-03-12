import React, { useState, createContext, useContext, useEffect } from "react";
import { validateEmail } from "../../functinos/validateEmail";

// create and use context section
const Context = createContext();
export let useUserContext = () => useContext(Context);

export default function UsersContext({ children }) {
  // State section
  const [users, setUsers] = useState([]);
  const [signupRedirectState, setSignupRedirectState] = useState(false);
  const [signinRedirectState, setSigninRedirectState] = useState(false);
  const [loginState, setLoginState] = useState({ error: null, fulfill: null });
  const [whoIsLogin, setWhoIsLogin] = useState(undefined);
  const [cartItemNumber, setCartItemNumber] = useState(0);
  const [addToCartNotification, setAddToCartNotification] = useState({
    error: false,
    fulfill: false,
    display: false,
  });

  const [userCreatedState, setUserCreatedState] = useState({
    error: null,
    fulfill: null,
  });

  useEffect(() => {
    if (!whoIsLogin) {
      return;
    }

    setCartItemNumber(
      users.filter((user) => user.name === whoIsLogin)[0].cart.length
    );
  }, [users]);

  const changeShopNotificationDisplay = (state) => {
    setAddToCartNotification((current) => ({ ...current, display: state }));
  };

  function changeUserInfo(newUser) {
    if (!validateEmail(newUser.email) || newUser.name < 4) {
      return;
    }

    const newUsersList = [
      ...users.filter((user) => user.name !== newUser.name),
    ];

    newUsersList.push(newUser);
    setUsers(newUsersList);
  }

  function createUser(newUser) {
    if (!newUser.permission()) {
      return setUserCreatedState({
        error: "It's likely you missed to fill an input correctly!!",
        fulfill: false,
      });
    } else if (users.filter((user) => user.name === newUser.name)[0]) {
      return setUserCreatedState({
        error: "User name is Repetitious!!",
        fulfill: false,
      });
    } else if (users.filter((user) => user.email === newUser.email)[0]) {
      return setUserCreatedState({
        error: "Email is Repetitious!!",
        fulfill: false,
      });
    }

    newUser.gender = null;
    newUser.cart = [];
    newUser.bught = [];
    delete newUser.password2;
    setUsers([...users, newUser]);
    setSignupRedirectState(true);
    setUserCreatedState({
      error: false,
      fulfill: "User has been created successfuly you can signin right now.",
    });
  }

  function login(userInfo) {
    const arr = users.filter((user) => user.name === userInfo.name);
    const index = users.findIndex((user) => user.name === userInfo.name);

    if (!arr[0])
      return setLoginState({
        error: "User name or password is not correct!",
        fulfill: false,
      });

    if (users[index].password !== userInfo.password)
      return setLoginState({
        error: "User name or password is not correct!",
        fulfill: false,
      });

    setWhoIsLogin(userInfo.name);

    setLoginState({
      error: false,
      fulfill: "Welcome you logedin Successfuly",
    });
    setSigninRedirectState(true);
  }

  function addToCart(item) {
    if (!whoIsLogin) {
      return setAddToCartNotification({
        error:
          "You have to login first if You Don't have an account you can register.",
        fulfill: false,
        display: true,
      });
    }

    const index = users.findIndex((user) => user.name === whoIsLogin);
    const newUsers = [...users];
    newUsers[index].cart.push(item);
    setUsers(newUsers);
    setAddToCartNotification({
      error: false,
      fulfill: `You have added an item to your cart ${cartItemNumber + 1}`,
      display: true,
    });
  }

  const deleteCartItem = (itemIndex) => {
    const userIndex = users.findIndex((user) => user.name === whoIsLogin);
    const newUsers = [...users];
    newUsers[userIndex].cart = newUsers[userIndex].cart.filter(
      (item, index) => {
        return index !== itemIndex;
      }
    );
    setUsers(newUsers);
  };

  return (
    <Context.Provider
      value={{
        createUser,
        userCreatedState,
        login,
        loginState,
        whoIsLogin,
        setWhoIsLogin,
        users,
        changeUserInfo,
        setSignupRedirectState,
        signupRedirectState,
        signinRedirectState,
        setSigninRedirectState,
        addToCart,
        cartItemNumber,
        addToCartNotification,
        changeShopNotificationDisplay,
        setUserCreatedState,
        deleteCartItem,
      }}
    >
      {children}
    </Context.Provider>
  );
}
