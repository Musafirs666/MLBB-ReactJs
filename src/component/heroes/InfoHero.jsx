import React, { useEffect, useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase-config";

const InfoHero = ({
  onClickHero,
  selectedHero,
  heroImageRef,
  allHeroes,
  getHeroes,
  setHeroImageRef,
  setSelectedHero
}) => {

  useEffect(() => {
    getHeroes();
  }, []);
  
  useEffect(() => {
    if (allHeroes.length > 1) {
      setSelectedHero(allHeroes[1]);
      const defImageRef = ref(storage, `${allHeroes[1]?.heroImage}`);
      
      getDownloadURL(defImageRef)
        .then(url => {
          setHeroImageRef(url);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [allHeroes]);

  return (
    <div className="h-[650px] bg-[#0f1923] text-[#ece8e1] w-full flex overflow-hidden pt-[23px] mt-[55px]">
      {/* Name of Heroes */}
      {/* <div className="w-1/3 h-full pl-[65px]"> */}
      <ScrollContainer className="w-1/3 h-full pl-[65px]">
        {allHeroes.map((hero, index) => (
          <div
            onClick={event => {
              onClickHero(event, hero);
            }}
            className={`flex gap-5 font-semibold`}
            key={index}
          >
            <p className="text-[20px] pointer-events-none select-none">
              {index + 1}
            </p>
            <p className="text-[110px] cursor-pointer leading-none">
              {hero.heroName}
            </p>
          </div>
        ))}
      </ScrollContainer>
      {/* </div> */}

      {/* Image of Heroes */}
      <div className="w-1/3 h-full flex justify-center items-center mt-[50px]">
        {heroImageRef && (
          <img src={heroImageRef} className="w-[93%]" alt="Hero" />
        )}
      </div>

      {/* Information of Heroes */}
      <div className="w-1/3 h-full flex justify-center items-center">
        <div className="w-fit h-fit text-xl">
          <p>// Peran</p>
          <p className="text-5xl mt-[10px]">{selectedHero?.heroRoles}</p>
          <p className="mt-[20px]">// Biografi</p>
          <p className="w-[300px] mt-[10px] text-lg text-justify">
            {selectedHero?.heroBiography}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoHero;
