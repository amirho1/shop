import React from 'react'
import { useUserContext } from "../../contexts/UsersContext";
import "./Notification.css";
import { IoMdCloseCircle } from "react-icons/io";


export default function Notification({display, setNotificationDisplay}) {

  const {userCreatedState} = useUserContext();
  const {error, fulfill} = userCreatedState;
  if (error) return <div className="notification" style={{display: display,backgroundColor: "#b21515"}}>
    {error} 
    <IoMdCloseCircle onClick={() => setNotificationDisplay(false)} className="close-notification"/>
    </div>;
  return <div className="notification" style={{display: display,backgroundColor: "#7c52bf"}}>
    {fulfill}
    <IoMdCloseCircle onClick={() => setNotificationDisplay(false)} className="close-notification"/>
    </div>;
}
