import React from "react";
import Slider from "react-slick";
import useGetAds from "../service/query/useGetAds";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "0px" }}
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
        left: "0px",
        zIndex: "49",
      }}
      onClick={onClick}
    />
  );
}

const Ads = () => {
  const { data } = useGetAds();
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="py-8 px-10 bg-yellow1">
      <h2 className="text-text font-semibold text-2xl mb-6">Акции</h2>
      <Slider {...settings}>
        {data?.map((item) => (
          <div key={item.id}>
            <div className="ml-6">
              <img className="w-[430px] h-[240px]" src={item.img} alt="img" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Ads;
