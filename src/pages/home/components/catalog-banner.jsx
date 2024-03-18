import React from "react";
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
  const { data } = useGetCatalog();
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="px-10 py-8">
      <Slider className="gap-2" {...settings}>
        {data?.map((item) => (
          <div key={item.id}>
            <div className="flex items-center mx-3 gap-4 bg-[#f5f5f5] py-[14px] px-4">
              <div className="w-24 h-24">
                <img src={item.img} alt="img" />
              </div>
              <p className="max-w-24 font-medium text-text text-center text-base">{item.text}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CatalogBanner;
