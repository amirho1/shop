import "./Main.css"
import React, { useState } from 'react'
import Slider from "../slider/Slider";
import { Switch, Route } from "react-router-dom";
import Shop from "../shop/Shop";
import DropDown from "../shop/drop-down/DropDown";


export default function Main() {
  return (
    <main className="main">
      <Switch>
        <Route path="/" exact>
          <Slider />
        </Route>
        <Route path="/shop">
          <div className="top-of-shop">
            <DropDown />
          </div>
          <Shop />
        </Route>
        <Route path="/profile">
          Profile
        </Route>
        <Route path="/shop-cart">
          shop cart
        </Route>
      </Switch>
    </main>
  )
}
