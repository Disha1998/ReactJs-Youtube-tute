import { Button } from "bootstrap";
import React from "react";
// import { Link } from "react-router-dom";

export default function Books() {
  return (
    
      <div className="container">
       <div className="row">
         <div className="col d-flex">
           {/* <div className="Listing"> */}
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
          <h4> Price :43$</h4>
        </div>
         </div>
       </div>
      </div>
    
    // </div>
    // </div>
  );
}
