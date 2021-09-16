import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="menu">
      <div className="container">
        <div className="row">
          <div className=" col-lg-6 col-12">
            
              <img src="http://www.studentdesk.in/img/logo.png" />
            
          </div>
          <div className="row">
            <div className="col-12">
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
        </div>
      </div>
    </div>
  );
}
