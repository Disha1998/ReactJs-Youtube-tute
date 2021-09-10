import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container } from "react-bootstrap";

export default function Arrivels() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
      <div className="NewArrivel">
          <div>
              <h3>New Arrivels</h3>    </div>
              <div className="main-line"></div>
      
          
          
    <Container>
    
      <Slider {...settings}>
        <div className="">
          <img src="http://books.google.com/books/content?id=W3eytUUwhEIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" />
         <div className="caption">
         <div>Javascriptbible</div>
          <div>FOR FREE</div>
        </div>
        </div>
        <div className="">
        <img src="http://books.google.com/books/content?id=W3eytUUwhEIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" />
        <div className="caption">
         <div>Javascriptbible</div>
          <div>FOR FREE</div>
        </div>
        </div>
        <div className="">
        <img src="http://books.google.com/books/content?id=W3eytUUwhEIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" />
        <div className="caption">
         <div>Javascriptbible</div>
          <div>FOR FREE</div>
        </div>
        </div>
        <div className="">
        <img src="http://books.google.com/books/content?id=W3eytUUwhEIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" />
        <div className="caption">
         <div>Javascriptbible</div>
          <div>FOR FREE</div>
        </div>
        </div>
        <div className="">
        <img src="http://books.google.com/books/content?id=W3eytUUwhEIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" />
        <div className="caption">
         <div>Javascriptbible</div>
          <div>FOR FREE</div>
        </div>
        </div>
        <div className="">
        <img src="http://books.google.com/books/content?id=W3eytUUwhEIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" />
        <div className="caption">
         <div>Javascriptbible</div>
          <div><>FOR FREE</></div>
        </div>
        </div>
      </Slider>
      <button id="view-more">View More</button>
    </Container>
    </div>
  );
}
