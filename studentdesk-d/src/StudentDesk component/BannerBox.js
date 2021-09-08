import React from "react";
import { Link } from "react-router-dom";
// import { Button } from "bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { faUniversity } from "@fortawesome/free-solid-svg-icons";

export default function BannerBox() {
  return (
    <div className="banner-bx">
      <div className="container">
        <h3 className="py-5">I Want to Buy/Sell/Exchange used Book in my</h3>
        <div className="btn-box">
          <button id="city-btn" className="btn btn-outline-light">
            <FontAwesomeIcon icon={faBuilding} />
            <Link to="/" className="btn btn-">
              CITY
            </Link>{" "}
          </button>{" "}
          <button id="inst-btn" className="btn btn-outline-light">
            <FontAwesomeIcon icon={faUniversity} />{" "}
            <Link to="/">INSTITUTE</Link>{" "}
          </button>
          {/* <Button variant="outline-dark">Dark</Button> */}

          <h5>Books in popular cities: Delhi, Pune, Bangalore, Ahmedabad</h5>
          <span>- OR -</span>
        </div>
      </div>
    </div>
  );
}
