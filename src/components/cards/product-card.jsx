import React from "react";
import Button from "../ui/button/button";
import CartIcon from "../../assets/icon/cart-icon";

const ProductCard = ({ title, id, img, price, brand , color , rame , ram}) => {
  return (
    <div className="mt-3 md:mt-6">
      <div className="transition hover:shadow-xl hover:-translate-y-2 rounded-xl pt-1 px-4 pb-[14px] relative">
        <div className="md:w-[165px] md:h-[165px] md:mb-[14px] w-[90px] h-[80px] mb-1">
          <img src={img} alt={title} />
        </div>
        <h2 className="text-text font-normal md:text-base text-sm ">{title}</h2>
        <h3 className="text-text font-normal md:text-base text-sm"><strong>Brand:</strong> {brand} </h3>
        <h3 className="text-text font-normal md:text-base text-sm md:mb-6 mb-3">{color} {rame ? rame : ram}</h3>
        <div className="flex items-center justify-between">
          <p className="text-text font-semibold md:text-lg text-sm">{price} so`m</p>
          <Button className={'hover:text-primary'} variant={"primary"}>
            <CartIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
