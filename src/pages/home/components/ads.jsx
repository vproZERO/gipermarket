import React from "react";
import Skeleton from "react-loading-skeleton";
import Slider from "react-slick";
import useGetAds from "../service/query/useGetAds";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "-100px" }}
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
        left: "-100px",
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

const Ads = () => {
  const { data, isLoading } = useGetAds();
  return (
    <div className="md:py-8 md:px-10 px-2 py-1">
      <h2 className="text-text font-semibold md:text-2xl text-xl md:mb-6 mb-2">Акции</h2>
      <div>
        {isLoading ? (
          <Skeleton count={1} height={530} />
        ) : (
          <Slider {...settings}>
            {data?.map((item) => (
              <div key={item.id} className="">
                <img src={item.img} alt="img" />
              </div>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default Ads;
