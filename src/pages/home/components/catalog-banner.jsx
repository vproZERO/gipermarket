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
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          nextArrow: null,
          prevArrow: null
        }
      }
    ]
  };
  return (
    <div className="md:px-10 md:py-8 px-2 py-7">
      {isLoading ? (
        <div className="grid md:grid-cols-6 grid-cols-3 md:gap-3 ">
          <Skeleton count={1} width={213} height={128} />
          <Skeleton count={1} width={213} height={128} />
          <Skeleton count={1} width={213} height={128} />
          <Skeleton count={1} width={213} height={128} />
          <Skeleton count={1} width={213} height={128} />
          <Skeleton count={1} width={213} height={128} />
        </div>
      ) : (
        <>
        <div className="hidden lg:block">
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
        </div>
        <div className="block lg:hidden">
          <Slider {...settings}>
            {data?.map((item) => (
              <Link key={item.id} to={`/catalog/${item.name}`} >
                <div className='bg-[#F6F6F6] flex items-center gap-1 p-1 text-text hover:text-primary  mx-2'>
                    <div className="w-[56px] h-[56px]">
                      <img src={item.img} alt="img" />
                    </div>
                    <span className="max-w-[72px] text-xs font-semibold">{item.text}</span>
                </div>
              </Link>
            ))}
            </Slider>
        </div>
        </>
      )}
    </div>
  );
};

export default CatalogBanner;
