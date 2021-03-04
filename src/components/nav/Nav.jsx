import "./Nav.css";
import React from 'react'
import { Link } from "react-router-dom";
import { BsFillBagFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";


export default function Nav() {
  return (
    <nav>
      <input type="checkbox" name="nav" id="nav-check-box" className="display-none" />

      <ul className="nav-list ">
        <li className="nav-list-items">
          <Link className="hover-under-line" to="/">Home</Link>
        </li>
        <li className="nav-list-items">
          <Link className="hover-under-line" to="/shop">Shop</Link>
        </li>
        <li className="nav-list-items">
          <Link className="hover-under-line" to="/profile">Profile</Link>
        </li>
        <li className="nav-list-items">
          <Link className="hover-under-line" to="/shop-cart">
            <BsFillBagFill className="shop-cart" />
          </Link>
        </li>
      </ul>

      <label htmlFor="nav-check-box">
        <GiHamburgerMenu className="hamberger-menu" />
      </label>

      <h1 className="logo"  ><Link to="/">Logo</Link></h1>
    </nav >
  )
}
