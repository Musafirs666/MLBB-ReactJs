import { getDownloadURL, ref } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { storage } from "../../firebase-config";

const ItemsBattleTable = props => {
  const { allItems } = props;
  const [itemUrls, setItemUrls] = useState([]);

  useEffect(() => {
    if (Array.isArray(allItems)) {
      // Check if allItems is an array
      // Function to get the download URL for each item's image
      const getItemUrls = async () => {
        const urls = await Promise.all(
          allItems.map(async item => {
            // Create a child reference for the item's image
            const itemImageRef = ref(storage, item.itemsUrl);
            return getDownloadURL(itemImageRef);
          })
        );
        setItemUrls(urls);
      };

      getItemUrls();
    }
  }, [allItems]);

  return (
    <div className="flex flex-wrap">
      {allItems &&
        allItems.map((item, index) => (
          <div
            key={index}
            className="relative group w-1/2 h-full border-r border-t border-b border-[#0f1923] border-opacity-30 p-12 flex flex-col gap-4 hover:shadow-[inset_700px_0_0_0] hover:shadow-red-500 duration-[700ms,400ms] transition-[color,box-shadow]l"
            id="card-container"
          >
            <p className="text-6xl font-semibold text-[#0f1923] group-hover:text-[#ece8e1]">
              {item?.itemsName} .
            </p>
            <p className="absolute z-10 mt-[86px] text-3xl group-hover:text-[#ece8e1] text-[#0f1923] opacity-0 group-hover:opacity-100">
              Jenis // {item?.jenisItem}
            </p>
            <div className="w-full h-[275px] mt-8">
              {itemUrls[index] ? (
                <img
                  className="w-1/2 m-auto border-[4px] rounded-full border-[#0f1923] p-2 shadow-xl shadow-[#0f1923] group-hover:opacity-5"
                  src={itemUrls[index]}
                  alt={item?.itemsName}
                />
              ) : (
                <p>Loading...</p>
              )}
            </div>
            <p className="text-base text-[#0f1923] text-opacity-70 group-hover:opacity-0">
              {item.itemsSummary}
            </p>
            <div className="absolute mt-[110px] z-10 opacity-0 group-hover:opacity-100 text-[#ece8e1]">
              <p className="mt-10 w-5/6 text-justify">
                {item?.itemsDescription}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ItemsBattleTable;
