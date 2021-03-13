import React from "react";
import "./Home.css";
import { FaReact } from "react-icons/fa";
export default function Home() {
  return (
    <div className="home-container">
      <div className="home-about-us">
        <div className="home-description">
          <h1 className="react-name">React Shop</h1>

          <h4>
            With us buy goods easy less expensive than other shops. reach your
            dream easily. dont waste your time with a few clicks you can buy
            what ever you want.
            <b className="text-purpel bold-700">
              description: for testing the site you have to register first of
              all then signin know easily you can test it
            </b>
          </h4>
        </div>

        <div className="logo-wrapper">
          <FaReact className="react-logo" />
        </div>
      </div>
    </div>
  );
}
