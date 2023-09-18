import React from "react";

const SubmitFormButton = () => {
  return (
    <div className="flex items-center justify-center w-[205px] h-[60px] border-red-500 border border-opacity-60 mb-4">
      <button className="rounded-sm w-[190px] h-[45px] bg-red-500 text-xl text-[#ffffff]">
        {editMode ? "Update" : "Create"}
      </button>
    </div>
  );
};

export default SubmitFormButton;
