import { createContext, useState } from "react";

let HoverContext = createContext({
  isSearchExpanded: false,
  isHeroExpanded: false,
  hoveredIndex: null,
  onClick: undefined,
  handleMouseEnter: undefined,
  handleMouseLeave: undefined
});

export function HoverContextProvider(props) {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isHeroExpanded, setIsHeroExpanded] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const onClickSearch = () => {
    setIsSearchExpanded(!isSearchExpanded);
  };
  const onClickHero = () => {
    setIsHeroExpanded(!isHeroExpanded);
  };
  const handleMouseEnter = index => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <HoverContext.Provider
      value={{
        isHeroExpanded,
        isSearchExpanded,
        hoveredIndex,
        onClickSearch,
        onClickHero,
        handleMouseEnter,
        handleMouseLeave
      }}
    >
      {props.children}
    </HoverContext.Provider>
  );
}

export default HoverContext;
