import React from "react";
import useModal from "../../hooks/useModal";
import Modal from "../../components/ui/modal/modal";
import Button from "../../components/ui/button/button";
import ModalMenu from "../../assets/icon/ModalMenu";
import { Link } from "react-router-dom";
import { useGetCatalog } from "./service/query/useGetCatalog";
import Skeleton from "react-loading-skeleton";
import Logo from '/public/vite.svg'
import Search from "./components/search";

const Header = () => {
  const { close, isOpen, open } = useModal();
  const { data, isLoading } = useGetCatalog();
  return (
    <div>
      <div className="px-10 py-2  flex items-center justify-end gap-6">
        <Link to={"/delivery"} className="text-text text-base font-normal">
        Доставка и оплата
        </Link>
        <Link to={"/delivery"} className="text-text text-base font-normal">
        Пункты выдачи
        </Link>
        <Link to={"/delivery"} className="text-text text-base font-normal">
        Поддержка
        </Link>
        <Link to={"/delivery"} className="text-text text-base font-normal">
        +998 90 253 77 53
        </Link>
      </div>
      <div className="flex items-center relative justify-between py-4 px-10">
        <Modal close={close} isOpen={isOpen}>
          {isLoading ? (
            <Skeleton count={6} height={40} />
          ) : (
            <div className="grid grid-cols-3 gap-[92px]">
              {data?.map((item) => (
                <Link
                  className="flex items-center justify-center text-text hover:text-red1 gap-4 bg-[#F6F6F6] px-4 py-[14px]"
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
        <Link to={'/'}>
                <img src={Logo} alt="logo" />
        </Link>
        <Button variant="primary" onClick={open}>
          <ModalMenu />
          <p className="text-text text-xl font-normal"> Каталог</p>
        </Button>

        <Search/>
      </div>
    </div>
  );
};

export default Header;
