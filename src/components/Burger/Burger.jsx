import React from "react";
import ex from "../../assets/images/x.svg";
function Burger({ burgerVisible, setBurgerVisible }) {
  return (
    <>
      <div
        className={`h-[100vh] overflow-hidden bg-white absolute z-10 top-0  left-0 transition-all duration-1000 ${
          burgerVisible
            ? "max-w-[250px] w-full opacity-100"
            : "max-w-0 opacity-0"
        }`}
      >
        <img
          src={ex}
          className="!mt-[24px] !ml-[24px] cursor-pointer"
          onClick={() => {
            setBurgerVisible(false);
          }}
          alt=""
        />
        <div className="flex flex-col gap-[20px] !ml-[25px] !mt-[53px]">
          <p className="text-[#1D2026] font-[Kumbh_Sans] cursor-pointer text-[18px] font-bold leading-[26px]">
            Collections
          </p>
          <p className="text-[#1D2026] font-[Kumbh_Sans] cursor-pointer text-[18px] font-bold leading-[26px]">
            Men
          </p>
          <p className="text-[#1D2026] font-[Kumbh_Sans] cursor-pointer text-[18px] font-bold leading-[26px]">
            Women
          </p>
          <p className="text-[#1D2026] font-[Kumbh_Sans] cursor-pointer text-[18px] font-bold leading-[26px]">
            About
          </p>
          <p className="text-[#1D2026] font-[Kumbh_Sans] cursor-pointer text-[18px] font-bold leading-[26px]">
            Contact
          </p>
        </div>
      </div>
    </>
  );
}
export default Burger;
