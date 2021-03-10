import "./Main.css";
import React, { useState } from "react";
import Slider from "../slider/Slider";
import { Switch, Route } from "react-router-dom";
import Shop from "../shop/Shop";
import DropDown from "../shop/drop-down/DropDown";
import Signup from "../user/signup/Signup";
import Notification from "../user/notification/Notification";
import Signin from "../user/signin/Signin";

export default function Main() {
  const [category, setCategory] = useState();

  const changeCategory = (value) => {
    setCategory(value);
  };

  const [singupNotificationDisplay, setSingupNotificationDisplay] = useState(
    false
  );

  return (
    <>
      <main className="main">
        <Switch>
          <Route path="/" exact>
            <Slider />
          </Route>

          <Route path="/shop">
            <div className="top-of-shop">
              <DropDown changeCategory={changeCategory} />
            </div>
            <Shop category={category} />
          </Route>

          <Route path="/shop-cart">shop cart</Route>

          <Route path="/signup">
            <Notification
              setNotificationDisplay={setSingupNotificationDisplay}
              display={singupNotificationDisplay ? "block" : "none"}
            />
            <Signup setNotificationDisplay={setSingupNotificationDisplay} />
          </Route>

          <Route path="/signin">
            <Notification
              setNotificationDisplay={setSingupNotificationDisplay}
              display={singupNotificationDisplay ? "block" : "none"}
            />
            <Signin />
          </Route>
        </Switch>
      </main>
    </>
  );
}
