import "./Main.css"
import React from 'react'
import Slider from "../slider/Slider";
import { Switch, Route } from "react-router-dom";
import Shop from "../shop/Shop";

export default function Main() {
  return (
    <main className="main">
      <Switch>
        <Route path="/" exact>
          <Slider />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="profile">
          Profile
        </Route>
        <Route path="shop-cart">
          shop cart
        </Route>
      </Switch>
    </main>
  )
}
