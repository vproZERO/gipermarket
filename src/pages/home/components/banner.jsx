import React from "react";
import Skeleton from "react-loading-skeleton";
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
  dots: true,
  infinite: true,
  speed: 900,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

export const Banner = () => {
  const { data, isLoading } = useGetBanners();

  return (
    <>
      {isLoading ? (
        <Skeleton variant="rounded" count={1} height={500} />
      ) : (
        <Slider {...settings}>
          {data?.map((item) => (
            <div key={item.id}>
              <img src={item.img} alt="img" />
            </div>
          ))}
        </Slider>
      )}
    </>
  );
};
