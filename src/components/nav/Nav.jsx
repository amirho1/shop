import "./Nav.css";
import React from "react";
import { Link } from "react-router-dom";
import { BsFillBagFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { useUserContext } from "../contexts/UsersContext";

export default function Nav() {
  const { whoIsLogin, setWhoIsLogin, cartItemNumber } = useUserContext();
  return (
    <nav>
      <input
        type="checkbox"
        name="nav"
        id="nav-check-box"
        className="display-none"
      />

      <ul className="nav-list ">
        <li className="nav-list-items">
          <Link className="hover-under-line" to="/">
            Home
          </Link>
        </li>
        <li className="nav-list-items">
          <Link className="hover-under-line" to="/shop">
            Shop
          </Link>
        </li>

        <li className="nav-list-items">
          <Link className="hover-under-line cart-nav" to="/profile">
            <BsFillBagFill className="shop-cart" />
            <div className="items-in-cart">
              {whoIsLogin ? cartItemNumber : 0}
            </div>
          </Link>
        </li>

        <li className="nav-list-items signup-signin-nav-item">
          <Link
            className="hover-under-line"
            to="/signin"
            style={{
              display: !whoIsLogin ? "block" : "none",
            }}
          >
            Signin
          </Link>

          <Link className="hover-under-line" to="/signup">
            Signup
          </Link>
          <Link
            to="/signin"
            className="hover-under-line"
            onClick={() => {
              setWhoIsLogin(undefined);
            }}
            style={{
              display: !whoIsLogin ? "none" : "block",
              color: "#7c52bf",
            }}
          >
            Exit
          </Link>
        </li>
      </ul>

      <label htmlFor="nav-check-box">
        <GiHamburgerMenu className="hamberger-menu" />
      </label>

      <h1 className="logo ">
        <Link to="/" className="hover-under-line">
          Logo
        </Link>
      </h1>
    </nav>
  );
}
