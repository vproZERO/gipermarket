import React from "react";
import Button from "../ui/button/button";
import CartIcon from "../../assets/icon/cart-icon";

const ProductCard = ({ title, id, img, price, brand }) => {
  return (
    <div className="mx-3">
      <div className="transition hover:shadow-xl hover:-translate-y-2 rounded-xl pt-1 pl-1 pr-4 pb-[14px] relative">
        <div className="w-[165px] h-[165px] mb-[14px]">
          <img src={img} alt={title} />
        </div>
        <h3 className="text-text font-normal text-base">{brand}</h3>
        <h2 className="text-text font-normal text-base mb-6">{title}</h2>
        <div className="flex items-center justify-between">
          <p className="text-text font-semibold text-lg">{price} so`m</p>
          <Button className={'hover:text-primary'} variant={"primary"}>
            <CartIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
