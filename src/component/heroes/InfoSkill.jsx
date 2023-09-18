import React, { useEffect, useState } from "react";
import { storage } from "../../firebase-config";
import { ref, getDownloadURL } from "firebase/storage";

const InfoSkill = ({
  isHeroExpanded,
  allHeroes,
  getHeroes,
  selectedHero,
  nameOfSkills,
  defaultImageSkill,
  defaultDescriptionSkill,
  setDefaultImageSkill,
  setDefaultDescriptionSkill,
  setDefaultSkillName,
  defaultSkillName
}) => {
  useEffect(() => {
    getHeroes();
  }, []);

  const [selectedSkill, setSelectedSkill] = useState();
  const [skillImageRef, setSkillImageRef] = useState();

  const onClickSkill = (event, skill) => {
    setDefaultDescriptionSkill();
    setDefaultSkillName();
    setDefaultImageSkill();

    setSelectedSkill(skill);

    const imageSkillRef = ref(storage, `${skill.skillImage}`);
    getDownloadURL(imageSkillRef)
      .then(url => {
        setSkillImageRef(url);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <>
      {isHeroExpanded ? (
        <div className="h-[830px] bg-[#ece8e1] text-[#0f1923] pt-[225px] pl-[100px]">
          <div className="w-[1px] h-[830px] bg-[#0f1923] bg-opacity-40 z-10 absolute mt-[-225px]"></div>
          <div className="h-[1px] w-[830px] bg-[#0f1923] bg-opacity-40 absolute mt-[150px]"></div>
          <div className="w-[660px] h-[370px] bg-[#0f1923] absolute z-10 right-20 mt-[-50px]">
            {/* <img src={skillImageRef} className="w-[660px] h-[370px]" /> */}
            <img src={defaultImageSkill? defaultImageSkill : skillImageRef} className="w-[660px] h-[370px]" />
            <div className="flex justify-end">
              <div className="w-[620px] h-[25px] bg-neutral-400"></div>
            </div>
          </div>
          <div className="w-full h-[595px] text-xl text-[#0f1923]">
            <div className="w-full h-fit text-6xl font-semibold">
              <p>Kemampuan Khusus</p>
            </div>
            <div className="pl-[85px] z-10 absolute">
              <div className="w-full h-fit my-[60px] flex gap-5">
                {selectedHero.skills.map((skill, index) => (
                  <img
                    key={`${skill.skillName}_${index}`}
                    className="w-[72px] h-[72px] cursor-pointer"
                    src={nameOfSkills[index]}
                    alt="Dummy Image"
                    onClick={event => onClickSkill(event, skill)}
                  />
                ))}
              </div>
              <p className="mt-[20px] ">// {defaultDescriptionSkill
                  ? defaultSkillName
                  : selectedSkill?.skillName}</p>
              <p className="w-[230px] mt-[10px] text-lg opacity-90">
                {/* {selectedSkill?.skillDescription} */}
                {defaultDescriptionSkill
                  ? defaultDescriptionSkill
                  : selectedSkill?.skillDescription}
              </p>
            </div>
          </div>
        </div>
      ) : (
        ``
      )}
    </>
  );
};

export default InfoSkill;
