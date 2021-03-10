import React from "react";
import "./Aside.css";
import { Link } from "react-router-dom";
import img from "./avatar.png";

export default function Aside({ user }) {
  // if (!user) {
  //   return (
  //     <aside className="aside position-relative">
  //       <p className="position-relative">
  //         Welcome
  //         <Link className="links" to="/signup">
  //           join
  //         </Link>
  //         now or
  //         <Link className="links" to="/signin">
  //           login
  //         </Link>
  //       </p>
  //     </aside>
  //   );
  // }
  return (
    <aside className="aside position-relative">
      <img src={img} alt="avatar" />
    </aside>
  );
}
