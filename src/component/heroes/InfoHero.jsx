import React from "react";
import { useContext } from "react";
import HoverContext from "../context/HoverContext";

const InfoHero = () => {
  const hoverContext = useContext(HoverContext);

  return (
    <div className="h-[650px] bg-[#0f1923] text-[#ece8e1] w-full flex overflow-hidden pt-[23px]">
      {/* Name of Heroes */}
      <div className="w-1/3 h-full pl-[65px]">
        {["lance", "hayabusa", "ling", "hanabi", "alucard", "Wanwan"].map(
          (hero, index) => (
            <div
              onClick={hoverContext.onClickHero}
              className={`flex gap-5 font-semibold ${
                index + 1 === 3 ? "text-red-500" : ""
              }`}
              key={index}
            >
              <p className="text-[20px] lineh- pointer-events-none select-none">
                {index + 1}
              </p>
              <p className="text-[110px] cursor-pointer leading-none">{hero}</p>
            </div>
          )
        )}
      </div>

      {/* Image of Heroes */}
      <div className="w-1/3 h-full flex justify-center items-center">
        <img src="/img/ling.png" alt="Hero" />
      </div>

      {/* Information of Heroes */}
      <div className="w-1/3 h-full flex justify-center items-center">
        <div className="w-fit h-fit text-xl">
          <p>// Peran</p>
          <p className="text-5xl mt-[10px]">#Nama_Hero</p>
          <p className="mt-[20px]">// Biografi</p>
          <p className="w-[300px] mt-[10px] text-lg">
            Pemburu bayaran asal Turki, Fade, melepaskan kekuatan mimpi buruk
            kejam untuk merebut rahasia musuh. Sesuai dengan teror itu sendiri,
            dia memburu target dan menyingkap ketakutan terdalam — sebelum
            menghancurkan mereka dalam kegelapan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoHero;
