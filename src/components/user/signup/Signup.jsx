import React, { useState } from "react";
import { CgDanger } from "react-icons/cg";
import { IoMdCheckmarkCircle } from "react-icons/io";
import "./Signup.css";
import { Link, Redirect } from "react-router-dom";
import { useUserContext } from "../../contexts/UsersContext";
import { validateEmail } from "../../../functinos/validateEmail";

export default function Signup({ setNotificationDisplay }) {
  const { setSignupRedirectState, signupRedirectState } = useUserContext();

  const getValue = (whichOne, value) => {
    setUserInformation((currentValue) => ({
      ...currentValue,
      [whichOne]: value,
    }));
  };

  const validateByLength = (value, length = 4) => value.length >= length;

  const [userInformation, setUserInformation] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
    permission: function () {
      return (
        validateByLength(this.name, 4) &&
        validateEmail(this.email) &&
        validateByLength(this.password, 8) &&
        this.password === this.password2
      );
    },
  });

  const { createUser } = useUserContext();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    createUser(userInformation);
    setUserInformation((currentInformation) => ({
      ...currentInformation,
      name: "",
      email: "",
      password: "",
      password2: "",
    }));
    setNotificationDisplay(true);
  };

  const validateRepeatedPassword = (value) =>
    value && value === userInformation.password;

  if (signupRedirectState) {
    setSignupRedirectState(false);
    return <Redirect to="/signin" />;
  }

  return (
    <div className="singup-container">
      <h1>Signup</h1>

      <form className="singup-form" onSubmit={(e) => handleOnSubmit(e)}>
        <div className="input-container-singup">
          <label className="label-singup" htmlFor="name">
            Name:
          </label>
          <input
            required
            value={userInformation.name}
            name="name"
            onChange={(e) => getValue(e.target.name, e.target.value)}
            placeholder="Fill it with your name:"
            type="text"
            id="name"
            className="singup-inputs"
          />

          <CgDanger
            style={{
              display: validateByLength(userInformation.name)
                ? "none"
                : "block",
            }}
            className="singup-danger-mark sign"
          />
          <IoMdCheckmarkCircle
            style={{
              display: validateByLength(userInformation.name)
                ? "block"
                : "none",
            }}
            className="singup-check-mark  sign "
          />
        </div>

        <div className="input-container-singup">
          <label className="label-singup" htmlFor="email">
            Email:
          </label>
          <input
            required
            value={userInformation.email}
            name="email"
            onChange={(e) => getValue(e.target.name, e.target.value)}
            className="singup-inputs"
            placeholder="Fill it with your email:"
            type="email"
            id="email"
          />

          <CgDanger
            style={{
              display: validateEmail(userInformation.email) ? "none" : "block",
            }}
            className="singup-danger-mark sign"
          />
          <IoMdCheckmarkCircle
            className="singup-check-mark  sign"
            style={{
              display: validateEmail(userInformation.email) ? "block" : "none",
            }}
          />
        </div>

        <div className="input-container-singup">
          <label className="label-singup" htmlFor="password">
            Password:
          </label>

          <input
            required
            value={userInformation.password}
            name="password"
            onChange={(e) => getValue(e.target.name, e.target.value)}
            className="singup-inputs"
            placeholder="Fill it with your password:"
            type="password"
            id="passsword"
          />

          <CgDanger
            style={{
              display: validateByLength(userInformation.password, 8)
                ? "none"
                : "block",
            }}
            className="singup-danger-mark sign"
          />

          <IoMdCheckmarkCircle
            className="singup-check-mark  sign"
            style={{
              display: validateByLength(userInformation.password, 8)
                ? "block"
                : "none",
            }}
          />
        </div>

        <div className="input-container-singup">
          <label className="label-singup" htmlFor="paswrod2">
            Password repeat:
          </label>
          <input
            required
            value={userInformation.password2}
            name="password2"
            onChange={(e) => getValue(e.target.name, e.target.value)}
            className="singup-inputs"
            placeholder="Reapeat your password:"
            type="password"
            id="password2"
          />

          <CgDanger
            style={{
              display: validateRepeatedPassword(userInformation.password2)
                ? "none"
                : "block",
            }}
            className="singup-danger-mark sign"
          />
          <IoMdCheckmarkCircle
            className="singup-check-mark  sign"
            style={{
              display: validateRepeatedPassword(userInformation.password2)
                ? "block"
                : "none",
            }}
          />
        </div>

        <input type="submit" value="Singin" className="singup-and-up-button" />

        <p>
          If you don't have any account you can
          <Link to="signin" className="text-purpel hover-under-line">
            {" Singin. "}
          </Link>
        </p>
      </form>
    </div>
  );
}
