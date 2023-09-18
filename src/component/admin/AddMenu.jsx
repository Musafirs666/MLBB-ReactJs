import React from "react";

const AddMenu = () => {
  return (
    <div className="w-1/3 h-full bg-[#0f1923]  border-2 border-r-0 border-white p-16">
      <div className="flex items-center justify-center w-[full] h-[65px] border-white border border-opacity-60 px-2">
        <button className="rounded-sm w-full h-[50px] bg-red-500 text-2xl text-[#ffffff]">
          + NEW Hero
        </button>
      </div>
      {/* <div className="flex items-center justify-center w-[full] h-[65px] border-white border border-opacity-60 px-2 my-5">
        <button className="rounded-sm w-full h-[50px] bg-[#0f1923] text-2xl text-red-50 border border-red-500">
          + NEW Emblem
        </button>
      </div> */}
      <img src="/img/redLogo.png" className="mt-5" />
    </div>
  );
};

export default AddMenu;
