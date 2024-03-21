import React from "react";
import Ads from "./components/ads";
import { Banner } from "./components/banner";
import CatalogBanner from "./components/catalog-banner";
import ProductBanner from "../../components/ui/product-banner/product-banner";
import useGetPhones from "./service/query/useGetPhones";
import ProductCard from "../../components/cards/product-card";
import Skeleton from "react-loading-skeleton";

const Home = () => {
  const { data, isLoading } = useGetPhones("phones");
  const {data:data2, isLoading:isLoading2} = useGetPhones("notebook");
  return (
    <div>
      <Banner />
      <CatalogBanner />
      <section className="md:px-10 md:py-[48px] px-2 pt-6">
        <h2 className="font-semibold text-xl text-text hover:text-primary active:text-primary">Смартфоны и планшеты</h2>
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
      <section className="md:px-10 md:py-[48px] px-2 pt-6">
        <h2 className="font-semibold text-xl text-text hover:text-primary active:text-primary">Смартфоны и планшеты</h2>
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
        <h2 className="font-semibold text-xl text-text hover:text-primary active:text-primary">Ноутбуки, планшеты <br /> и компьютеры</h2>
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
    </div>
  );
};

export default Home;
