import React from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { useGetCatalog } from "../../../layout/header/service/query/useGetCatalog";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "10px" }}
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
        left: "10px",
        zIndex: "49",
      }}
      onClick={onClick}
    />
  );
}

const CatalogBanner = () => {
  const { data, isLoading } = useGetCatalog();
  const settings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 5.5,
    slidesToScroll: 2,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="px-10 py-8">
      {isLoading ? (
        <div className="grid grid-cols-6 gap-3 ">
          <Skeleton count={1} width={213} height={128}/>
          <Skeleton count={1} width={213} height={128}/>
          <Skeleton count={1} width={213} height={128}/>
          <Skeleton count={1} width={213} height={128}/>
          <Skeleton count={1} width={213} height={128}/>
          <Skeleton count={1} width={213} height={128}/>
        </div>
      ) : (
        <Slider className="gap-2" {...settings}>
          {data?.map((item) => (
            <Link to={`/catalog/${item.name}`} key={item.id}>
              <div className="flex hover:text-primary text-text items-center mx-3 gap-4 bg-[#f5f5f5] py-[14px] px-4">
                <div className="w-24 h-24">
                  <img src={item.img} alt="img" />
                </div>
                <p className="max-w-24 font-medium  text-center text-base">
                  {item.text}
                </p>
              </div>
            </Link>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default CatalogBanner;
