import "./Profile.css";
import React from "react";
import Information from "./information/Information";
import Cart from "./cart/Cart";
import { useUserContext } from "../contexts/UsersContext";
export default function Profile() {
  const { whoIsLogin, users, changeUserInfo } = useUserContext();

  return (
    <div className="profile-container">
      <Information
        whoIsLogin={whoIsLogin}
        users={users}
        changeUserInformation={changeUserInfo}
      />
      <Cart whoIsLogin={whoIsLogin} users={users} title="cart" />
    </div>
  );
}
