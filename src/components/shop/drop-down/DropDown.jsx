import React from 'react'
import "./DropDown.css";
import { AiFillCaretUp } from "react-icons/ai";
export default function DropDown({ changeCategory }) {
  return (
    <div className="drop-down-container">
      <span>Select</span>
      <AiFillCaretUp className="categories-arrow-down" />
      <ul className="categories-checkbox-container">
        <li>
          <label htmlFor="all">All</label>
          <input value="" type="radio" name="category" id="all" onClick={(e) => changeCategory(e.target.value)} />
        </li>
        <li>
          <label htmlFor="men-clothing">Men Clothing</label>
          <input value="men clothing" type="radio" name="category" id="men-clothing" onClick={(e) => changeCategory(e.target.value)} />
        </li>
        <li>
          <label htmlFor="men-clothing">electronics</label>
          <input onClick={(e) => changeCategory(e.target.value)} value="electronics" type="radio" name="category" id="electronics" />
        </li>
        <li>
          <label htmlFor="men-clothing">jewellery</label>
          <input onClick={(e) => changeCategory(e.target.value)} value="jewelery" type="radio" name="category" id="jewellery" />
        </li>
        <li>
          <label htmlFor="men-clothing">women clothing</label>
          <input onClick={(e) => changeCategory(e.target.value)} value="women clothing" type="radio" name="category" id="women-clothing" />
        </li>
      </ul>
    </div>
  )
}
