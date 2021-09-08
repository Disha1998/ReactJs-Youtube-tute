import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="menu" >
      <Link to="/"><img src="http://www.studentdesk.in/img/logo.png" /></Link>
        <ul>
    <li> <button><Link to="/">Post Book</Link> </button> </li>
      <li> <button><Link to="/Login">Login</Link> </button></li>
      </ul>
    </div>
  );
}
