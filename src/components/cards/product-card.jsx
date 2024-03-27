import React from "react";
import Button from "../ui/button/button";
import CartIcon from "../../assets/icon/cart-icon";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { add, addToFavorites } from "../../redux/reducers/cart";
import { toast } from "react-toastify";
import { useMediaQuery } from "react-responsive";
import LikedIcon from "../../assets/icon/liked-icon";


const ProductCard = ({ title, id, img, price, brand, color, rame, ram }) => {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  const dispatch = useDispatch();
  const handleAddToFavorites = () => {
    dispatch(addToFavorites({title, id, img, price, brand, color, rame, ram}));
    toast.success("Товар добавлен в избранное");
}

  const addStore = () => {
    dispatch(add({ id, title, img, price, brand, color, rame, ram }));
    if (isDesktop) {
      toast.success("Товар добавлен в корзину", {
        position: "top-right",
      });
    } else {
      toast.success("Товар добавлен в корзину", {
        position: "bottom-right",
      });
    }
  };
  return (
    <div>
      <div className="transition  flex flex-col md:h-[380px] mb-5 justify-between  pt-1 px-4 pb-[14px] relative">
        <div>
          <Link to={`/product/${title}`}>
            <div className="md:w-[165px] md:h-[165px] md:mb-[14px] w-[90px] h-[80px] mb-1">
              <img src={img} alt={title} />
            </div>
            <h2 className="text-text font-normal md:text-base text-sm ">
              {title}
            </h2>
          </Link>
          <h3 className="text-text font-normal md:text-base text-sm">
            <strong>Brand:</strong> {brand}{" "}
          </h3>
          <h3 className="text-text font-normal md:text-base text-sm md:mb-6 mb-3">
            {color ? color : ""} {rame ? rame : ""} {ram ? ram : ""}
          </h3>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-text font-semibold md:text-lg text-sm">
            {price} so`m
          </p>
          <Button
            onClick={addStore}
            className={"hover:text-primary"}
            variant={"primary"}
          >
            <CartIcon />
          </Button>
        </div>
        <Button onClick={handleAddToFavorites} className={`absolute top-0 right-3`} variant={'outline'}>
          <LikedIcon/>
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
