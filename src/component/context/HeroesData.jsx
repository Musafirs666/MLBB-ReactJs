import React from "react";
import { createContext } from "react";
import { useState } from "react";

let HeroesDataContext = createContext({
  allHeroes:[],
  allHeroesToEdit:null,
  skills:[],
  skillCount:0,
  isloading:false,
  imageName:null
});

export function HeroesDataContextProvider(props) {
  const [allHeroes, setAllHeroes] = useState([]);
  const [allHeroesToEdit, setAllHeroesToEdit] = useState(null);
  const [skills, setSkills] = useState([]);
  const [skillCount, setSkillCount] = useState(0);
  const [isloading, setIsLoading] = useState(false);
  const [imageName, setImageName] = useState();

  return (
    <HeroesDataContext.Provider
      value={{
        allHeroes,
        allHeroesToEdit,
        skills,
        skillCount,
        isloading,
        imageName
      }}
    >
      {props.children}
    </HeroesDataContext.Provider>
  );
}

export default HeroesDataContext;
