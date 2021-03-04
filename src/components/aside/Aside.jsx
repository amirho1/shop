import React from 'react'
import "./Aside.css"
import { Link } from "react-router-dom";

export default function Aside({ user }) {
  if (!user) {
    return (
      <aside className="aside position-relative">
        <p className="position-relative">Welcome <Link className="links" to="">join</Link> now or <Link className="links" to="">login</Link></p>
      </aside>
    )
  }
  return;
}
