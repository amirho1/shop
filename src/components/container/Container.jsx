import React from 'react';
import Main from "../main/Main";
import Aside from "../aside/Aside";
import "./Container.css";
import Footer from "../footer/Footer";


export default function Container() {
  return (
    <div className="container">
      <Main />
      <Aside />
      <Footer />
    </div>
  )
}
