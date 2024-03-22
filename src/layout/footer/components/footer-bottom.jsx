import React from "react";
import HumoImg from '../../../assets/img/humo.png'
import PaymeImg from '../../../assets/img/payme.png'
import UzcardImg from '../../../assets/img/uzcard.png'

const FooterBottom = () => {
  return (
    <div className="bg-[#EAEAEA] hidden md:flex items-center px-10 justify-between py-6">
      <h3 className="text-text text-smfont-normal">
        © 2022 Любое использование контента без письменного разрешения запрещено
      </h3>

      <div className="flex items-center gap-6">
        <div>
            <img src={PaymeImg} alt="img" />
        </div>
        <div>
            <img src={UzcardImg} alt="img" />
        </div>
        <div>
            <img src={HumoImg} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
