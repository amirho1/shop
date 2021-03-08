import "./Main.css"
import React, { useState } from 'react'
import Slider from "../slider/Slider";
import { Switch, Route } from "react-router-dom";
import Shop from "../shop/Shop";
import DropDown from "../shop/drop-down/DropDown";
import Signin from "../user/signin/Signin";




export default function Main() {
  const [category, setCategory] = useState();
  const changeCategory = (value) => {
    setCategory(value)
  }




  return (
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

        <Route path="/profile">
          profile
        </Route>
        <Route path="/shop-cart">
          shop cart
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>
      </Switch>
    </main>
  )
}
