import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="menu">
      <div className="container col-12 col-sm-6 col-md-8 col-6 col-md-4">
        <Link to="/">
          <img src="http://www.studentdesk.in/img/logo.png" />
        </Link>
        <ul>
          <li>
            {" "}
            <button>
              <Link to="/">Post Book</Link>{" "}
            </button>{" "}
          </li>
          <li>
            {" "}
            <button>
              <Link to="/Login">Login / Signup</Link>{" "}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
