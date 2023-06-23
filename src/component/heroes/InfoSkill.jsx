import React from "react";
import { useContext } from "react";
import HoverContext from "../context/HoverContext";

const InfoSkill = () => {
  let hoverContext = useContext(HoverContext);
  return (
    <>
      {hoverContext.isHeroExpanded ? (
        <div className="h-[830px] bg-[#ece8e1] text-[#0f1923] pt-[225px] pl-[100px]">
          <div className="w-[1px] h-[830px] bg-[#0f1923] bg-opacity-40 z-10 absolute mt-[-225px]"></div>
          <div className="h-[1px] w-[830px] bg-[#0f1923] bg-opacity-40 absolute mt-[142px]"></div>
          <div className="w-[660px] h-[370px] bg-red-500 absolute z-10 right-20 mt-[-50px]">
            <video src="/video/gamplay.mp4" autoPlay controls />
            <div className="flex justify-end">
              <div className="w-[620px] h-[25px] bg-neutral-400"></div>
            </div>
          </div>
          <div className="w-full h-[595px] text-xl text-[#0f1923]">
            <div className="w-full h-fit text-6xl font-semibold">
              <p>Kemampuan Khusus</p>
            </div>
            <div className="pl-[85px] z-10 absolute">
              <div className="w-full h-fit my-[60px] flex gap-5 ">
                {[...Array(4)].map((_, index) => (
                  <>
                    <img
                      key={index}
                      className="w-[72px] h-[72px]"
                      src="https://via.placeholder.com/300"
                      alt="Dummy Image"
                    />
                  </>
                ))}
              </div>
              <p className="mt-[20px] ">// Name of Ability</p>
              <p className="w-[230px] mt-[10px] text-lg opacity-90">
                Pemburu bayaran asal Turki, Fade, melepaskan kekuatan mimpi
                buruk kejam untuk merebut rahasia musuh. Sesuai dengan teror itu
                sendiri, dia memburu target dan menyingkap ketakutan terdalam —
                sebelum menghancurkan mereka dalam kegelapan.
              </p>
            </div>
          </div>
        </div>
      ) : (
        ``
      )}
    </>
  );
};

export default InfoSkill;
