import React from "react";

const HeadTableData = (props) => {
  return (
    <thead className="border-2 bg-red-500 border-[#0f1923] text-[#0f1923] text-xl">
      <tr>
        {["no.", "hero", "roles", "biography", "img", "skill", "option"].map(
          (data, index) => {
            return (
              <th key={index} className="py-2 px-4 border-x-2 border-[#0f1923]">
                {data}
              </th>
            );
          }
        )}
      </tr>
    </thead>
  );
};

export default HeadTableData;
