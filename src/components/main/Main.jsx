import "./Main.css";
import React, { useState } from "react";
import Slider from "../slider/Slider";
import { Switch, Route } from "react-router-dom";
import Shop from "../shop/Shop";
import DropDown from "../shop/drop-down/DropDown";
import Signup from "../user/signup/Signup";
import Notification from "../user/notification/Notification";
import Signin from "../user/signin/Signin";
import Profile from "../profile/Profile";
import { useUserContext } from "../contexts/UsersContext";
import PrivateRoute from "../privateRoute/PrivateRoute";
import Home from "../home/Home";

export default function Main() {
  const [category, setCategory] = useState();

  const {
    userCreatedState,
    loginState,
    addToCartNotification,
    changeShopNotificationDisplay,
  } = useUserContext();

  const changeCategory = (value) => {
    setCategory(value);
  };

  const [singupNotificationDisplay, setSingupNotificationDisplay] = useState(
    false
  );
  const [siginNotification, setSigninNotification] = useState(false);

  return (
    <>
      <main className="main">
        <Switch>
          <Route path="/" exact>
            <Home />
            <Slider />
          </Route>

          <Route path="/shop">
            <Notification
              setNotificationDisplay={changeShopNotificationDisplay}
              display={addToCartNotification.display ? "block" : "none"}
              state={addToCartNotification}
            />

            <div className="top-of-shop">
              <DropDown changeCategory={changeCategory} className="dropdown" />
            </div>
            <Shop category={category} />
          </Route>

          <Route path="/signup">
            <Notification
              setNotificationDisplay={setSingupNotificationDisplay}
              display={singupNotificationDisplay ? "block" : "none"}
              state={userCreatedState}
            />

            <Signup setNotificationDisplay={setSingupNotificationDisplay} />
          </Route>

          <Route path="/signin">
            <Notification
              setNotificationDisplay={setSingupNotificationDisplay}
              display={singupNotificationDisplay ? "block" : "none"}
              state={userCreatedState}
            />

            <Notification
              setNotificationDisplay={setSigninNotification}
              display={siginNotification ? "block" : "none"}
              state={loginState}
            />

            <Signin setNotificationDisplay={setSigninNotification} />
          </Route>
          <PrivateRoute path="/profile" where="/signin">
            <Notification
              setNotificationDisplay={setSigninNotification}
              display={siginNotification ? "block" : "none"}
              state={loginState}
            />

            <Profile />
          </PrivateRoute>
        </Switch>
      </main>
    </>
  );
}
