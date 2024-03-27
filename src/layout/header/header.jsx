import React from "react";
import useModal from "../../hooks/useModal";
import Modal from "../../components/ui/modal/modal";
import Button from "../../components/ui/button/button";
import ModalMenu from "../../assets/icon/ModalMenu";
import { Link } from "react-router-dom";
import { useGetCatalog } from "./service/query/useGetCatalog";
import Skeleton from "react-loading-skeleton";
import Logo from "/public/logo.png";
import Search from "./components/search";
import ProfileIcon from "../../assets/icon/profile-icon";
import HearthIcon from "../../assets/icon/hearth-icon";
import CartIcon from "../../assets/icon/cart-icon";
import { useSelector } from "react-redux";

const Header = () => {
  const { count , liked} = useSelector((state) => state.cart);
  const { close, isOpen, open } = useModal();
  const { data, isLoading } = useGetCatalog();
  return (
    <div>
      <div className="hidden lg:block">
        <div className="px-10 py-2 bg-subtext flex items-center justify-end gap-6">
          <Link
            to={"/delivery"}
            className="text-text text-base font-normal hover:text-primary"
          >
            Доставка и оплата
          </Link>
          <Link
            to={"/delivery"}
            className="text-text text-base font-normal hover:text-primary"
          >
            Пункты выдачи
          </Link>
          <Link
            to={"/delivery"}
            className="text-text text-base font-normal hover:text-primary"
          >
            Поддержка
          </Link>
          <a
            href="tel:+998902537753"
            target={"_blank"}
            className="text-text text-base font-normal hover:text-primary"
          >
            +998 90 253 77 53
          </a>
        </div>
        <div className="flex items-center relative justify-between gap-8 py-4 px-10">
          <Modal close={close} isOpen={isOpen}>
            {isLoading ? (
              <Skeleton count={6} height={40} />
            ) : (
              <div className="grid md:grid-cols-3 grid-cols-2 md:gap-[92px] gap-5">
                {data?.map((item) => (
                  <Link
                    className="lg:flex items-center justify-center text-text hover:text-red1 gap-4 bg-[#F6F6F6] md:px-4 md:py-[14px] py-3 px-4"
                    to={`/catalog/${item.name}`}
                    key={item.id}
                  >
                    <div className="w-24">
                      <img src={item.img} alt="" />
                    </div>
                    <span className="max-w-24 font-medium text-base ">
                      {item.text}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </Modal>
          <Link to={"/"} className="gap-2 flex items-center">
            <div className="w-[50px]">
              <img src={Logo} alt="logo" />
            </div>
            <h3 className="font-bold text-primary text-2xl">Gipermarket</h3>
          </Link>
          <Button variant="primary" onClick={open}>
            <ModalMenu />
            <p className="text-primary text-lg font-semibold"> Каталог</p>
          </Button>

          <Search />

          <Link
            to={"/profile"}
            className="text-text hover:text-primary flex flex-col gap-1 items-center "
          >
            <ProfileIcon />
            <h3 className="font-normal text-base ">Профиль</h3>
          </Link>
          <Link
            to={"/like"}
            className="text-text hover:text-primary flex flex-col gap-1 items-center "
          >
            <HearthIcon />
            <h3 className="font-normal text-base ">Избранное</h3>
          </Link>
          <Link
            to={"/cart"}
            className="text-text hover:text-primary flex flex-col relative gap-1 items-center "
          >
            <CartIcon />
            <h3 className="font-normal text-base ">Корзина</h3>
            <span className="absolute bg-primary rounded-full text-white font-bold text-xs px-[5px] right-[10px] top-[-5px]">
              {count}
            </span>
          </Link>
        </div>
      </div>
      <div className="lg:hidden mb-4 py-4">
        <div className="flex items-center justify-between  px-4 py-2 mb-2">
          <Link to={"/profile"} className="text-text  hover:text-primary">
            <ProfileIcon />
          </Link>
          <Link className="flex items-center" to={"/"}>
            <div className="w-[40px]">
              <img src={Logo} alt="logo" />
            </div>
            <h3 className="text-primary font-semibold text-2xl">Gipermarket</h3>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              className="text-text hover:text-primary relative"
              to={"/like"}
            >
              <HearthIcon />
              <span className="absolute bg-primary rounded-full text-white font-semibold text-xs px-[5px] right-[-10px] top-[-5px]">
                {liked}
              </span>
            </Link>
            <Link
              className="text-text hover:text-primary relative"
              to={"/cart"}
            >
              <CartIcon />
              <span className="absolute bg-primary rounded-full text-white font-semibold text-xs px-[5px] right-[-10px] top-[-5px]">
                {count}
              </span>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-between gap-2 px-2">
          <Button variant={"primary"} onClick={open} className={"p-4"}>
            <ModalMenu />
          </Button>
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Header;
