// import { Button } from "bootstrap";
import React from "react";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Books() {
  return (
    <div className="container Listing-bx" style={{ padding: "20px 60px",margin:"70px" }}>
      <div className="row" style={{ width: "100%" }}>
        <div className="col-lg-12 col-md-9 col-sm-6 col-xs-12">
          <div className="img-list">
            <img
              alt=""
              src="http://books.google.com/books/content?id=xUGtoAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            ></img>
          </div>
          <div className="detail-bx">
            <ul>
              <li>
                <h3 className="title">An atlas of love</h3>
              </li>
              <li>Author: Anuja Chauhan</li>
              <li>City: Navsari</li>
              <li>Posted by: Jill thakkar</li>
              <div className="List-btn">
                <button>Buy Book</button>
                <button>Exchange Book</button>
              </div>
            </ul>
          </div>
          <div className="postedby">
            <p style={{color:"green"}}> Price: <FontAwesomeIcon icon={faRupeeSign} />200 | <s style={{color:'grey'}}> <FontAwesomeIcon icon={faRupeeSign} />195 </s></p>
            <p style={{color:'grey'}}>Posted on: 1, Dec</p>
          </div>
        </div>
      </div>
    </div>

    // </div>
    // </div>
  );
}
