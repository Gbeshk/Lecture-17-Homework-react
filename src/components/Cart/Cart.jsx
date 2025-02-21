import React, { useEffect, useState } from "react";
import shoe from "../../assets/images/shoe1.png";
import trash from "../../assets/images/trash.svg";
function Cart({ added, setAdded, total }) {
  const [y, setY] = useState(0);

  useEffect(() => {
    setY(125 * total);
  }, [total]);
  
  return (
    <>
      <div className=" w-[360px] z-10 h-[256px] absolute  right-[30px] vaxo:right-[-80px] top-[65px] rounded-[10px] bg-white shadow-[0px_20px_50px_-20px_rgba(29,32,38,0.50)]">
        <p className="!mt-[24px] !ml-[24px] text-[#1D2026] font-['Kumbh_Sans'] text-[16px] font-bold leading-normal">
          Cart
        </p>
        <div className="!mt-[24px] w-[360px] h-[1px] bg-[#E4E9F2]"></div>
        {added && (
          <>
            <div className="flex !mt-[24px] !ml-[24px]">
              <img src={shoe} className="w-[50px] h-[50px]" alt="" />
              <div className="!ml-[16px]">
                <p className="text-[#69707D] font-['Kumbh_Sans'] text-[16px] font-normal leading-[26px]">
                  Fall Limited Edition Sneakers
                </p>
                <p className="text-[#69707D] font-['Kumbh_Sans'] text-[16px] font-normal leading-[26px]">
                  $125.00 x {total}{" "}
                  <span className="text-[#1D2026] font-['Kumbh_Sans'] text-[16px] font-bold leading-[26px]">
                    ${y}.00
                  </span>
                </p>
              </div>
              <img
                src={trash}
                onClick={() => {
                  setAdded(!added);
                }}
                className="!ml-[19px] cursor-pointer "
                alt=""
              />
            </div>
            <div
              onClick={() => {
                window.open("https://react-shualeduri-1.vercel.app/");
              }}
              className="text-white font-['Kumbh_Sans'] text-[16px] font-bold leading-normal
                    !mt-[26px] !ml-[24px] flex items-center
                    justify-center w-[312px] h-[56px] flex-shrink-0 rounded-[10px] bg-[#FF7E1B] cursor-pointer"
            >
              Checkout
            </div>
          </>
        )}
        {!added && (
          <p className="!mt-[77px]  text-[#69707D] text-center font-['Kumbh_Sans'] text-[16px] font-bold leading-[26px]">
            Your cart is empty.
          </p>
        )}
      </div>
    </>
  );
}
export default Cart;
