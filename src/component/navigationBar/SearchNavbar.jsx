import { useContext } from "react";
import HoverContext from "../context/HoverContext";

const SearchNavbar = () => {
  let hoverContext = useContext(HoverContext);
  return (
    <div className="ml-auto">
      <div className="flex items-center">
        {hoverContext.isSearchExpanded && (
          <div className="relative">
            <input
              className=" w-48 py-1 px-2 border border-gray-600-300 focus:outline-none rounded-md text-neutral-800"
              type="text"
              placeholder="Search"
            />
          </div>
        )}
        <div
          className={`cursor-pointer p-1 ml-2 ${
            hoverContext.isSearchExpanded
              ? "bg-neutral-800 rounded-md"
              : "bg-transparent"
          }`}
          onClick={hoverContext.onClickSearch}
        >
          <img src="/img/search.png" alt="Search Icon" />
        </div>
      </div>
    </div>
  );
};

export default SearchNavbar;
