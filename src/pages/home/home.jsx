import React from "react";
import Ads from "./components/ads";
import { Banner } from "./components/banner";
import CatalogBanner from "./components/catalog-banner";
import ProductBanner from "../../components/ui/product-banner/product-banner";
import useGetPhones from "./service/query/useGetPhones";
import ProductCard from "../../components/cards/product-card";
import Skeleton from "react-loading-skeleton";
import Slider from "react-slick";
import "./home.css";
import useGetBrand from "./service/query/useGetBrand.js";
import { Link } from "react-router-dom";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        className: "center",
        centerMode: true,
        centerPadding: "60px",
        slidesToShow: 1,
      },
    },
  ],
};

const brandsettings = {
  infinite: true,
  speed: 1000,
  slidesToShow: 7,
  slidesToScroll: 2,
};

const Home = () => {
  const { data, isLoading } = useGetPhones("phones");
  const { data: data2, isLoading: isLoading2 } = useGetPhones("notebook");
  const { data: brand, isLoading: isLoadingBrand } = useGetBrand();
  return (
    <div>
      <Banner />
      <section id="catalog">
        <CatalogBanner />
      </section>
      <section className="md:px-10 md:py-[48px] px-2 pt-6">
        <h2 className="font-semibold text-xl text-text hover:text-primary active:text-primary">
          Смартфоны и планшеты
        </h2>
        {isLoading ? (
          <div className="grid grid-cols-5 gap-3">
            <Skeleton count={1} height={300} />
            <Skeleton count={1} height={300} />
            <Skeleton count={1} height={300} />
            <Skeleton count={1} height={300} />
            <Skeleton count={1} height={300} />
          </div>
        ) : (
          <ProductBanner>
            {data?.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </ProductBanner>
        )}
      </section>
      <Ads />
      <section className="px-2 md:px-10 py-4 md:py-6 ">
        <Slider {...settings}>
          <div>
            <h1 className="text-[#828282] text-sm font-medium mb-[14px] md:text-text md:text-2xl md:font-normal md:mb-10 md:border-b-2 md:border-[#EDEDED] md:pb-[14px]">
              Ноутбуки и компьютеры
            </h1>
            {data2?.slice(0, 3).map((item) => (
              <div key={item.id} className="max-h-[400px]">
                <ProductCard {...item} />
              </div>
            ))}
          </div>
          <div>
            <h1 className="text-[#828282] text-sm font-medium mb-[14px] md:text-text md:text-2xl md:font-normal md:mb-10 md:border-b-2 md:border-[#EDEDED] md:pb-[14px]">
              Смартфоны и планшеты
            </h1>
            {data?.slice(0, 3).map((item) => (
              <div key={item.id} className="flex flex-col justify-between">
                <ProductCard {...item} />
              </div>
            ))}
          </div>
          <div>
            <h1 className="text-[#828282] text-sm font-medium mb-[14px] md:text-text md:text-2xl md:font-normal md:mb-10 md:border-b-2 md:border-[#EDEDED] md:pb-[14px]">
              Ноутбуки и компьютеры
            </h1>
            {data2?.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="flex items-center p-1 gap-1 mb-[12px] md:px-1 md:py-2 md:gap-4 md:mb-6"
              >
                <ProductCard {...item}/>
              </div>
            ))}
          </div>

          <div>
            <h1 className="text-[#828282] text-sm font-medium mb-[14px] md:text-text md:text-2xl md:font-normal md:mb-10 md:border-b-2 md:border-[#EDEDED] md:pb-[14px]">
              Смартфоны и планшеты
            </h1>
            {data?.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="flex items-center p-1 gap-1 mb-[12px] md:px-1 md:py-2 md:gap-4 md:mb-6"
              >
                <ProductCard {...item}/>
              </div>
            ))}
          </div>
        </Slider>
      </section>
      <section className="md:px-10 md:py-[48px] px-2 pt-6">
        <h2 className="font-semibold text-xl text-text hover:text-primary active:text-primary">
          Смартфоны и планшеты
        </h2>
        {isLoading ? (
          <div className="grid grid-cols-5 gap-3">
            <Skeleton count={1} height={300} />
            <Skeleton count={1} height={300} />
            <Skeleton count={1} height={300} />
            <Skeleton count={1} height={300} />
            <Skeleton count={1} height={300} />
          </div>
        ) : (
          <ProductBanner>
            {data?.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </ProductBanner>
        )}
      </section>
      <section className="md:px-10 md:py-[48px] px-2 pt-6">
        <h2 className="font-semibold text-xl text-text hover:text-primary active:text-primary">
          Ноутбуки и компьютеры
        </h2>
        {isLoading ? (
          <div className="grid grid-cols-5 gap-3">
            <Skeleton count={1} height={300} />
            <Skeleton count={1} height={300} />
            <Skeleton count={1} height={300} />
            <Skeleton count={1} height={300} />
            <Skeleton count={1} height={300} />
          </div>
        ) : (
          <ProductBanner>
            {data2?.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </ProductBanner>
        )}
      </section>

      <section className="px-2 md:px-10 py-4">
        <div>
          <h2>Популярные бренды</h2>
          <Slider {...brandsettings}>
            {brand?.map((item) => (
              <Link
                to={`/catalog/${item.brand}`}
                className="bg-content py-1 px-3 w-[181px] h-[90px]"
                key={item.id}
              >
                <div className="">
                  <img
                    className="object-fill w-[100px] h-[80px]"
                    src={item.img}
                    alt="img"
                  />
                </div>
              </Link>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default Home;
