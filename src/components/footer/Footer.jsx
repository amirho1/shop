import React from 'react'
import { AiOutlineInstagram, AiOutlineGithub } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { IconContext } from "react-icons";
import "./Footer.css";
import logo from "./logo.svg";
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <footer className="footer">
      <ul className="footer-list ">
        <li className="footer-list-items">
          <Link to="/">Home</Link>
        </li>
        <li className="footer-list-items">
          <Link to="/shop">Shop</Link>
        </li>
        <li className="footer-list-items">
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
      <img src={logo} alt="" className="react-logo" width="100" height="100" />
      <IconContext.Provider value={{ color: 'white', className: 'footer-icons' }}>
        <ul className="social-links">
          <li><a target="_blank" rel="noreferrer" href="https://www.instagram.com/amirhosseinsalighedar/"><AiOutlineInstagram /></a></li>
          <li><a href="https://reactjs.org/"><FaReact /></a></li>
          <li><a href="https://github.com/amirho1"><AiOutlineGithub /></a></li>
        </ul>
      </IconContext.Provider>

    </footer>
  )
}
