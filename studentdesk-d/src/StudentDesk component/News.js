import React from "react";
import { Container } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function News() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className="news-ttl">
      <h3>Studentdesk in the news</h3>
      <div className="news-line"></div>

      <Container>
        <Slider {...settings}>
          <div>
            <img src="http://www.studentdesk.in/img/home/knowstartup_160.png" />
          </div>
          <div>
            <img src="http://www.studentdesk.in/img/home/sakaltimes_160.png" />
          </div>
          <div>
            <img src="http://www.studentdesk.in/img/home/techstory_160.png" />
          </div>
          <div>
            <img src="http://www.studentdesk.in/img/home/indiaspark_160.png" />
          </div>
          <div>
            <img src="http://www.studentdesk.in/img/home/nbw_160.png" />
          </div>
        
        </Slider>
      </Container>
    </div>
  );
}
