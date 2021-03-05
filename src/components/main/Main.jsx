import "./Main.css"
import React, { useState, useEffect } from 'react'
import Slider from "../slider/Slider";
import { Switch, Route } from "react-router-dom";
import Shop from "../shop/Shop";
import DropDown from "../shop/drop-down/DropDown";


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
          Profile
        </Route>
        <Route path="/shop-cart">
          shop cart
        </Route>
      </Switch>
    </main>
  )
}
