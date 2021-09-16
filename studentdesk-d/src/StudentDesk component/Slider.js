import React, {Component} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container } from "react-bootstrap";







export default class Responsive extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="slider"  style={{backgroundColor:"#f3f3f3",paddingBottom:"150px"}}>
      <div className="container">
        <div className="row">
          <div className="col">
          <h2 className="SliderH2"> New Arrivels </h2>
          <div className="main-line"></div>
        <Slider {...settings}>
          
         <div className="NewArrivel">
            <img alt="" src="http://books.google.com/books/content?id=W3eytUUwhEIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" />
            <div className="caption">
              <div>Javascriptbible</div>
              <div>FOR FREE</div>
            </div>
          </div>
          <div className="NewArrivel">
            <img alt="" src="http://books.google.com/books/content?id=W3eytUUwhEIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" />
            <div className="caption">
              <div>Javascriptbible</div>
              <div>FOR FREE</div>
            </div>
          </div>
          <div className="NewArrivel">
            <img alt="" src="http://books.google.com/books/content?id=W3eytUUwhEIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" />
            <div className="caption">
              <div>Javascriptbible</div>
              <div>FOR FREE</div>
            </div>
          </div>
          <div className="NewArrivel">
            <img alt="" src="http://books.google.com/books/content?id=W3eytUUwhEIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" />
            <div className="caption">
              <div>Javascriptbible</div>
              <div>FOR FREE</div>
            </div>
          </div>
          <div className="NewArrivel">
            <img alt="" src="http://books.google.com/books/content?id=W3eytUUwhEIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" />
            <div className="caption">
              <div>Javascriptbible</div>
              <div>FOR FREE</div>
            </div>
          </div>
          <div className="NewArrivel">
            <img alt="" src="http://books.google.com/books/content?id=W3eytUUwhEIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" />
            <div className="caption">
              <div>Javascriptbible</div>
              <div>FOR FREE</div>
            </div>
          </div>
          <div className="NewArrivel">
            <img alt="" src="http://books.google.com/books/content?id=W3eytUUwhEIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" />
            <div className="caption">
              <div>Javascriptbible</div>
              <div>FOR FREE</div>
            </div>
          </div>
          <div className="NewArrivel">
            <img alt="" src="http://books.google.com/books/content?id=W3eytUUwhEIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" />
            <div className="caption">
              <div>Javascriptbible</div>
              <div>FOR FREE</div>
            </div>
          </div>
          <div className="NewArrivel">
            <img alt="" src="http://books.google.com/books/content?id=W3eytUUwhEIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" />
            <div className="caption">
              <div>Javascriptbible</div>
              <div>FOR FREE</div>
            </div>
          </div>
          <div className="NewArrivel">
            <img alt="" src="http://books.google.com/books/content?id=W3eytUUwhEIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" />
            <div className="caption">
              <div>Javascriptbible</div>
              <div>FOR FREE</div>
            </div>
          </div>
          
        </Slider>
        
          </div>
        </div>
      </div>
      </div>
    );
  }
}