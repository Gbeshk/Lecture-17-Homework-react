import React, { useState } from "react";
import header from "../../assets/images/header.svg";
import cart from "../../assets/images/cart.svg";
import profilepic from "../../assets/images/profilepic.png";
import Cart from "../Cart/Cart";
import burger from "../../assets/images/burger.svg";
import Burger from "../Burger/Burger";
function Header({ added, setAdded, total }) {
  const [hidden, setHidden] = useState("hidden");
  const [left, setLeft] = useState("");
  const [width, setWidth] = useState("");
  const [isVisible, setIsvisible] = useState(false);
  const [active, setActive] = useState(null);
  const [burgerVisible, setBurgerVisible] = useState(false);
  return (
    <>
      <div className="flex items-center max-w-[1110px] relative w-full justify-between">
        <div className="flex gap-[16px]">
          <img
            src={burger}
            onClick={() => {
              setBurgerVisible(!burgerVisible);
            }}
            alt=""
            className="small:hidden cursor-pointer"
          />

          <Burger
            burgerVisible={burgerVisible}
            setBurgerVisible={setBurgerVisible}
          />
          <div className="flex items-center ">
            {isVisible && (
              <Cart added={added} setAdded={setAdded} total={total} />
            )}
            <div
              className={`${width} h-[4px]  bg-[#FF7E1B] absolute ${left} ${hidden} top-[82px] transition-[1s]`}
            ></div>
            <img
              src={header}
              alt=""
              onClick={() => {
                window.location.reload(false);
              }}
              className="cursor-pointer"
            />
          </div>
          <div className="hidden small:flex">
            <p
              onClick={() => {
                setHidden("sa");
                setLeft("left-[212px]");
                setWidth("w-[74px]");
                setActive("Collections");
              }}
              className={`cursor-pointer !ml-[56.5px] ${
                active === "Collections" ? "text-black" : "text-[#69707D]"
              } font-[Kumbh_Sans] text-[15px] not-italic font-normal leading-[26px]`}
            >
              Collections
            </p>
            <p
              onClick={() => {
                setHidden("sa");
                setLeft("left-[319px]");
                setWidth("w-[30px]");
                setActive("Men");
              }}
              className={`cursor-pointer !ml-[32px] ${
                active === "Men" ? "text-black" : "text-[#69707D]"
              } font-[Kumbh_Sans] text-[15px] not-italic font-normal leading-[26px]`}
            >
              Men
            </p>
            <p
              onClick={() => {
                setHidden("sa");
                setLeft("left-[382px]");
                setWidth("w-[55px]");
                setActive("Women");
              }}
              className={`cursor-pointer !ml-[32px] ${
                active === "Women" ? "text-black" : "text-[#69707D]"
              } font-[Kumbh_Sans] text-[15px] not-italic font-normal leading-[26px]`}
            >
              Women
            </p>
            <p
              onClick={() => {
                setHidden("sa");
                setLeft("left-[469px]");
                setWidth("w-[44px]");
                setActive("About");
              }}
              className={`cursor-pointer !ml-[32px] ${
                active === "About" ? "text-black" : "text-[#69707D]"
              } font-[Kumbh_Sans] text-[15px] not-italic font-normal leading-[26px]`}
            >
              About
            </p>
            <p
              onClick={() => {
                setHidden("sa");
                setLeft("left-[545px]");
                setWidth("w-[55px]");
                setActive("Contact");
              }}
              className={`cursor-pointer !ml-[32px] ${
                active === "Contact" ? "text-black" : "text-[#69707D]"
              } font-[Kumbh_Sans] text-[15px] not-italic font-normal leading-[26px]`}
            >
              Contact
            </p>
          </div>
        </div>
        <div className="flex items-center relative">
          {added && (
            <div className="flex items-center justify-center text-white font-[Kumbh_Sans] text-[10px] font-bold leading-normal absolute !left-[10px] top-[10px] w-[19px] h-[13px] rounded-[6.5px] bg-[#FF7E1B]">
              {total}
            </div>
          )}

          <img
            src={cart}
            alt=""
            onClick={() => {
              setIsvisible(!isVisible);
            }}
            className="cursor-pointer"
          />
          <img
            className="w-[24px] h-[24px] smaller:w-[50px] smaller:h-[50px] smaller:!ml-[46px] !ml-[23px] cursor-pointer"
            src={profilepic}
            alt=""
            onClick={() => {
              setIsvisible(!isVisible);
            }}
          />
        </div>
      </div>
      <div className="max-w-[1100px] small:inline hidden w-full !mt-[34px] h-[1px] flex-shrink-0 bg-[#E4E9F2]"></div>
    </>
  );
}

export default Header;
