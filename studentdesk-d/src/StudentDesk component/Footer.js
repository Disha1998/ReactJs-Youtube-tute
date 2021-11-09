import React from "react";

export default function Footer() {
  return (
    <footer>
    <div className="footer py-5">
      {/* <div class="container"> */}
      <div className="row">
        <div className="col-lg-4">
          <div className="footer-widget">
            <div className="title-1">
              <h4>Old Books in popular cities</h4>
            </div>
            <div className="line1"></div>
            <div className="text-content-old">
              <ul>
                <li>Old Books in Pune</li>
                <li>Old Books in Bangalore</li>
                <li>Old Books in Ahmedabad</li>
                <li>Old Books in Hyderabad</li>
                <li>Old Books in Pune</li>
                <li>Old Books in Bangalore</li>
                <li>Old Books in Ahmedabad</li>
                <li>Old Books in Hyderabad</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="footer-widget">
            <div className="title-1">
              <h4>Quick Links</h4>
            </div>
            <div className="line1"></div>
            <div className="text-content">
              <ul>
                <li>Old books(Used books)</li>
                <li>Free/Donate Old Books</li>
                <li>Entrance Exams books</li>
                <li>Magazine</li>
                <li>Exchange Novels</li>
                <li>Buy used textbooks</li>
                <li>Buy used novels</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="footer-widget">
            <div className="title-1">
              <h4>Keep Connected</h4>
            </div>
            <div className="line1"></div>
            <div className="text-content">
              <ul>
                <li>About us</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Contact us</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className='copy-right'>
    <div className='row'>
      <div className='col-xl-6 col-lg-6' style={{color:'#908F8F'}}>
      &copy;Copyright  2020. All Rights Reserved Product of <a  href='#'>CodeCrunch Techlabs Pvt. Ltd.</a>

  

      </div>
    </div>


    </div>
    </footer>
  );
}
