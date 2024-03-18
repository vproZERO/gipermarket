import React from "react";
import Slider from "react-slick";
import { useGetBanners } from "../service/query/useGetBanners";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "40px" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        left: "40px",
        zIndex: "49",
      }}
      onClick={onClick}
    />
  );
}

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

export const Banner = () => {
  const { data, isLoading } = useGetBanners();

  return (
    <Slider {...settings}>
      {data?.map((item) => (
        <div key={item.id}>
          <img src={item.img} alt="img" />
        </div>
      ))}
    </Slider>
  );
};
