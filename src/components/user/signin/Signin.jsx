import React from 'react'
import { CgDanger } from "react-icons/cg";
import { IoMdCheckmarkCircle } from "react-icons/io";
import "./Sign.css";
import { Link } from "react-router-dom";

export default function Signin() {

  return (
    <div className="signin-container">
      <form className="signin-form">
        
        <div className="input-container-signin">
          <label className="label-signin" htmlFor="name">Name:</label>
          <input placeholder="Fill it with your name:" type="text" id="name" className="signin-inputs"/>
          <CgDanger className="signin-danger-mark sign"/>
          <IoMdCheckmarkCircle className="signin-check-mark  sign "/>
        </div>

        <div className="input-container-signin">
          <label className="label-signin" htmlFor="email">Email:</label>
          <input className="signin-inputs" placeholder="Fill it with your email:" type="email" id="email"/>
          <CgDanger className="signin-danger-mark sign"/>
          <IoMdCheckmarkCircle className="signin-check-mark  sign"/>
        </div>

        <div className="input-container-signin">
          <label className="label-signin" htmlFor="password">Password:</label>
          <input className="signin-inputs" placeholder="Fill it with your password:" type="password" id="passsword"/>
          <CgDanger className="signin-danger-mark sign"/>
          <IoMdCheckmarkCircle className="signin-check-mark  sign"/>
        </div>
        
        <div className="input-container-signin">
          <label className="label-signin" htmlFor="paswrod2">Password repeat:</label>
          <input className="signin-inputs" placeholder="Reapeat your password:" type="password" id="password2"/>
          <CgDanger className="signin-danger-mark sign"/>
          <IoMdCheckmarkCircle className="signin-check-mark  sign"/>
        </div>

        <input type="button" value="Singin" className="signin-and-up-button"/>

        <p>If you don't have any account you can <Link to="signup" className="text-purpel ">Signup</Link></p>
      </form>
    </div>
  )
}
