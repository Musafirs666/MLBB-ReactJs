import React from "react";

const HeaderForm = (props) => {
  return (
    <div className="w-full h-fit text-4xl flex">
      <p className="w-1/2"> ADD New HERO </p>
      <span className="w-1/2 flex justify-end" onClick={props.unShowForm}>
        <img
          className="bg-[#0f1923] border-2 border-[#0f1923] p-1 rounded-sm cursor-pointer"
          src="/img/close.png"
        />
      </span>
    </div>
  );
};

export default HeaderForm;
