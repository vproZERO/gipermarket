import React from "react";
import Skeleton from "react-loading-skeleton";
import { useParams } from "react-router-dom";
import SimpleCatalogCard from "../../components/cards/simple-catalog-card";
import useGetSimpleCatalog from "./service/useGetSimpleCatalog";

const Catalog = () => {
  const { catalog } = useParams();
  const { data, isLoading } = useGetSimpleCatalog(catalog);
  console.log(data);
  return (
    <div className="">
      <div className="">
        {isLoading ? (
          <div className="grid grid-cols-4 gap-11">
            <Skeleton count={4} height={323} className='mb-5' />
            <Skeleton count={4} height={323} className='mb-5' />
            <Skeleton count={4} height={323} className='mb-5' />
            <Skeleton count={4} height={323} className='mb-5' />

          </div>
        ) : (
          <div className="grid grid-cols-4 gap-11">
            {data?.map((item) => (
              <SimpleCatalogCard key={item.id} {...item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalog;
