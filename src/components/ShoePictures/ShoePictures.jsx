import React, { useState } from "react";
import shoe1 from "../../assets/images/shoe1.png";
import shoe2 from "../../assets/images/shoe2.svg";
import shoe3 from "../../assets/images/shoe3.svg";
import shoe4 from "../../assets/images/shoe4.svg";

function ShoePictures() {
  const [currentPic, setCurrentPic] = useState(shoe1);
  const [selectedShoe, setSelectedShoe] = useState(shoe1);

  return (
    <>
      <div>
        <img
          src={currentPic}
          alt="Shoe"
          className="cursor-pointer w-[445px] h-[445px] object-contain rounded-[50px] !mx-auto"
        />
        <div className="flex  justify-center items-center !mt-[32px]">
          <img
            src={shoe1}
            className={`cursor-pointer w-[88px] h-[88px] object-contain rounded-[10px] hover:opacity-50 transition duration-1000 ${
              selectedShoe === shoe1
                ? "border-[2px] border-[#FF7E1B] opacity-50"
                : ""
            }`}
            alt="Shoe 1"
            onClick={() => {
              setCurrentPic(shoe1);
              setSelectedShoe(shoe1);
            }}
          />
          <img
            src={shoe2}
            className={`w-[88px] h-[88px] cursor-pointer !ml-[16px] object-contain rounded-[10px] hover:opacity-50 transition duration-1000 ${
              selectedShoe === shoe2
                ? "border-[2px] border-[#FF7E1B] opacity-50"
                : ""
            }`}
            alt="Shoe 2"
            onClick={() => {
              setCurrentPic(shoe2);
              setSelectedShoe(shoe2);
            }}
          />
          <img
            src={shoe3}
            className={`w-[88px] h-[88px] cursor-pointer object-contain rounded-[10px] hover:opacity-50 transition duration-1000 ${
              selectedShoe === shoe3
                ? "border-[2px] border-[#FF7E1B] opacity-50"
                : ""
            } !ml-[16px]`}
            alt="Shoe 3"
            onClick={() => {
              setCurrentPic(shoe3);
              setSelectedShoe(shoe3);
            }}
          />
          <img
            src={shoe4}
            className={`w-[88px] h-[88px] cursor-pointer object-contain rounded-[10px] hover:opacity-50 transition duration-1000 ${
              selectedShoe === shoe4
                ? "border-[2px] border-[#FF7E1B] opacity-50"
                : ""
            } !ml-[16px]`}
            alt="Shoe 4"
            onClick={() => {
              setCurrentPic(shoe4);
              setSelectedShoe(shoe4);
            }}
          />
        </div>
      </div>
    </>
  );
}

export default ShoePictures;
