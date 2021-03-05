import React from 'react'
import { AiOutlineInstagram, AiOutlineGithub } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { IconContext } from "react-icons";
import "./Footer.css";
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <footer className="footer">
      <ul className="footer-list ">
        <li className="footer-list-items">
          <Link className="hover-under-line" to="/">Home</Link>
        </li>
        <li className="footer-list-items">
          <Link className="hover-under-line" to="/shop">Shop</Link>
        </li>
        <li className="footer-list-items">
          <Link className="hover-under-line" to="/profile">Profile</Link>
        </li>
      </ul>

      <div className="footer-description">
        <p>
          this site powered by: <b><a className="text-purpel-underline" target="_blank" rel="noreferrer" href="https://reactjs.org/">React.js</a></b><br />
        developed by:  <b><a className="text-purpel-underline" target="_blank" rel="noreferrer" href="https://github.com/amirho1"> AmirHossein Salighedar</a></b><br />
        this is a  shoping site that get
        fake api from <b><a className="text-purpel-underline" href="https://fakestoreapi.com/" target="_blank" rel="noreferrer">https://fakestoreapi.com/</a></b>
        </p>
      </div>
      <IconContext.Provider value={{ className: 'footer-icons' }}>
        <ul className="footer-social-links">
          <li><a target="_blank" rel="noreferrer" href="https://www.instagram.com/amirhosseinsalighedar/"><AiOutlineInstagram /></a></li>
          <li><a target="_blank" rel="noreferrer" href="https://reactjs.org/"><FaReact /></a></li>
          <li><a target="_blank" rel="noreferrer" href="https://github.com/amirho1"><AiOutlineGithub /></a></li>
        </ul>
      </IconContext.Provider>

    </footer>
  )
}
