import React from "react";
import { useDispatch } from "react-redux";
import Button from "../../../components/ui/button/button";
import { deleteItem, toggleProduct, addToFavorites } from "../../../redux/reducers/cart";
import LikedIcon from "../../../assets/icon/liked-icon";
import LikedIcon2 from "../../../assets/icon/liked-icon2";
import TrashIcon from "../../../assets/icon/trash-icon";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const CartProducts = ({ title, id, img, price, brand, color, rame, ram , userCount, userPrice }) => {
  const dispatch = useDispatch();
  const likedProduct = useSelector((state) => state.cart.likes)
  const isLiked = likedProduct.some((product) => product.id === id) 

  return (
    <div className="flex items-start gap-4 border-b-2 border-[#EDEDED] mb-9 pb-5 md:pb-6 md:mb-6 ">
      <div className="w-[90px] md:w-[200px] ">
        <img src={img} alt="img" />
      </div>
      <div className="w-full">
        <div className="md:flex block items-center justify-between w-full">
          <h2 className="max-w-[201px] text-text text-xs font-medium md:text-2xl md:max-w-[570px] mb-[12px] md:mb-0">
            {title}
          </h2>
          <p className="font-semibold text-sm text-text mb-[12px] md:mb-0 md:text-2xl">
            {userPrice} <span className="text-xs md:text-xl">сум</span>
          </p>
        </div>

        <div className="md:hidden w-full">
          <div className="flex items-center bg-[#EDEDED] p-1 w-[100px] justify-between h-[28px] mb-4">
            <Button
              onClick={() => dispatch(toggleProduct({ type: "decrement", id }))}
              className={"bg-white rounded-none h-full"}
            >
              <span className="text-[#C4C4C4] text-2xl font-medium">-</span>
            </Button>
            <p className="text-text font-normal text-base">{userCount}</p>
            <Button
              onClick={() => dispatch(toggleProduct({ type: "increment", id }))}
              className={"bg-white rounded-none h-full"}
            >
              <span className="text-[#C4C4C4] text-xl font-medium">+</span>
            </Button>
          </div>
          <span className="w-full h-[2px] block bg-[#EDEDED] mb-4"></span>
          <div className="flex items-center justify-between w-full">
            <Button
              icon={<LikedIcon />}
              variant={"outlined"}
              className={"p-0 m-0 text-[#999999] gap-[8px]"}
            >
              <span>В избранное</span>
            </Button>
            <Button
              icon={<TrashIcon />}
              variant={"outlined"}
              onClick={() => dispatch(deleteItem({ id }))}
              className={"p-0 m-0 text-[#999999] gap-[8px]"}
            >
              <span>Удалить</span>
            </Button>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-between w-full mt-12">
          <div className="flex gap-5">
            <Button
              icon={isLiked ? <LikedIcon2 /> : <LikedIcon />}
              variant={"outlined"}
              className={"p-0 m-0 text-[#999999] gap-[8px]"}
            >
              <span>В избранное</span>
            </Button>
            <Button
              icon={<TrashIcon />}
              variant={"outlined"}
              onClick={() => dispatch(deleteItem({ id }))}
              className={"p-0 m-0 text-[#999999] gap-[8px]"}
            >
              <span>Удалить</span>
            </Button>
          </div>
          <div className="flex items-center bg-[#EDEDED] p-1 gap-2 w-[130px] justify-between h-[40px] mb-4">
            <Button
              onClick={() => dispatch(toggleProduct({ type: "decrement", id }))}
              className={"bg-white rounded-none h-full w-full"}
            >
              <span className="text-[#C4C4C4] text-3xl font-medium">-</span>
            </Button>
            <p className="text-text font-normal text-2xl">{userCount}</p>
            <Button
              onClick={() => dispatch(toggleProduct({ type: "increment", id }))}
              className={"bg-white  rounded-none h-full w-full"}
            >
              <span className="text-[#C4C4C4] text-3xl font-medium">+</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProducts;
