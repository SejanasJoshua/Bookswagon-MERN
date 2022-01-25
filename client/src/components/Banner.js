import { Carousel } from "react-bootstrap";
import { Carousel1, Carousel2, Carousel3, Carousel4 } from "../assets/index";

import React from "react";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={Carousel1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Carousel2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Carousel3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Carousel4} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
