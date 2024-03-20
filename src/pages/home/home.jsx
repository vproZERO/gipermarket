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
  return (
    <div>
      <Banner />
      <CatalogBanner />
      <section className="px-10 py-[48px]">
        <h2>phones</h2>
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
    </div>
  );
};

export default Home;
