import React from "react";
import { Link } from "react-router-dom";
import FacebookLogo from "../../assets/icon/facebook-logo";
import InstagramLogo from "../../assets/icon/instagram-logo";
import OkLogo from "../../assets/icon/ok-logo";
import VkLogo from "../../assets/icon/vk-logo";
import YoutubeLogo from "../../assets/icon/youtube-logo";
import Accordion from "../../components/ui/accordion/accordion";
import FooterBottom from "./components/footer-bottom";
import Logo from "/public/logo.png";

const Footer = () => {
  return (
    <div className="">
      <div className="bg-[#F5F5F6] px-2 md:px-10 md:py-9 py-6 block md:flex">
        <div className="mb-6 md:mb-0">
          <Link
            className="flex items-center text-primary md:text-2xl text-lg gap-2 mb-4"
            to={"/"}
          >
            <div className="rounded-full overflow-hidden md:w-[70px] w-[40px]">
              <img src={Logo} alt="" />
            </div>
            <span className="font-bold">GiperMarket</span>
          </Link>
          <a
            href="+998933746644"
            target="_blank"
            className="block mb-2 text-sm text-text md:text-xl md:mb-[2px] font-semibold"
          >
            +99 893 374-66-44
          </a>
          <a
            href="+998933746644"
            target="_blank"
            className="block mb-2 md:text-sm text-xs text-text  md:mb-[12px] font-medium"
          >
            справочная служба
          </a>

          <a
            href="+998902537753"
            target="_blank"
            className="block mb-2 text-sm text-text md:text-xl md:mb-[2px] font-semibold"
          >
            +99 890 253-77-53
          </a>
          <a
            href="+998933746644"
            target="_blank"
            className="block mb-2 md:text-sm text-xs text-text  md:mb-[12px] font-medium"
          >
            интернет-магазин
          </a>
          <a
            href="+998902537753"
            target="_blank"
            className="block  text-sm text-text md:text-xl mb-[12px] font-semibold"
          >
            Оставайтесь на связи
          </a>
          <div className="flex items-center gap-4">
            <Link className="text-primary  transition  hover:-translate-y-2 bg-white">
              <FacebookLogo />
            </Link>
            <Link className="text-primary  transition  hover:-translate-y-2 bg-white">
              <OkLogo />
            </Link>
            <Link className="text-primary  transition hover:-translate-y-2  bg-white">
              <VkLogo />
            </Link>
            <Link className="text-primary  transition  hover:-translate-y-2 bg-white">
              <YoutubeLogo />
            </Link>
            <Link className="text-white  transition hover:-translate-y-2 bg-primary">
              <InstagramLogo />
            </Link>
          </div>
        </div>

        <div className="md:hidden">
          <div className="mb-4">
            <Accordion quetion={"О магазине"}>
              <Link className="text-sm font-normal text-text block mb-2 hover:text-primary transition">
                <span>Условия обмена и возврата</span>
              </Link>
              <Link className="text-sm font-normal text-text block mb-2 hover:text-primary transition">
                <span>Каталог</span>
              </Link>
              <Link className="text-sm font-normal text-text block mb-2 hover:text-primary transition">
                <span>О компании</span>
              </Link>
              <Link className="text-sm font-normal text-text block mb-2 hover:text-primary transition">
                <span>Контакты</span>
              </Link>
              <Link className="text-sm font-normal text-text block mb-2 hover:text-primary transition">
                <span>Доставка</span>
              </Link>
              <Link className="text-sm font-normal text-text block hover:text-primary transition">
                <span>Оплата</span>
              </Link>
            </Accordion>
          </div>
          <div className="mb-4">
            <Accordion quetion={"Клиентам"}>
              <Link className="text-sm font-normal text-text block mb-2 hover:text-primary transition">
                <span>Клиентам</span>
              </Link>
              <Link className="text-sm font-normal text-text block mb-2 hover:text-primary transition">
                <span>Личный кабинет</span>
              </Link>
              <Link className="text-sm font-normal text-text block mb-2 hover:text-primary transition">
                <span>Блог</span>
              </Link>
              <Link className="text-sm font-normal text-text block mb-2 hover:text-primary transition">
                <span>Обратная связь</span>
              </Link>
            </Accordion>
          </div>
          <div className="mb-4">
            <Accordion quetion={"Клиентам"}>
              <Link className="text-sm font-normal text-text block mb-2 hover:text-primary transition">
                <span>Информация</span>
              </Link>
              <Link className="text-sm font-normal text-text block mb-2 hover:text-primary transition">
                <span>Пользовательское соглашение</span>
              </Link>
              <Link className="text-sm font-normal text-text block mb-2 hover:text-primary transition">
                <span>Политика конфиденциальности и оферта</span>
              </Link>
            </Accordion>
          </div>
        </div>
      </div>
      <FooterBottom />
    </div>
  );
};

export default Footer;
