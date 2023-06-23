import { useContext } from "react";
import DropDownNavbar from "./DropDownNavbar";
import HoverContext from "../context/HoverContext";

const ItemNavbar = props => {
  let hoverContext = useContext(HoverContext);
  return (
    <div
      className="relative"
      onMouseEnter={() => hoverContext.handleMouseEnter(props.index)}
      onMouseLeave={hoverContext.handleMouseLeave}
    >
      <button
        className={`rounded-md rounded-bl-none px-4 py-1 text-center inline-flex items-center ${
          hoverContext.hoveredIndex === props.index
            ? "bg-neutral-800 text-whites"
            : ""
        }`}
        type="button"
      >
        {props.title}
        <svg
          className="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      {hoverContext.hoveredIndex === props.index && (
        <div className="bg-neutral-800 shadow w-[75%] absolute mt-0">
          <ul className="text-zinc-50 py-1 border-t-4 border-red-500 box-border">
            {props.dropdownItems.map(dropdownItem => (
              <DropDownNavbar
                key={dropdownItem.path}
                path={dropdownItem.path}
                label={dropdownItem.label}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ItemNavbar;
