import React from "react";

export const NotifyAction = props => {
  return (
    <div
      className={`w-[500px] h-[100px] bg-red-500 absolute z-10 top-64 flex items-center justify-center gap-5 p-4 rounded-sm left-96 ${
        props.showSuccessMessage ? "opacity-100" : "hidden"
      } transition-opacity duration-500`}
    >
      <div className="text-white text-4xl justify-center">
        <p>{props.text}</p>
      </div>
    </div>
  );
};
