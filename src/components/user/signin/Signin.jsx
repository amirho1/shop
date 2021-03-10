import React, { useState } from "react";
import "./Signin.css";
import { Link } from "react-router-dom";
import { useUserContext } from "../../contexts/UsersContext";

export default function Signin() {
  const { login } = useUserContext();
  const [loginInfo, setLoginInfo] = useState({
    name: false,
    password: false,
  });

  return (
    <div className="signin-container">
      <h1>Sigin</h1>
      <form className="signin-form" onSubmit={() => login(loginInfo)}>
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
              console.log(loginInfo);
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
              console.log(loginInfo);
            }}
          />
        </div>
        <button className="signin-buttons" onSubmit={() => {}}>
          Singin
        </button>
        <p>
          If you don't have account u can
          <Link to="/signup" className="text-purpel bold-700 hover-under-line">
            Singup
          </Link>
          right now.
        </p>
      </form>
    </div>
  );
}
