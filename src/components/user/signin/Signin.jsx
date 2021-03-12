import React, { useState } from "react";
import "./Signin.css";
import { Link, Redirect } from "react-router-dom";
import { useUserContext } from "../../contexts/UsersContext";

export default function Signin({ setNotificationDisplay }) {
  const {
    login,
    setSigninRedirectState,
    signinRedirectState,
  } = useUserContext();
  const [loginInfo, setLoginInfo] = useState({
    name: "",
    password: "",
  });

  if (signinRedirectState) {
    setSigninRedirectState(false);
    return <Redirect to="/profile" />;
  }
  return (
    <div className="signin-container">
      <h1>Sigin</h1>
      <p className="signin-first text-purpel bold-700">
        You have To sign in for buying goods.
      </p>
      <form
        className="signin-form"
        onSubmit={(e) => {
          e.preventDefault();
          login(loginInfo);

          setLoginInfo({
            name: "",
            password: "",
          });
          setNotificationDisplay(true);
        }}
      >
        <div className="signin-input-container">
          <label htmlFor="name" className="signin-label">
            Name:
          </label>
          <input
            type="text"
            required
            name="name"
            className="signin-inputs"
            placeholder="User Name"
            value={loginInfo.name}
            onChange={(e) => {
              setLoginInfo({ ...loginInfo, name: e.target.value });
            }}
          />
        </div>

        <div className="signin-input-container">
          <label htmlFor="password" className="signin-label">
            Password:
          </label>

          <input
            type="password"
            required
            name="name"
            placeholder="********"
            className="signin-inputs"
            value={loginInfo.password}
            onChange={(e) => {
              setLoginInfo({ ...loginInfo, password: e.target.value });
            }}
          />
        </div>
        <button
          className="signin-buttons"
          onSubmit={(e) => {
            e.preventDefault();
            login(loginInfo);
            setLoginInfo({
              name: "",
              password: "",
            });
          }}
        >
          Singin
        </button>
        <p>
          If you don't have an account u can
          <Link to="/signup" className="text-purpel bold-700 hover-under-line">
            {` Singup `}
          </Link>
          right now.
        </p>
      </form>
    </div>
  );
}
