import React from "react";
import Skeleton from "react-loading-skeleton";
import { useParams } from "react-router-dom";
import ProductCard from '../../components/cards/product-card'
import useGetSimpleCatalog from "./service/useGetSimpleCatalog";

const Catalog = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSimpleCatalog(id);
  console.log(data);
  return (
    <div className="px-1 md:px-10">
      <div className="">
        {isLoading ? (
          <div className="grid md:grid-cols-4 md:gap-11 grid-cols-2">
            <Skeleton count={4} height={323} className='mb-5' />
            <Skeleton count={4} height={323} className='mb-5' />
            <Skeleton count={4} height={323} className='mb-5' />
            <Skeleton count={4} height={323} className='mb-5' />

          </div>
        ) : (
          <div className="grid md:grid-cols-4 md:gap-11 grid-cols-2">
            {data?.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalog;
