import React, { useState } from "react";
import { CgGenderFemale, CgGenderMale } from "react-icons/cg";
import avatar from "./avatar.png";
import "./Information.css";
import { useUserContext } from "../../contexts/UsersContext";

//
export default function Information({ whoIsLogin, changeUserInformation }) {
  const { users } = useUserContext();

  const [userInfo, setUserInfo] = useState(
    users.filter((user) => whoIsLogin === user.name)[0]
  );

  const changeUserInfo = (e) => {
    const newUserInfo = { ...userInfo };
    newUserInfo[e.target.name] = e.target.value;
    setUserInfo(newUserInfo);
  };

  return (
    <div className="information-container">
      <div className="information-header">
        <div>
          <img src={avatar} alt="avatar" />
          <h3 className="profile-name">{userInfo.name}</h3>
        </div>
      </div>

      <form
        className="profile-form"
        onSubmit={(e) => {
          e.preventDefault();
          changeUserInformation(userInfo);
        }}
      >
        <h2>User Information</h2>
        <div className="inputs-container">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={userInfo.name}
            readOnly
            onChange={() => {}}
          />
        </div>

        <div className="genders-container">
          <div className="inputs-container">
            <label htmlFor="male">
              <CgGenderMale
                style={{
                  color: userInfo.gender === "male" ? "#7c52bf" : "#dadde1",
                }}
              />
            </label>
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
              onClick={(e) => changeUserInfo(e)}
            />
          </div>

          <div className="inputs-container">
            <label htmlFor="female">
              <CgGenderFemale
                style={{
                  color: userInfo.gender === "female" ? "#7c52bf" : "#dadde1",
                }}
              />
            </label>
            <input
              type="radio"
              name="gender"
              value="female"
              id="female"
              onClick={(e) => changeUserInfo(e)}
            />
          </div>
        </div>

        <div className="inputs-container">
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={userInfo.email}
            onChange={(e) => changeUserInfo(e)}
          />
        </div>

        <button
          onSubmit={(e) => {
            e.preventDefault();
            changeUserInformation(userInfo);
          }}
        >
          Save
        </button>
      </form>
    </div>
  );
}
