import React, {useState} from 'react'
import { CgDanger } from "react-icons/cg";
import { IoMdCheckmarkCircle } from "react-icons/io";
import "./Sign.css";
import { Link } from "react-router-dom";



export default function Signin() {
  const [userInformation, setUserInformation] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const getValue = (whichOne, value) => {
    setUserInformation(currentValue => ({...currentValue, [whichOne]: value}));
  };

  const validateByLength = (value, length =4) => value.length >= length;;

  const  validateEmail = (email) =>  {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const validateRepeatedPassword = (value) => value && value === userInformation.password;

  return (
    <div className="signin-container">
      <form className="signin-form">
        
        <div className="input-container-signin">
          <label className="label-signin" htmlFor="name">Name:</label>
          <input 
            value={userInformation.name}
            name="name"
            onChange={e => getValue(e.target.name,e.target.value)}
            placeholder="Fill it with your name:"
            type="text" id="name"
            className="signin-inputs"
          />

          <CgDanger  style={{display: validateByLength(userInformation.name) ? "none" : "block"}} className="signin-danger-mark sign"/>
          <IoMdCheckmarkCircle  style={{display: validateByLength(userInformation.name) ? "block" : "none"}} className="signin-check-mark  sign "/>
        </div>

        <div className="input-container-signin">
          <label className="label-signin" htmlFor="email">Email:</label>
          <input 
            value={userInformation.email}
            name="email" 
            onChange={e => getValue(e.target.name,e.target.value)} 
            className="signin-inputs" 
            placeholder="Fill it with your email:" 
            type="email" id="email"
           />

          <CgDanger  style={{display: validateEmail(userInformation.email)? "none" : "block" }} className="signin-danger-mark sign"/>
          <IoMdCheckmarkCircle 
          className="signin-check-mark  sign"
          style={{display: validateEmail(userInformation.email)? "block" : "none" }}
           />
        </div>

        <div className="input-container-signin">
          <label className="label-signin" htmlFor="password">Password:</label>
          <input 
          value={userInformation.password} 
          name="password" onChange={e => getValue(e.target.name,e.target.value)} 
          className="signin-inputs" 
          placeholder="Fill it with your password:" 
          type="password" 
          id="passsword"/>

          <CgDanger  
            style={{display: validateByLength(userInformation.password, 8) ? "none" : "block"}}
            className="signin-danger-mark sign"/>
            
          <IoMdCheckmarkCircle
           className="signin-check-mark  sign"
           style={{display: validateByLength(userInformation.password, 8) ? "block" : "none"}}/>
        </div>
        
        <div className="input-container-signin">
          <label className="label-signin" htmlFor="paswrod2">Password repeat:</label>
          <input 
          value={userInformation.password2}
           name="password2" 
           onChange={e => getValue(e.target.name,e.target.value)} 
           className="signin-inputs" 
           placeholder="Reapeat your password:" 
           type="password" 
           id="password2"/>

          <CgDanger
           style={{display: validateRepeatedPassword(userInformation.password2) ? "none" : "block"}} 
           className="signin-danger-mark sign"/>
          <IoMdCheckmarkCircle 
          className="signin-check-mark  sign"
          style={{display: validateRepeatedPassword(userInformation.password2) ? "block" : "none" }} />
        </div>

        <input type="button" value="Singin" className="signin-and-up-button"/>

        <p>If you don't have any account you can <Link to="signupp" className="text-purpel ">Signup</Link></p>
      </form>
    </div>
  )
}
