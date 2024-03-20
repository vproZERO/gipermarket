import React from "react";
import Slider from "react-slick";
import {ArrowLeft} from '../../../assets/icon/arrow-left'
import {ArrowRight} from '../../../assets/icon/arrow-right'
import "./product-banner.css";


function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
        style={{
          position: "absolute",
          top: "-20px",
        }}
      >
        <span className="absolute text-primary -translate-x-1/2 -translate-y-1/2 - top-1/2 left-1/2">
          <ArrowRight />
        </span>
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        style={{
          position: "absolute",
  
          top: "-20px",
          left: "98%",
          zIndex: 4,
        }}
        onClick={onClick}
      >
        <span className="absolute text-primary -translate-x-1/2 -translate-y-1/2 bg- - top-1/2 left-1/2">
          <ArrowLeft />
        </span>
      </div>
    );
  }


const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    // autoplay: true,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

const ProductBanner = ({children}) => {
  return <div className="relative">
    <Slider {...settings}>{children}</Slider>
  </div>;
};

export default ProductBanner;
