import React from "react";
const FormsToogleButton = (props) => {

  return (
    
    <div
      className="flex items-center justify-center w-[full] h-[65px] border-red-500 border border-opacity-60 px-2"
      onClick={() => {
        props.onShowForm();
      }}
    >
      <button className="rounded-sm w-full h-[50px] bg-red-500 text-2xl text-[#ffffff]">
        + NEW DATA
      </button>
    </div>
  );
};

export default FormsToogleButton;
