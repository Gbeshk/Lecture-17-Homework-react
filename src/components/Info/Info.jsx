import React, { useReducer, useState } from "react";
import plus from "../../assets/images/+.svg";
import minus from "../../assets/images/-.png";
import cart from "../../assets/images/cart2.svg";
const initialValue = {
  count: 0,
};
function Reducer(state, action) {
  switch (action.type) {
    case "INCREAMENT":
      return {
        count: state.count + 1,
      };
    case "DECREAMENT":
      if (state.count != 0) {
        return {
          count: state.count - 1,
        };
      } else {
        return {
          count: state.count,
        };
      }
    default:
      break;
  }
}
function Info({ added, setAdded, total, setTotal }) {
  const [state, dispatch] = useReducer(Reducer, initialValue);
  setTotal(state.count);

  return (
    <>
      <div>
        <p className="text-[#FF7E1B] font-[Kumbh_Sans] text-[13px] font-bold leading-normal tracking-[2px] uppercase">
          Sneaker Company
        </p>
        <p className="text-[#1D2026] !mt-[27px] font-[Kumbh_Sans] smaller:text-[44px] text-[28px]  font-bold leading-[48px] smaller:max-w-[445px] smaller:w-full max-w-[327px] w-full">
          Fall Limited Edition Sneakers
        </p>
        <p className=" smaller:!mt-[32px] !mt-[15px] max-w-[445px] w-full text-[#69707D] font-[Kumbh_Sans] text-[16px] font-normal leading-[26px]">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="flex smaller:inline justify-between">
          <div className="flex items-center !mt-[28px]">
            <p className="text-[#1D2026] font-[Kumbh_Sans] text-[28px] font-bold leading-normal">
              $125.00
            </p>
            <div className=" !ml-[16px] text-[#FF7E1B] flex items-center justify-center font-[Kumbh_Sans] text-[16px] font-bold leading-normal w-[51px] h-[27px] flex-shrink-0 rounded-[6px] bg-[#FFEEE2]">
              50%
            </div>
          </div>
          <p className=" !mt-[36px] smaller:!mt-[10px] text-[#B6BCC8] font-[Kumbh_Sans] text-[16px] font-bold leading-[26px] line-through">
            $250.00
          </p>
        </div>
        <div className="smaller:flex gap-[16px] !mt-[32px]">
          <div className="flex smaller:w-[157px] max-w-[500px] w-full h-[56px] flex-shrink-0 rounded-[10px] bg-[#F6F8FD] items-center justify-around">
            <img
              src={plus}
              onClick={() => {
                dispatch({ type: "INCREAMENT" });
              }}
              alt=""
            />

            <p className="text-[#1D2026] text-center font-[Kumbh_Sans] text-[16px] font-bold leading-normal">
              {state.count}
            </p>
            <img
              src={minus}
              onClick={() => {
                dispatch({ type: "DECREAMENT" });
              }}
              alt=""
            />
          </div>
          <div
            onClick={() => {
              if (state.count != 0) {
                setAdded(true);
              }
            }}
            className="flex smaller:!mt-0 !mt-[20px] gap-[16px] max-w-[500px] flex-wrap items-center cursor-pointer justify-center smaller:max-w-[272px] w-full h-[56px] rounded-[10px] bg-[#FF7E1B] shadow-[0px_20px_50px_-20px_#FF7E1B] hover:bg-[#FFAB6A] transition-colors duration-1000"
          >
            <img src={cart} alt="" />
            <p className="text-white  font-[Kumbh_Sans] text-[16px] font-bold leading-normal">
              Add to cart
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Info;
