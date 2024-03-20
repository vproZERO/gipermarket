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
    <div className="py-8 px-10 ">
      <h2 className="text-text font-semibold text-2xl mb-6">Акции</h2>
      <div>
        {isLoading ? (
          <Skeleton count={1} height={530} />
        ) : (
          <Slider {...settings}>
            {data?.map((item) => (
              <div key={item.id} className="h-[530px] ">
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
