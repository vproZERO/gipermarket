import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import CartProducts from "./components/cart-products";
import useGetCartCatalog from "./service/useGetCartCatalog";

const Cart = () => {
  const { products } = useSelector((state) => state.cart);
  const { data: data2 } = useGetCartCatalog();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="bg-gray2 py-3 px-2 md:px-10">
        {/* <Slider {...settings}>
          {data2.map((item) => (
            <Link key={item.id} to={`/catalog/${item.name}`} className="block px-2 text-xs text-text hover:text-primary md:text-base">
              <h2>{item.text}</h2>
            </Link>
          ))}
        </Slider> */}
      </div>
      <h2 className="text-text font-semibold text-base mb-4 md:mb-6 md:font-medium md:text-2xl px-2 md:px-10">
        Cart
      </h2>
      <div className="md:px-10 px-2 md:flex items-start justify-between">
        <div className="grow">
          {products?.map((item) => (
            <CartProducts key={item.id} {...item} />
          ))}
        </div>
        <div className="p-10">zakaz</div>
      </div>
    </div>
  );
};

export default Cart;
